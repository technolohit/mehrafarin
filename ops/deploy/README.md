# Production deploy — Mehrafarin (`darmanafarin.com`)

Host layout mirrors Begamun on the same VPS. App lives under `/opt/mehrafarin`.

## Version control (images)

- **Git** is the source of truth for code (`main`).
- Every release builds `thnhit/mehrafarin:sha-<git-commit>` and deploys the
  **immutable digest** `thnhit/mehrafarin@sha256:…`.
- `MEHRAFARIN_IMAGE` in `/opt/mehrafarin/.env` is **written by**
  `deploy-mehrafarin` after a successful pull — you never invent a digest.

## One-time server setup

### 1. App directory + `.env` (no image digest yet)

```bash
sudo mkdir -p /opt/mehrafarin
sudo cp compose.production.yml /opt/mehrafarin/
```

Create `/opt/mehrafarin/.env` (mode `600`) — **omit** `MEHRAFARIN_IMAGE` until
the first CI deploy pins it:

```bash
MEHRAFARIN_HOST_PORT=2580
NEXT_PUBLIC_SITE_URL=https://darmanafarin.com
```

```bash
chmod 600 /opt/mehrafarin/.env
```

Do **not** run `compose up` until the first successful release deploy (or until
you manually pull a real digest from Docker Hub / Actions).

### 2. Deploy binary + SSH forced command

```bash
sudo install -o root -g root -m 0755 ops/deploy/deploy-mehrafarin /usr/local/sbin/deploy-mehrafarin
sudo install -o root -g root -m 0755 ops/deploy/mehrafarin-deploy-ssh /usr/local/bin/mehrafarin-deploy-ssh
```

Create a dedicated deploy user (or reuse pattern from Begamun) and sudoers:

```
# /etc/sudoers.d/mehrafarin-deploy
deploy-mehrafarin ALL=(root) NOPASSWD: /usr/local/sbin/deploy-mehrafarin
```

`authorized_keys` for that user (GitHub Actions key only):

```
restrict,command="/usr/local/bin/mehrafarin-deploy-ssh" ssh-ed25519 AAAA... mehrafarin-gha-deploy
```

### 3. Nginx + Certbot (`darmanafarin.com`)

DNS (Cloudflare) already points apex A + www CNAME to this host (proxied). For first certificate issuance, temporarily set both records to **DNS only** (grey cloud), or keep orange cloud if HTTP-01 through the proxy reaches origin port 80.

Bootstrap HTTP proxy (app must already answer on `127.0.0.1:2580`):

```bash
sudo cp ops/nginx/darmanafarin.com.bootstrap /etc/nginx/sites-available/darmanafarin.com
sudo ln -sf /etc/nginx/sites-available/darmanafarin.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

sudo certbot --nginx -d darmanafarin.com -d www.darmanafarin.com
```

Then install the full HTTPS config (www → apex, HTTP → HTTPS):

```bash
sudo cp ops/nginx/darmanafarin.com /etc/nginx/sites-available/darmanafarin.com
sudo nginx -t && sudo systemctl reload nginx
```

Cloudflare SSL/TLS mode: **Full (strict)**. Re-enable orange cloud after certs work.

### 4. GitHub (repo `technolohit/mehrafarin`)

Repository secrets (names match the release workflow):

| Name | Purpose |
|------|---------|
| `DOCKERHUB_USERNAME` | Docker Hub user (`thnhit`) |
| `DOCKERHUB_TOKEN` | Docker Hub access token |
| `SSH_HOST` | server IP or hostname |
| `SSH_PORT` | SSH port (usually `22`) |
| `SSH_USER` | deploy user (forced-command only) |
| `SSH_PRIVATE_KEY` | private key for that deploy user |
| `SSH_KNOWN_HOSTS` | one `ssh-keyscan` line for the host |

Deploy job uses GitHub Environment name **`production`** (for concurrency/protection). Secrets above are repository secrets.

CI workflow name must stay **`Mehrafarin CI`** (release gates on that name).

### 5. Flow

1. Push/PR → `Mehrafarin CI` (lint, typecheck, build, container smoke on `127.0.0.1:2580`)
2. Success on `main` → `Release Docker image` builds `thnhit/mehrafarin:sha-<commit>`, Trivy, push
3. Deploy job SSHs `deploy thnhit/mehrafarin@sha256:…` → script pulls digest, writes `MEHRAFARIN_IMAGE`, recreates container, health-checks

First deploy = bootstrap (no previous digest → no rollback target). Later deploys roll back to the previous digest on failure.

Manual: Actions → Release Docker image → Run workflow (from `main`).

## Image reference

```text
docker push thnhit/mehrafarin:tagname
```

Production never uses mutable tags (`latest`). Deploy always uses digest form:

```text
thnhit/mehrafarin@sha256:<64-hex>
```
