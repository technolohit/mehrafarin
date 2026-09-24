# Canonical HTTPS host — darmanafarin.com (Mehrafarin)
# Upstream: docker compose binds 127.0.0.1:2580 → container :3000
#
# Prerequisites:
#   1) Place this file at /etc/nginx/sites-available/darmanafarin.com
#   2) Issue certs (see ops/deploy/README.md), then enable + reload nginx
#   3) Cloudflare SSL/TLS mode: Full (strict)

# Canonical HTTPS host
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

    location / {
        # This site does not use Next.js Server Actions.
        # Reject automated probes carrying forged Next-Action headers.
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

    return 301 https://darmanafarin.com$request_uri;
}
