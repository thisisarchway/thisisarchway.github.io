# Analytics Setup Guide

## Google Analytics Configuration

To enable Google Analytics tracking on your site:

1. **Get your Google Analytics Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property (or use an existing one)
   - Copy your Measurement ID (it starts with `G-`)

2. **Add your Measurement ID to the code:**
   - Open `src/components/Analytics.tsx`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID
   - Example: `const GA_MEASUREMENT_ID = 'G-ABC123XYZ';`

3. **What gets tracked:**
   - Page views (automatically tracked on every route change)
   - Custom events (use the `trackEvent` function)

## Custom Event Tracking

You can track custom events using the `trackEvent` function:

```typescript
import { trackEvent } from './components/Analytics';

// Example: Track button clicks
trackEvent('click', 'button', 'Investment CTA', 1);

// Example: Track newsletter signups
trackEvent('signup', 'newsletter', 'footer');
```

## Privacy Considerations

Google Analytics respects:
- Do Not Track browser settings
- GDPR compliance (when configured properly)
- User privacy preferences

Make sure to add a privacy policy and cookie notice to your site if required by law.
