# Deployment Guide - NVibe AI Website

This guide will help you deploy the NVibe AI website to various platforms.

## Prerequisites

1. **Supabase Setup**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create a table called `contact_submissions` with the following schema:
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
   - Get your project URL and anon key from the Supabase dashboard

2. **Environment Variables**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Optimized for Next.js
- Automatic deployments from GitHub
- Built-in analytics and performance monitoring
- Global CDN
- Free tier available

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Add environment variables in the Vercel dashboard
5. Deploy automatically

**Environment Variables in Vercel:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Netlify

**Steps:**
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder (if using static export) or connect to GitHub
4. Add environment variables in Netlify dashboard
5. Deploy

### 3. AWS Amplify

**Steps:**
1. Push code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Connect your repository
4. Add environment variables
5. Deploy

### 4. Railway

**Steps:**
1. Connect your GitHub repository to Railway
2. Add environment variables
3. Deploy automatically

## Performance Optimization

### Build Optimization
```bash
# Build for production
npm run build

# Analyze bundle size
npm run analyze
```

### Image Optimization
- All images are optimized using Next.js Image component
- WebP and AVIF formats are supported
- Images are served from a CDN

### Code Splitting
- Automatic code splitting with Next.js
- Framer Motion and Lucide React are optimized
- Lazy loading for components

## SEO Configuration

### Meta Tags
- Title, description, and keywords are configured
- Open Graph tags for social media
- Twitter Card support
- Structured data markup

### Sitemap
- Automatically generated at `/sitemap.xml`
- Includes all main sections
- Updated with deployment

### Robots.txt
- Configured at `/robots.txt`
- Allows all crawlers
- Points to sitemap

## Monitoring and Analytics

### Vercel Analytics
- Built-in performance monitoring
- Core Web Vitals tracking
- Real user monitoring

### Custom Analytics
You can add Google Analytics or other tracking:
1. Add tracking code to `layout.tsx`
2. Configure in your analytics dashboard

## Security

### Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### Environment Variables
- Never commit `.env.local` to version control
- Use platform-specific secret management
- Rotate keys regularly

## Domain Configuration

### Custom Domain
1. Purchase a domain (e.g., nvibe.ai)
2. Configure DNS settings
3. Add domain to your hosting platform
4. Update sitemap and robots.txt URLs

### SSL Certificate
- Automatically provided by Vercel/Netlify
- Force HTTPS redirects
- HSTS headers

## Troubleshooting

### Common Issues

**Build Failures:**
- Check TypeScript errors: `npm run type-check`
- Fix linting issues: `npm run lint:fix`
- Ensure all dependencies are installed

**Environment Variables:**
- Verify all required variables are set
- Check variable names match exactly
- Restart the application after changes

**Supabase Connection:**
- Verify project URL and anon key
- Check table schema matches exactly
- Test connection in Supabase dashboard

### Performance Issues

**Slow Loading:**
- Check image optimization
- Analyze bundle size
- Enable compression
- Use CDN

**Mobile Performance:**
- Test on actual devices
- Use Chrome DevTools mobile simulation
- Check Core Web Vitals

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update content regularly
- Check performance metrics

### Backup
- Code is backed up in Git
- Database backups via Supabase
- Environment variables in platform secrets

## Support

For issues or questions:
- Email: nirav@nvibe.ai
- Phone: 646-413-4795
- Check the README.md for more details
