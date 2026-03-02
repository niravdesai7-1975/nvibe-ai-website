# 🚀 XMachina Website Deployment Prompt

## Overview
Deploy the XMachina website to Netlify and connect it to a GoDaddy domain, following the same architecture as the NVibe AI website deployment.

## Prerequisites Checklist

### 1. Domain Setup (GoDaddy)
- [ ] Domain name: `xmachina.com` (or your chosen domain) purchased on GoDaddy
- [ ] Access to GoDaddy DNS management panel
- [ ] Domain is unlocked and ready for DNS changes

### 2. Backend Services Setup

#### Supabase Database
- [ ] Create a new Supabase project at [supabase.com](https://supabase.com)
- [ ] Create `contact_submissions` table with schema:
  ```sql
  CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );
  ```
- [ ] Get Supabase Project URL
- [ ] Get Supabase Anon Key
- [ ] Configure Row Level Security (RLS) policies to allow inserts

#### EmailJS Setup
- [ ] Create EmailJS account at [emailjs.com](https://emailjs.com)
- [ ] Create email service (Gmail, Outlook, etc.)
- [ ] Create email template for auto-response
- [ ] Get Service ID
- [ ] Get Template ID
- [ ] Get Public Key

### 3. Website Code Preparation
- [ ] Website code is ready (Next.js project)
- [ ] All dependencies installed (`npm install`)
- [ ] Code tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)

## Deployment Steps

### Phase 1: Netlify Deployment

#### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account (or sign in if existing)
3. Verify email address

#### Step 2: Deploy Website

**Option A: Deploy from GitHub (Recommended)**
1. Push XMachina website code to GitHub repository
2. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your XMachina repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (or `publish` if using static export)
   - **Node version**: `18`
5. Click **"Deploy site"**
6. Wait for build to complete (2-3 minutes)

**Option B: Deploy via Netlify CLI**
```bash
cd "/path/to/xmachina-website"
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=.next
```

**Option C: Drag & Drop (Quick Test)**
1. Build the project: `npm run build`
2. Go to Netlify dashboard
3. Drag and drop the `.next` folder (or `publish` folder) to deploy area
4. Site will be live at `https://random-name.netlify.app`

#### Step 3: Configure Environment Variables
In Netlify dashboard → Site settings → Environment variables, add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Important**: After adding environment variables, redeploy the site.

### Phase 2: GoDaddy Domain Configuration

#### Step 1: Add Custom Domain in Netlify
1. In Netlify dashboard → Site settings → Domain management
2. Click **"Add custom domain"**
3. Enter your domain: `xmachina.com` (or `www.xmachina.com`)
4. Netlify will show DNS configuration needed

#### Step 2: Configure DNS in GoDaddy

**Go to GoDaddy DNS Management:**
1. Log into [GoDaddy.com](https://godaddy.com)
2. Go to **"My Products"** → **"Domains"**
3. Click on your domain name
4. Click **"DNS"** or **"Manage DNS"**

**Update DNS Records:**

**For Root Domain (xmachina.com):**
- **Type A Record:**
  - Name: `@` (or leave blank)
  - Value: `75.2.60.5` (Netlify's IP - verify in Netlify dashboard)
  - TTL: `600` (or default)

- **Type A Record (Alternative):**
  - Name: `@` (or leave blank)
  - Value: `76.76.19.67` (Netlify's secondary IP)
  - TTL: `600`

**For WWW Subdomain (www.xmachina.com):**
- **Type CNAME Record:**
  - Name: `www`
  - Value: `xmachina.netlify.app` (or your Netlify site name)
  - TTL: `600`

**Remove/Update Existing Records:**
- Delete any conflicting A records
- Update existing CNAME records if needed
- Keep MX records if you have email set up

#### Step 3: Enable HTTPS in Netlify
1. In Netlify dashboard → Site settings → Domain management
2. Click on your custom domain
3. Click **"Verify DNS configuration"**
4. Wait for DNS propagation (can take 24-48 hours)
5. Netlify will automatically provision SSL certificate
6. Enable **"Force HTTPS"** option

### Phase 3: Post-Deployment Configuration

#### Step 1: Update Website Configuration
Update these files in your codebase:

**`next.config.js` or `next.config.ts`:**
```javascript
const nextConfig = {
  output: 'export', // if using static export
  distDir: 'publish',
  // ... other config
}
```

**`netlify.toml`** (create if doesn't exist):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "origin-when-cross-origin"
```

#### Step 2: Update SEO Configuration
Update these files with XMachina branding:

**`next-seo.config.js`** (or equivalent):
```javascript
export default {
  title: 'XMachina - Your Tagline',
  description: 'XMachina description',
  canonical: 'https://xmachina.com',
  openGraph: {
    url: 'https://xmachina.com',
    title: 'XMachina',
    description: 'XMachina description',
    images: [{ url: 'https://xmachina.com/og-image.jpg' }],
    site_name: 'XMachina',
  },
}
```

**`sitemap.xml`**:
- Update all URLs to use `https://xmachina.com`
- Ensure all pages are included

**`robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://xmachina.com/sitemap.xml
```

#### Step 3: Test Contact Form
1. Visit `https://xmachina.com` (or Netlify URL)
2. Fill out contact form
3. Verify:
   - Form submission appears in Supabase database
   - Auto-response email is sent
   - Team notification email is sent (if configured)

### Phase 4: Google Search Console Setup

#### Step 1: Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://xmachina.com`
3. Choose verification method:
   - **HTML file upload** (upload to Netlify)
   - **DNS verification** (add TXT record in GoDaddy)
   - **HTML tag** (add to website head)

#### Step 2: Submit Sitemap
1. In Search Console → Sitemaps
2. Submit: `https://xmachina.com/sitemap.xml`
3. Wait for indexing (can take days/weeks)

## Verification Checklist

### DNS Verification
- [ ] DNS records updated in GoDaddy
- [ ] DNS propagation complete (check with `dig xmachina.com` or online tools)
- [ ] Domain verified in Netlify
- [ ] SSL certificate active (green lock in browser)

### Website Functionality
- [ ] Website loads at `https://xmachina.com`
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] Fast loading times

### Backend Services
- [ ] Supabase connection working
- [ ] Form submissions saving to database
- [ ] EmailJS sending auto-response emails
- [ ] No console errors in browser DevTools

### SEO & Analytics
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Meta tags correct
- [ ] Analytics tracking (if added)

## Troubleshooting

### DNS Issues
**Problem**: Domain not resolving
- **Solution**: Wait 24-48 hours for DNS propagation
- **Check**: Use `nslookup xmachina.com` or online DNS checker
- **Verify**: DNS records match exactly what Netlify shows

**Problem**: SSL certificate not provisioning
- **Solution**: Ensure DNS is correctly configured first
- **Check**: Netlify dashboard → Domain management → SSL status
- **Wait**: Can take up to 24 hours after DNS verification

### Build Failures
**Problem**: Build fails in Netlify
- **Solution**: Check build logs in Netlify dashboard
- **Common fixes**:
  - Update Node version to 18
  - Fix TypeScript errors
  - Ensure all dependencies in package.json
  - Check environment variables are set

### Environment Variables Not Working
**Problem**: Variables not accessible in code
- **Solution**: Ensure variables start with `NEXT_PUBLIC_`
- **Fix**: Redeploy site after adding variables
- **Verify**: Check variable names match exactly

### Contact Form Not Working
**Problem**: Form submissions failing
- **Check**: Supabase URL and anon key correct
- **Check**: EmailJS credentials correct
- **Check**: Browser console for errors
- **Verify**: RLS policies in Supabase allow inserts

## Cost Breakdown

### Free Tier (Recommended)
- **Netlify Hosting**: FREE (100GB bandwidth/month)
- **GoDaddy Domain**: ~$12-15/year (one-time purchase)
- **Supabase**: FREE (500MB database, 2GB bandwidth)
- **EmailJS**: FREE (200 emails/month)
- **SSL Certificate**: FREE (provided by Netlify)
- **Total**: ~$12-15/year

### Paid Options (If Needed)
- **Netlify Pro**: $19/month (more bandwidth, team features)
- **Supabase Pro**: $25/month (8GB database, more bandwidth)
- **EmailJS Paid**: $15/month (unlimited emails)

## Maintenance

### Regular Tasks
- [ ] Monitor Netlify analytics
- [ ] Check Supabase for form submissions
- [ ] Update dependencies monthly
- [ ] Review and respond to contact form submissions
- [ ] Check Google Search Console for indexing issues

### Updates
- [ ] Keep Next.js and dependencies updated
- [ ] Monitor security advisories
- [ ] Backup database regularly (Supabase auto-backups)
- [ ] Test contact form monthly

## Support Resources

### Documentation
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GoDaddy DNS Help](https://www.godaddy.com/help)
- [Supabase Docs](https://supabase.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs)

### Contact
- **Netlify Support**: support@netlify.com
- **GoDaddy Support**: 24/7 phone/chat support
- **Supabase Support**: [Discord community](https://discord.supabase.com)

## Quick Reference Commands

```bash
# Build locally
npm run build

# Test build locally
npm run start

# Deploy to Netlify (CLI)
netlify deploy --prod

# Check deployment status
netlify status

# View logs
netlify logs
```

## Success Criteria

✅ Website live at `https://xmachina.com`  
✅ HTTPS working (green lock)  
✅ Contact form functional  
✅ Auto-response emails sending  
✅ Form submissions saving to database  
✅ Mobile responsive  
✅ Fast loading (< 3 seconds)  
✅ Google Search Console verified  
✅ Sitemap submitted  

---

**🎉 Once all checkboxes are complete, your XMachina website will be fully deployed and operational!**

**Last Updated**: January 2025


