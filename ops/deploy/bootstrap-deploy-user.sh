#!/bin/bash
# Bootstrap / repair the restricted Mehrafarin deploy user on the production VPS.
# Run as root on the host (same VPS as Begamun: 159.195.202.163).
#
# Safe to re-run. Does not deploy an image.
set -Eeuo pipefail

readonly REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
readonly DEPLOY_USER='deploy-mehrafarin'
readonly DEPLOY_HOME="/home/${DEPLOY_USER}"
readonly PUBKEY='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKwO3/xekmYtjTKG5DlAYfCnN8LGdpJQYJxl/zIPFs/b gha:technolohit/mehrafarin:deploy-only'
readonly AUTH_LINE="restrict,command=\"/usr/local/bin/mehrafarin-deploy-ssh\" ${PUBKEY}"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "ERROR: run as root" >&2
  exit 1
fi

id "${DEPLOY_USER}" &>/dev/null || useradd --system --create-home --shell /bin/bash "${DEPLOY_USER}"
usermod -s /bin/bash "${DEPLOY_USER}"

install -o root -g root -m 0755 \
  "${REPO_ROOT}/ops/deploy/deploy-mehrafarin" \
  /usr/local/sbin/deploy-mehrafarin

install -o root -g root -m 0755 \
  "${REPO_ROOT}/ops/deploy/mehrafarin-deploy-ssh" \
  /usr/local/bin/mehrafarin-deploy-ssh

install -o root -g root -m 0440 \
  "${REPO_ROOT}/ops/deploy/sudoers.deploy-mehrafarin" \
  /etc/sudoers.d/mehrafarin-deploy

visudo -cf /etc/sudoers.d/mehrafarin-deploy

install -d -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" -m 0700 "${DEPLOY_HOME}/.ssh"
printf '%s\n' "${AUTH_LINE}" > "${DEPLOY_HOME}/.ssh/authorized_keys"
chown "${DEPLOY_USER}:${DEPLOY_USER}" "${DEPLOY_HOME}/.ssh/authorized_keys"
chmod 0600 "${DEPLOY_HOME}/.ssh/authorized_keys"

install -d -o root -g root -m 0755 /opt/mehrafarin
if [[ -f "${REPO_ROOT}/compose.production.yml" ]]; then
  install -o root -g root -m 0644 \
    "${REPO_ROOT}/compose.production.yml" \
    /opt/mehrafarin/compose.production.yml
fi

# Shared VPS sshd hardening may Restrict logins via AllowUsers.
SSHD_HARDENING='/etc/ssh/sshd_config.d/99-begamun-hardening.conf'
if [[ -f "${SSHD_HARDENING}" ]] && grep -qE '^AllowUsers ' "${SSHD_HARDENING}"; then
  if ! grep -qE '^AllowUsers .*[[:space:]]deploy-mehrafarin([[:space:]]|$)' "${SSHD_HARDENING}"; then
    cp -a "${SSHD_HARDENING}" "${SSHD_HARDENING}.bak.$(date -u +%Y%m%dT%H%M%SZ)"
    sed -i -E 's/^AllowUsers .*/AllowUsers moji deploy-begamun deploy-mehrafarin/' "${SSHD_HARDENING}"
    sshd -t
    systemctl reload ssh
    echo "OK: added deploy-mehrafarin to AllowUsers and reloaded sshd"
  fi
fi

echo "OK: deploy user + forced-command key installed."
echo "Test from laptop (should refuse invalid command, NOT publickey):"
echo "  ssh -i ~/.ssh/mehrafarin-deploy/mehrafarin_gha_deploy -o IdentitiesOnly=yes deploy-mehrafarin@159.195.202.163 'deploy help'"
