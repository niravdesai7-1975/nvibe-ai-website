# EmailJS Setup Guide for NVibe AI Auto Response

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Template 1: Auto Response to User
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Auto Response Template"
4. Use this template content:

**Subject:** Thank you for contacting NVibe AI - We'll be in touch soon!

**Body:**
```
Dear {{to_name}},

Thank you for reaching out to NVibe AI! We've received your message and our team will review it shortly.

Here's a summary of your inquiry:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Message: {{message}}

We typically respond within 24 hours during business days. If you have any urgent questions, please don't hesitate to call us at 646-413-4795.

Best regards,
The NVibe AI Team

---
NVibe AI - Transforming Business with AI
Email: nirav@nvibe.ai
Phone: 646-413-4795
```

4. Save the template and note down your **Template ID** (this will be your `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`)

### Template 2: Notification to Team
1. Create another template named "Team Notification"
2. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}} - {{company}}

**Body:**
```
Hello NVibe AI Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}

Please respond to: {{reply_to}}

Best regards,
NVibe AI Website
```

3. Save this template and note down its **Template ID** (you'll need this for the notification template)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_auto_response_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update ContactSection.tsx
The code has been updated to use two templates:
- Auto response template (for users)
- Team notification template (for internal notifications)

Make sure to update the template ID in the code if needed.

## Step 7: Test the Form
1. Restart your development server: `npm run dev`
2. Go to your website and test the contact form
3. Check both your email and the user's email to verify both messages are sent

## Troubleshooting
- Make sure all environment variables are correctly set
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template variables match the ones in the code
- Test with a real email address to ensure delivery
