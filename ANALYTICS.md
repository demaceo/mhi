# Analytics Setup

This project uses multiple analytics solutions to provide comprehensive insights:

## Vercel Analytics & Speed Insights

### What it tracks:
- **Page Views**: Unique visits to each page
- **Visitor Data**: Geographic location, referrers, device types
- **Core Web Vitals**: LCP, FID, CLS performance metrics
- **Speed Insights**: Real user performance data

### Configuration:
- Automatically enabled when deployed to Vercel
- No additional configuration required
- Data available in Vercel dashboard under Analytics tab

### Features:
- Privacy-friendly (no cookies)
- GDPR compliant
- Real-time data
- Performance monitoring

## Plausible Analytics (Optional)

### Setup:
1. Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=milehighinterface.com` to your environment variables
2. Configure your domain in Plausible dashboard
3. Analytics will automatically start tracking

### Benefits:
- Open source alternative
- Privacy-focused
- Lightweight script
- European hosting available

## Usage

Analytics are automatically initialized in the root layout. No additional setup required for basic tracking.

For custom event tracking, you can use the `trackEvent` function:

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a custom event
trackEvent('contact_form_submit', {
  page: '/contact',
  timestamp: new Date().toISOString()
});
```

## Dashboard Access

- **Vercel Analytics**: Available in your Vercel project dashboard
- **Plausible**: Available at plausible.io (if configured)

## Privacy Compliance

Both analytics solutions are privacy-friendly and GDPR compliant:
- No personal data collection
- No cross-site tracking
- No cookies required
- Anonymized visitor data