# Email Configuration Setup Guide

## Step 1: Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Verify your email address
3. In your Resend dashboard, go to "API Keys"
4. Click "Create API Key"
5. Give it a name like "Mile High Interface Contact Form"
6. Copy the API key (it starts with `re_`)

## Step 2: Configure Domain (Optional but Recommended)

1. In your Resend dashboard, go to "Domains"
2. Add your domain: `milehighinterface.com`
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

## Step 3: Set Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:
   ```
   RESEND_API_KEY=re_your_actual_api_key_from_step_1
   BUSINESS_EMAIL=hello@milehighinterface.com
   ```

## Step 4: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact page and submit a test message
3. Check your business email for the contact form submission
4. The sender should also receive a confirmation email

## Email Features

### Business Email
- Contains full contact details and message
- Formatted HTML email with professional styling
- Reply-to is set to the sender's email for easy response
- Timestamped with Mountain Time

### Confirmation Email (to sender)
- Thank you message with company branding
- Copy of their original message
- Professional automated response
- Link back to your website

## Troubleshooting

### "Email service not configured" error
- Make sure `RESEND_API_KEY` is set in `.env.local`
- Restart your development server after adding environment variables

### Emails not being delivered
- Check your Resend dashboard for delivery logs
- Verify your domain is properly configured
- Check spam folders

### In Production (Vercel)
- Add environment variables in your Vercel dashboard
- Go to your project settings → Environment Variables
- Add both `RESEND_API_KEY` and `BUSINESS_EMAIL`
- Redeploy your application

## Free Tier Limits
- Resend free tier: 100 emails/day, 3,000 emails/month
- Perfect for contact forms and small business needs
- Upgrade available if you need more volume