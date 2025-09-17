# Authentication Setup Guide

This guide will help you set up user authentication for the NVibe AI demo system.

## Features

✅ **Complete Authentication System**
- User registration and login
- Protected routes
- Demo dashboard
- User profile management
- Secure logout

✅ **Demo Credentials**
- Email: `demo@nvibe.ai`
- Password: `demo123`

## Supabase Setup

### 1. Enable Authentication

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Settings**
3. Enable **Email** authentication
4. Configure email templates (optional)

### 2. Configure Authentication Settings

In **Authentication** > **Settings**:

- **Site URL**: `http://localhost:3000` (for development)
- **Redirect URLs**: Add your production domain when deploying
- **Email confirmation**: Enable if you want email verification

### 3. User Management

Users will be automatically created in the `auth.users` table when they register.

## Environment Variables

Make sure your `.env.local` file includes:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Usage

### For Demo Purposes

1. **Create Demo User** (optional):
   - Email: `demo@nvibe.ai`
   - Password: `demo123`
   - Name: `Demo User`
   - Company: `NVibe AI`

2. **Test Registration**:
   - Users can register with any email
   - Email verification is optional
   - User data is stored in Supabase

### Navigation

- **Sign Up**: Click "Sign Up" in navigation
- **Sign In**: Click "Sign In" in navigation  
- **Dashboard**: Access `/demo` when logged in
- **Sign Out**: Click "Sign Out" in navigation

## Demo Dashboard Features

- **Overview**: Key metrics and recent activity
- **Analytics**: Performance charts (placeholder)
- **Settings**: User profile management
- **Responsive**: Works on all devices

## Security Features

- **Protected Routes**: `/demo` requires authentication
- **Session Management**: Automatic session handling
- **Secure Logout**: Proper session cleanup
- **Input Validation**: Form validation and error handling

## Customization

### Adding More Demo Data

Edit `src/components/DemoDashboard.tsx` to customize:
- Metrics and KPIs
- Recent activities
- User profile fields
- Dashboard layout

### Styling

All components use Tailwind CSS and can be customized:
- Colors and themes
- Layout and spacing
- Animations and transitions

## Troubleshooting

### Common Issues

1. **Supabase not configured**: Check environment variables
2. **Authentication not working**: Verify Supabase settings
3. **Protected routes not working**: Check AuthProvider setup

### Debug Mode

Add this to see authentication state:

```tsx
const { user, loading } = useAuth()
console.log('User:', user, 'Loading:', loading)
```

## Production Deployment

When deploying to production:

1. Update Supabase redirect URLs
2. Set production environment variables
3. Configure email templates
4. Test authentication flow

## Support

For issues or questions:
- Check Supabase documentation
- Review Next.js authentication guides
- Contact development team
