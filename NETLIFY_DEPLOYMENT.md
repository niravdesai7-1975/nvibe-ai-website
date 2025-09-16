# Netlify Deployment Guide - NVibe AI Website

This guide will help you deploy your NVibe AI website to Netlify with auto response functionality.

## Prerequisites

Before deploying, ensure you have:

1. **EmailJS Account Setup**
   - Service ID
   - Template ID: `template_h1vkudn` (already configured)
   - Public Key

2. **Supabase Database Setup**
   - Project URL
   - Anon Key
   - `contact_submissions` table created

3. **GitHub Repository**
   - Code pushed to GitHub
   - Repository is public or you have Netlify access

## Method 1: Deploy from GitHub (Recommended)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub**:
   ```bash
   cd "/Users/niravdesai/NVIBE AI Website/nvibe-website"
   git init
   git add .
   git commit -m "Initial commit with EmailJS auto response"
   git branch -M main
   git remote add origin https://github.com/yourusername/nvibe-ai-website.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Choose GitHub** and authorize Netlify
4. **Select your repository**: `nvibe-ai-website`
5. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

### Step 3: Configure Environment Variables

In the Netlify dashboard:

1. **Go to Site settings > Environment variables**
2. **Add the following variables**:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_h1vkudn
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Deploy

1. **Click "Deploy site"**
2. **Wait for the build to complete** (usually 2-3 minutes)
3. **Your site will be live** at `https://your-site-name.netlify.app`

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Build and Deploy

```bash
cd "/Users/niravdesai/NVIBE AI Website/nvibe-website"
npm run build
netlify deploy --prod --dir=.next
```

## Method 3: Drag and Drop (Quick Test)

### Step 1: Build the Project

```bash
cd "/Users/niravdesai/NVIBE AI Website/nvibe-website"
npm run build
```

### Step 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop the `.next` folder** to the deploy area
3. **Add environment variables** in site settings
4. **Redeploy** after adding environment variables

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. **In Netlify dashboard**: Site settings > Domain management
2. **Add custom domain**: `nvibe.ai` or `www.nvibe.ai`
3. **Configure DNS**: Point your domain to Netlify
4. **Enable HTTPS**: Automatically provided by Netlify

### 2. Form Handling

Your contact form will work automatically with:
- **Supabase**: Stores form submissions
- **EmailJS**: Sends auto response emails
- **Netlify Forms**: Alternative form handling (if needed)

### 3. Performance Optimization

The `netlify.toml` file includes:
- **Caching headers** for static assets
- **Security headers** for protection
- **Redirects** for proper routing

## Testing Your Deployment

### 1. Test the Contact Form

1. **Visit your live site**
2. **Fill out the contact form**
3. **Submit and check**:
   - Form data appears in Supabase
   - Auto response email is sent
   - Team notification email is sent

### 2. Check Console for Errors

1. **Open browser DevTools**
2. **Check Console tab** for any errors
3. **Check Network tab** for failed requests

### 3. Verify Environment Variables

Add this temporary debug code to check variables:

```javascript
// Add to ContactSection.tsx temporarily
console.log('EmailJS Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
console.log('EmailJS Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
console.log('EmailJS Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
```

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors

**Environment Variables Not Working:**
- Ensure variables start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check variable names match exactly

**EmailJS Not Working:**
- Verify service ID and public key
- Check template ID is correct
- Test with a real email address

**Supabase Connection Issues:**
- Verify project URL and anon key
- Check table schema matches
- Ensure RLS policies allow inserts

### Performance Issues

**Slow Loading:**
- Check image optimization
- Enable compression in netlify.toml
- Use CDN (automatically provided)

**Mobile Issues:**
- Test on actual devices
- Check responsive design
- Verify touch interactions

## Monitoring and Analytics

### Netlify Analytics

1. **Enable Netlify Analytics** in site settings
2. **Monitor**:
   - Page views
   - Form submissions
   - Performance metrics
   - Error rates

### Custom Analytics

Add Google Analytics or other tracking:

1. **Add tracking code** to `layout.tsx`
2. **Configure** in your analytics dashboard
3. **Test** on live site

## Security Considerations

### Environment Variables

- **Never commit** `.env.local` to Git
- **Use Netlify's** environment variable system
- **Rotate keys** regularly
- **Limit permissions** for API keys

### Headers

The `netlify.toml` includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## Maintenance

### Regular Updates

1. **Update dependencies**: `npm update`
2. **Check security advisories**
3. **Monitor performance metrics**
4. **Test contact form** regularly

### Backup

- **Code**: Backed up in Git
- **Database**: Supabase automatic backups
- **Environment**: Stored in Netlify

## Support

For deployment issues:
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Email**: nirav@nvibe.ai
- **Phone**: 646-413-4795

## Quick Deploy Commands

```bash
# Build and test locally
npm run build
npm run start

# Deploy to Netlify (if using CLI)
netlify deploy --prod

# Check deployment status
netlify status
```

Your NVibe AI website with auto response functionality is now ready for Netlify deployment! 🚀
