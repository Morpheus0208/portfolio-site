#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/generate-icons.sh "<email@domain.tld>" 
#    ou: ./scripts/generate-icons.sh "<hash_md5_de_ton_email>"

EMAIL_OR_HASH="${1:-}"

if [[ -z "${EMAIL_OR_HASH}" ]]; then
  echo "❌ Usage: $0 <email-ou-hash-md5>"
  exit 1
fi

# --- Vérifs préalables ---
command -v node >/dev/null 2>&1 || { echo "❌ Node.js requis"; exit 1; }
command -v magick >/dev/null 2>&1 || { echo "❌ ImageMagick requis (commande 'magick')"; exit 1; }
command -v curl >/dev/null 2>&1 || { echo "❌ curl requis"; exit 1; }

# --- Email → hash MD5 (32 chars) ou hash déjà donné ---
to_lower() { echo "$1" | tr '[:upper:]' '[:lower:]'; }

if [[ "$EMAIL_OR_HASH" == *"@"* ]]; then
  EMAIL_NORM="$(to_lower "$(echo -n "$EMAIL_OR_HASH" | xargs)")"
  HASH="$(node -e "const crypto=require('crypto');console.log(crypto.createHash('md5').update('${EMAIL_NORM}').digest('hex'))")"
else
  # suppose que c'est déjà un hash (on normalise en minuscules)
  HASH="$(to_lower "$EMAIL_OR_HASH")"
fi

if [[ ! "$HASH" =~ ^[0-9a-f]{32}$ ]]; then
  echo "❌ Hash MD5 invalide: $HASH"
  exit 1
fi

echo "ℹ️  Gravatar hash: $HASH"

# --- Fonctions utilitaires ---
download_gravatar() {
  local size="$1"
  local out="$2"
  local base="https://www.gravatar.com/avatar/${HASH}?r=g"
  # Essaye l’avatar réel (404 si absent), sinon fallback identicon
  if ! curl -fsSL "${base}&s=${size}&d=404" -o "$out"; then
    echo "⚠️  Pas d'avatar Gravatar → fallback identicon (${size}px)"
    curl -fsSL "${base}&s=${size}&d=identicon" -o "$out"
  fi
}

mkdir -p public tmp
trap 'rm -rf tmp' EXIT

# --- Téléchargements sources ---
echo "⬇️  Téléchargement sources…"
download_gravatar 1200 "public/og-image.jpg"      # OG
download_gravatar 512  "tmp/gravatar-512.png"     # base pour favicons & android 512
download_gravatar 192  "tmp/gravatar-192.png"     # android 192 (optionnel)

# --- Générations images (ImageMagick) ---
echo "🖼️  Génération favicons & icônes…"
# Favicon PNGs
magick tmp/gravatar-512.png -resize 64x64  public/favicon-64.png
magick tmp/gravatar-512.png -resize 32x32  public/favicon-32x32.png
magick tmp/gravatar-512.png -resize 16x16  public/favicon-16x16.png

# Favicon .ico multi-tailles
magick tmp/gravatar-512.png -resize 256x256 tmp/favicon-256.png
magick tmp/favicon-256.png public/favicon-64.png public/favicon-32x32.png public/favicon-16x16.png \
  -define icon:auto-resize=256,128,64,48,32,16 public/favicon.ico

# Apple Touch Icon (180x180)
magick tmp/gravatar-512.png -resize 180x180 public/apple-touch-icon.png

# Android Chrome icons
magick tmp/gravatar-512.png -resize 192x192 public/android-chrome-192x192.png
magick tmp/gravatar-512.png -resize 512x512 public/android-chrome-512x512.png

echo "✅  Images générées dans ./public :"
ls -1 public | sed 's/^/ - /'

echo "ℹ️  Ajoute ces balises dans <head> de ton index.html (voir section snippets)."
