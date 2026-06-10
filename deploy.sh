#!/bin/bash
# Deploy WGU Study App to Netlify
# Usage: ./deploy.sh

echo "🚀 WGU Study App Deployment Script"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Must run from /Users/binx/wgu-study-app directory"
    echo "Current directory: $(pwd)"
    exit 1
fi

echo "📍 Current directory: $(pwd)"
echo ""

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "⚠️  Netlify CLI not found. Installing..."
    echo ""
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        echo "❌ npm not found. Please install Node.js and npm first:"
        echo "   brew install node"
        echo ""
        echo "Then run this script again."
        exit 1
    fi
    
    echo "Installing netlify-cli globally..."
    npm install -g netlify-cli
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install netlify-cli"
        exit 1
    fi
    
    echo "✅ Netlify CLI installed successfully"
    echo ""
fi

# Show site info
echo "📦 Site Information:"
echo "   Site ID: 1e745ae8-f778-4e92-aa38-0e223c8d7f55"
echo "   URL: https://binx-study-app.netlify.app"
echo ""

# Check authentication
echo "🔐 Checking Netlify authentication..."
netlify status &> /dev/null

if [ $? -ne 0 ]; then
    echo "⚠️  Not logged in to Netlify. Logging in..."
    netlify login
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to authenticate with Netlify"
        exit 1
    fi
fi

echo "✅ Authenticated"
echo ""

# List what will be deployed
echo "📁 Files to deploy:"
echo "   ✅ index.html (main app)"
echo "   ✅ D119-ADHD-Study-Guide.md"
echo "   ✅ D120-ADHD-Study-Guide.md"
echo "   ✅ visuals/d119-developmental-milestones.html (NEW)"
echo "   ✅ visuals/d119-immunizations.html (NEW)"
echo "   ✅ visuals/index.html (UPDATED)"
echo "   ✅ + all other existing files"
echo ""

# Confirm deployment
read -p "🚀 Ready to deploy to production? (y/N): " confirm

if [[ ! $confirm =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

echo ""
echo "🚀 Deploying to production..."
echo ""

# Deploy to production
netlify deploy --prod --dir .

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your site is live at: https://binx-study-app.netlify.app"
    echo ""
    echo "📋 New D119 Visuals:"
    echo "   • https://binx-study-app.netlify.app/visuals/d119-developmental-milestones.html"
    echo "   • https://binx-study-app.netlify.app/visuals/d119-immunizations.html"
    echo "   • https://binx-study-app.netlify.app/visuals/ (updated index)"
    echo ""
    echo "✨ Done!"
else
    echo ""
    echo "❌ Deployment failed"
    echo ""
    echo "💡 Alternative deployment methods:"
    echo "   1. Manual drag & drop: https://app.netlify.com/sites/binx-study-app/deploys"
    echo "   2. Netlify Drop (no login): https://app.netlify.com/drop"
    echo ""
    exit 1
fi
