#!/bin/bash

# WGU FNP Study Bundle - Gumroad Package Creator
# This script packages all necessary files into a ZIP for Gumroad upload

echo "🎓 Creating WGU FNP Study Bundle package for Gumroad..."
echo ""

# Set variables
PACKAGE_NAME="WGU-FNP-Study-Bundle-D118-D119-D120"
TEMP_DIR="/tmp/${PACKAGE_NAME}"
OUTPUT_ZIP="${HOME}/Desktop/${PACKAGE_NAME}.zip"

# Clean up old temp directory if exists
if [ -d "$TEMP_DIR" ]; then
    echo "Cleaning up old temporary files..."
    rm -rf "$TEMP_DIR"
fi

# Create fresh temp directory
echo "Creating package directory..."
mkdir -p "$TEMP_DIR"
mkdir -p "$TEMP_DIR/visuals"

# Copy core files
echo "📚 Copying core study files..."
cp index.html "$TEMP_DIR/"
cp questions-d118.js "$TEMP_DIR/"
cp questions-d119.js "$TEMP_DIR/"
cp questions-d120.js "$TEMP_DIR/"

# Copy study guides
echo "📖 Copying study guides..."
cp D118-study-guide.md "$TEMP_DIR/"
cp D119-study-guide.md "$TEMP_DIR/"
cp D120-ADHD-Study-Guide.md "$TEMP_DIR/"
cp D120-COMPETENCY-UPDATE-SUMMARY.md "$TEMP_DIR/"

# Copy visual aids
echo "🎨 Copying visual aids..."
cp visuals/index.html "$TEMP_DIR/visuals/"
cp visuals/contraception-decision-tree.html "$TEMP_DIR/visuals/"
cp visuals/falls-assessment.html "$TEMP_DIR/visuals/"
cp visuals/dementia-vs-delirium.html "$TEMP_DIR/visuals/"
cp visuals/pcos-vs-endometriosis.html "$TEMP_DIR/visuals/"
cp visuals/pregnancy-screening-timeline.html "$TEMP_DIR/visuals/"
cp visuals/polypharmacy-management.html "$TEMP_DIR/visuals/"
cp visuals/menopause-management.html "$TEMP_DIR/visuals/"

# Copy documentation
echo "📄 Copying documentation..."
cp README.md "$TEMP_DIR/"
cp NOTEBOOKLM-SETUP-GUIDE.md "$TEMP_DIR/"

# Create LICENSE file
echo "Creating LICENSE file..."
cat > "$TEMP_DIR/LICENSE.txt" << 'EOF'
WGU FNP Study Bundle - Personal Use License

Copyright © 2026 Brandon. All rights reserved.

PERMITTED USE:
✓ Personal educational use for your WGU FNP studies
✓ Download and save for your own reference
✓ Use across your personal devices

NOT PERMITTED:
✗ Redistribution or sharing with others
✗ Reselling or commercial use
✗ Posting on file-sharing sites or public forums
✗ Claiming as your own work

DISCLAIMER:
This is an independent study resource created by a WGU graduate.
Not affiliated with or endorsed by Western Governors University.

Based on publicly available competency frameworks and the
Leik FNP Intensive Review Guide (4th Edition).

All sales final. No refunds due to digital nature of product.

For support: [your-support-email]
EOF

# Remove any macOS metadata files
echo "Cleaning up system files..."
find "$TEMP_DIR" -name ".DS_Store" -delete
find "$TEMP_DIR" -name "._*" -delete

# Create ZIP file
echo ""
echo "📦 Creating ZIP file..."
cd /tmp
zip -r "$OUTPUT_ZIP" "${PACKAGE_NAME}" -x "*.DS_Store" -x "*._*"

# Clean up temp directory
echo "Cleaning up temporary files..."
rm -rf "$TEMP_DIR"

# Calculate file size
FILE_SIZE=$(du -h "$OUTPUT_ZIP" | cut -f1)

echo ""
echo "✅ SUCCESS!"
echo ""
echo "Package created: $OUTPUT_ZIP"
echo "File size: $FILE_SIZE"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Upload $PACKAGE_NAME.zip to Gumroad"
echo "2. Use product description from GUMROAD-PRODUCT-SETUP.md"
echo "3. Set price to \$47"
echo "4. Add product images (create using Canva)"
echo "5. Publish and share!"
echo ""
echo "📁 Package contents:"
cd "${HOME}/Desktop"
unzip -l "${PACKAGE_NAME}.zip" | head -30
echo ""
echo "Done! 🎉"
