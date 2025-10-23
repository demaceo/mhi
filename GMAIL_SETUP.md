# Gmail OAuth Setup for Contact Form

This guide will help you set up Gmail OAuth authentication to send emails through your contact form.

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Name it something like "Mile High Interface Email"

## Step 2: Enable Gmail API

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Gmail API"
3. Click on "Gmail API" and click "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Name it "Contact Form Mailer"
5. Add these authorized redirect URIs:
   - `https://developers.google.com/oauthplayground`
6. Save and copy your **Client ID** and **Client Secret**

## Step 4: Get Refresh Token

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
2. Click the gear icon (⚙️) in the top right
3. Check "Use your own OAuth credentials"
4. Enter your **Client ID** and **Client Secret**
5. In the left panel, find "Gmail API v1"
6. Select `https://www.googleapis.com/auth/gmail.send`
7. Click "Authorize APIs"
8. Sign in with your Google account (the one you want to send emails from)
9. Click "Exchange authorization code for tokens"
10. Copy the **Refresh Token**

## Step 5: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# Gmail OAuth Configuration
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_EMAIL=your_gmail_address@gmail.com
BUSINESS_EMAIL=hello@milehighinterface.com
```

## Step 6: Update Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all the Gmail OAuth variables:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `GOOGLE_REFRESH_TOKEN`
   - `GOOGLE_EMAIL`
   - `BUSINESS_EMAIL`

## Step 7: Test the Setup

1. Deploy your changes to Vercel
2. Visit `https://your-domain.com/api/test-email`
3. If successful, you should see: `"Test email sent successfully via Gmail"`
4. Test the contact form on your website

## Security Notes

- ✅ **OAuth is more secure** than app passwords
- ✅ **Refresh tokens don't expire** unless revoked
- ✅ **No need to enable "Less secure apps"**
- ✅ **Works with 2FA enabled**

## Troubleshooting

**Error: "Access blocked"**
- Make sure you've enabled the Gmail API
- Verify your OAuth scopes include `gmail.send`

**Error: "Invalid refresh token"**
- Regenerate the refresh token in OAuth Playground
- Make sure you're using the correct Google account

**Error: "Quota exceeded"**
- Gmail API has daily limits (1 billion quota units/day)
- Contact form usage is well within limits

## Benefits of Gmail vs Resend

- ✅ **Free** (no monthly costs)
- ✅ **High deliverability** (Gmail's reputation)
- ✅ **No domain verification needed**
- ✅ **Uses your existing Gmail account**
- ✅ **Familiar Gmail interface** for sent emails

Your contact form will now send emails through Gmail using OAuth authentication!