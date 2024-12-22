import { analyticsConfig } from '@/config/analytics'

interface TrackEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent({ action, category, label, value }: TrackEventParams) {
  try {
    // Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }

    // Facebook Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('trackCustom', action, {
        category: category,
        label: label,
        value: value,
      })
    }

    // Google Tag Manager
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: action,
        category: category,
        label: label,
        value: value,
      })
    }
  } catch (error) {
    console.warn('Analytics error:', error)
  }
}

export const trackPageView = (url: string) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined' && analyticsConfig.gaId) {
    window.gtag('config', analyticsConfig.gaId, {
      page_path: url
    })
  }

  // Facebook Pixel
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView')
  }

  // Google Tag Manager
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      'event': 'pageview',
      'page': url
    })
  }
}
