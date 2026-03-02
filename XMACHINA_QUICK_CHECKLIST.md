# ✅ XMachina Website Deployment - Quick Checklist

## 🎯 Pre-Deployment Setup

### Domain & Services
- [ ] GoDaddy domain purchased: `xmachina.com`
- [ ] Supabase project created
- [ ] Supabase `contact_submissions` table created
- [ ] EmailJS account created
- [ ] EmailJS service and template configured

### Website Code
- [ ] Next.js project ready
- [ ] `npm install` completed
- [ ] Local testing successful (`npm run dev`)
- [ ] Build successful (`npm run build`)

## 🚀 Deployment Steps

### Step 1: Deploy to Netlify
- [ ] Netlify account created
- [ ] Website deployed to Netlify (via GitHub, CLI, or drag-drop)
- [ ] Site accessible at `*.netlify.app` URL

### Step 2: Configure Environment Variables
Add in Netlify → Site settings → Environment variables:
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [ ] Site redeployed after adding variables

### Step 3: Connect GoDaddy Domain
- [ ] Custom domain added in Netlify: `xmachina.com`
- [ ] DNS records updated in GoDaddy:
  - [ ] A record: `@` → `75.2.60.5`
  - [ ] CNAME record: `www` → `xmachina.netlify.app`
- [ ] DNS verified in Netlify
- [ ] SSL certificate active (green lock)

### Step 4: Update Website Configuration
- [ ] `netlify.toml` created/updated
- [ ] `next-seo.config.js` updated with XMachina branding
- [ ] `sitemap.xml` updated with correct domain
- [ ] `robots.txt` updated

### Step 5: Testing
- [ ] Website loads at `https://xmachina.com`
- [ ] Contact form submits successfully
- [ ] Form data appears in Supabase
- [ ] Auto-response email received
- [ ] Mobile responsive check
- [ ] No console errors

### Step 6: SEO Setup
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Meta tags verified

## 🎉 Deployment Complete!

**Your XMachina website is now live at: `https://xmachina.com`**

---

**Need detailed instructions?** See `XMACHINA_DEPLOYMENT_PROMPT.md`


