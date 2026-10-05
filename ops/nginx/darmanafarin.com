# Canonical HTTPS host — darmanafarin.com (Mehrafarin)
# Upstream: 127.0.0.1:2580 → container :3000
#
# Security posture:
# - Keep the app container read_only in compose (do not weaken it for log noise).
# - Reject known scanner/probe paths here so they never reach Next.js.
# - Cloudflare SSL/TLS: Full (strict)
#
# Install (replaces Certbot-mangled bootstrap):
#   sudo cp ops/nginx/darmanafarin.com /etc/nginx/sites-available/darmanafarin.com
#   sudo ln -sf /etc/nginx/sites-available/darmanafarin.com /etc/nginx/sites-enabled/
#   sudo nginx -t && sudo systemctl reload nginx

# Canonical HTTPS apex
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name darmanafarin.com;
    server_tokens off;

    access_log /var/log/nginx/darmanafarin.access.log;
    error_log  /var/log/nginx/darmanafarin.error.log warn;

    ssl_certificate /etc/letsencrypt/live/darmanafarin.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/darmanafarin.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Baseline browser/network hardening (public marketing site).
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

    # --- Probe / scanner denylist (never proxy to Node) ---
    location ~* ^/(\.env|\.git|\.aws|\.DS_Store) {
        return 404;
    }
    location ~* \.(php|asp|aspx|jsp|cgi)$ {
        return 404;
    }
    location ~* ^/(wp-admin|wp-login\.php|xmlrpc\.php|phpmyadmin|adminer|cgi-bin|vendor/phpunit) {
        return 404;
    }
    location ~* ^/(login\.action|trace\.axd|config\.json|info\.php|actuator|server-status|server-info)(?:$|/) {
        return 404;
    }

    location / {
        # This site does not use Next.js Server Actions.
        if ($http_next_action != "") {
            return 404;
        }

        proxy_pass http://127.0.0.1:2580;
        proxy_http_version 1.1;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host  $host;
        proxy_set_header X-Forwarded-Port  $server_port;

        proxy_connect_timeout 5s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# HTTPS www → canonical apex
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name www.darmanafarin.com;
    server_tokens off;

    ssl_certificate /etc/letsencrypt/live/darmanafarin.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/darmanafarin.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://darmanafarin.com$request_uri;
}

# All HTTP → canonical HTTPS apex
server {
    listen 80;
    listen [::]:80;

    server_name darmanafarin.com www.darmanafarin.com;
    server_tokens off;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }

    location / {
        return 301 https://darmanafarin.com$request_uri;
    }
}
