# NVibe AI Website

A modern, Apple-inspired single-page website for NVibe AI built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Apple-style Design**: Minimalist dark theme with glassmorphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion for scroll-triggered animations and hover effects
- **Parallax Effects**: Hero section with parallax scrolling background
- **Interactive Components**: Hover effects, scale animations, and smooth transitions
- **Contact Form**: Supabase-integrated contact form with EmailJS auto response
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Fast loading times with optimized images and code splitting

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Email Service**: EmailJS (template: template_h1vkudn)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_h1vkudn
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

3. **Set up Supabase Database**
   Create a table called `contact_submissions` with the following schema:
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

4. **Set up EmailJS**
   - Create an account at [emailjs.com](https://emailjs.com)
   - Create email templates for auto responses
   - Get your service ID, template ID, and public key

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx        # Sticky navigation with glassmorphism
│   ├── HeroSection.tsx      # Hero with parallax background
│   ├── SolutionsSection.tsx # Solutions cards with animations
│   ├── NvidiaSection.tsx    # NVIDIA-powered section
│   ├── ContactSection.tsx   # Contact form with EmailJS integration
│   └── Footer.tsx           # Footer with links and contact info
└── lib/
    └── supabase.ts          # Supabase client and utilities
```

## Customization

### Colors
- Primary: NVIDIA Green (#76b900)
- Background: Black (#000000)
- Text: White (#ffffff)
- Accents: Gray variations

### Fonts
- Primary: Inter (Google Fonts)
- Fallback: System fonts

### Animations
- Scroll-triggered fade-ins
- Hover scale effects (1.05x)
- Parallax scrolling
- Smooth transitions

## Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Vercel
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## SEO Features

- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- Email: nirav@nvibe.ai
- Phone: 646-413-4795
- Location: San Francisco, CA