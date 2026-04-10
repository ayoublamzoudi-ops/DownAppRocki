#!/bin/bash
# ═══════════════════════════════════════════════════════════
#  Rock-i APK Release Script
#  Usage: ./release_apk.sh v2.1 "Description of changes"
# ═══════════════════════════════════════════════════════════

set -euo pipefail

VERSION="${1:?Usage: ./release_apk.sh <version> [description]}"
DESCRIPTION="${2:-Rock-i e-Scooter App — version $VERSION}"
APK_PATH="/Users/ayoublamzoudi/Desktop/DisRock/Disrock/Rock-i APP/antigraviti/Kotlin/Android/app/build/outputs/apk/release/app-release.apk"
REPO="ayoublamzoudi-ops/DownAppRocki"

# Get token from git credential store
TOKEN=$(git credential fill <<< $'protocol=https\nhost=github.com\n' 2>/dev/null | grep password | cut -d= -f2)

if [ -z "$TOKEN" ]; then
    echo "❌ No GitHub token found"
    exit 1
fi

# Check APK exists
if [ ! -f "$APK_PATH" ]; then
    echo "❌ APK not found at: $APK_PATH"
    echo "   Build the release APK first, then run this script."
    exit 1
fi

APK_SIZE=$(du -h "$APK_PATH" | cut -f1)
echo "📦 APK: $APK_PATH ($APK_SIZE)"
echo "🏷  Version: $VERSION"
echo ""

# 1. Create tag & release
echo "⏳ Creating release $VERSION..."
RELEASE=$(curl -s -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$REPO/releases" \
  -d "{
    \"tag_name\": \"$VERSION\",
    \"name\": \"Rock-i $VERSION\",
    \"body\": \"$DESCRIPTION\",
    \"draft\": false,
    \"prerelease\": false
  }")

RELEASE_ID=$(echo "$RELEASE" | python3 -c "import sys,json; print(json.load(sys.stdin).get('id',''))")

if [ -z "$RELEASE_ID" ]; then
    echo "❌ Failed to create release:"
    echo "$RELEASE" | head -5
    exit 1
fi

echo "✅ Release created (ID: $RELEASE_ID)"

# 2. Upload APK
echo "⏳ Uploading Rock-i.apk..."
UPLOAD=$(curl -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/vnd.android.package-archive" \
  --data-binary @"$APK_PATH" \
  --progress-bar \
  "https://uploads.github.com/repos/$REPO/releases/$RELEASE_ID/assets?name=Rock-i.apk")

DL_URL=$(echo "$UPLOAD" | python3 -c "import sys,json; print(json.load(sys.stdin).get('browser_download_url',''))")

echo ""
echo "═══════════════════════════════════════════"
echo "✅ Rock-i $VERSION released!"
echo "📥 Download: $DL_URL"
echo "🔗 Latest:   https://github.com/$REPO/releases/latest/download/Rock-i.apk"
echo "═══════════════════════════════════════════"
