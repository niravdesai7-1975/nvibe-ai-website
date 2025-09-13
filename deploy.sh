#!/bin/bash

echo "🚀 NVibe AI Website Deployment Helper"
echo "========================================"
echo ""

# Check if files exist
echo "📁 Checking website files..."
if [ -f "index.html" ] && [ -f "styles.css" ] && [ -f "script.js" ]; then
    echo "✅ All website files are ready!"
else
    echo "❌ Missing website files. Please ensure all files are present."
    exit 1
fi

echo ""
echo "🌐 Deployment Options:"
echo "1. Netlify (Recommended - FREE)"
echo "2. Traditional Web Hosting"
echo "3. View deployment guide"
echo ""

read -p "Choose an option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🎯 Netlify Deployment Steps:"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up for free account"
        echo "3. Drag & drop this folder to Netlify"
        echo "4. Connect your NVibe AI domain"
        echo ""
        echo "📁 Your website folder: $(pwd)"
        echo "📋 Files to upload:"
        ls -la *.html *.css *.js
        echo ""
        echo "🌐 After deployment, connect your NVibe AI domain in Netlify dashboard"
        ;;
    2)
        echo ""
        echo "🏠 Traditional Hosting Steps:"
        echo "1. Purchase hosting (Bluehost, HostGator, SiteGround)"
        echo "2. Upload files to public_html folder"
        echo "3. Point NVibe AI domain to hosting"
        echo ""
        echo "📁 Files to upload:"
        ls -la *.html *.css *.js
        ;;
    3)
        echo ""
        echo "📖 Opening deployment guide..."
        if [ -f "DEPLOYMENT_GUIDE.md" ]; then
            open DEPLOYMENT_GUIDE.md
        else
            echo "Deployment guide not found."
        fi
        ;;
    *)
        echo "Invalid option. Please choose 1, 2, or 3."
        ;;
esac

echo ""
echo "�� Good luck with your deployment!"
