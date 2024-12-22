import { trackEvent } from './analytics'

export function handleUtmData(searchParams: URLSearchParams) {
  const utmSource = searchParams.get('utm_source')
  const utmMedium = searchParams.get('utm_medium')
  const utmCampaign = searchParams.get('utm_campaign')

  if (utmSource || utmMedium || utmCampaign) {
    const utmData = {
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
    }
    localStorage.setItem('utmData', JSON.stringify(utmData))
    
    // Track UTM data as an event
    trackEvent({
      action: 'utm_tracking',
      category: 'Marketing',
      label: `source: ${utmSource}, medium: ${utmMedium}, campaign: ${utmCampaign}`
    })
  }
}

