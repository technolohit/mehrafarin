# syntax=docker/dockerfile:1.7

# Mehrafarin production image — multi-stage, standalone Next.js runtime.
# Do not bake secrets or .env files into this image.

ARG NODE_VERSION=22-bookworm-slim

# ---------- dependencies ----------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder ----------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Baked into metadata/sitemap at build time (NEXT_PUBLIC_*).
ENV NEXT_PUBLIC_SITE_URL=https://darmanafarin.com

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ---------- runner ----------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV NEXT_PUBLIC_SITE_URL=https://darmanafarin.com

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs --create-home nextjs \
  && rm -rf \
    /usr/local/lib/node_modules/npm \
    /usr/local/lib/node_modules/corepack \
    /opt/yarn-v* \
  && rm -f \
    /usr/local/bin/npm \
    /usr/local/bin/npx \
    /usr/local/bin/corepack \
    /usr/local/bin/yarn \
    /usr/local/bin/yarnpkg

COPY --from=builder /app/public ./public

RUN mkdir -p .next \
  && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
