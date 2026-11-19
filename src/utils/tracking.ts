/**
 * Google Ads & Analytics Attribution Tracking Utility
 * Handles capturing UTMs, GCLID, GBRAID, WBRAID and firing conversion events
 */

export interface AttributionData {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_url?: string;
  captured_at?: string;
}

const STORAGE_KEY = 'aaryav_attribution';
const LEADS_STORAGE_KEY = 'aaryav_leads_submissions';

// Safe extraction of URL params
export function initAttributionTracking(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existingRaw = sessionStorage.getItem(STORAGE_KEY);
    const existing: AttributionData = existingRaw ? JSON.parse(existingRaw) : {};

    const attribution: AttributionData = {
      ...existing,
      gclid: urlParams.get('gclid') || existing.gclid || undefined,
      gbraid: urlParams.get('gbraid') || existing.gbraid || undefined,
      wbraid: urlParams.get('wbraid') || existing.wbraid || undefined,
      utm_source: urlParams.get('utm_source') || existing.utm_source || undefined,
      utm_medium: urlParams.get('utm_medium') || existing.utm_medium || undefined,
      utm_campaign: urlParams.get('utm_campaign') || existing.utm_campaign || undefined,
      utm_content: urlParams.get('utm_content') || existing.utm_content || undefined,
      utm_term: urlParams.get('utm_term') || existing.utm_term || undefined,
      referrer: document.referrer || existing.referrer || 'direct',
      landing_url: window.location.href,
      captured_at: existing.captured_at || new Date().toISOString(),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch (e) {
    console.warn('Failed to initialize attribution tracking:', e);
    return {};
  }
}

export function getAttributionData(): AttributionData {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : initAttributionTracking();
  } catch {
    return {};
  }
}

// Track custom Google Ads / GA4 conversion events
export function trackEvent(eventName: 'generate_lead' | 'click_whatsapp' | 'click_call' | 'view_portfolio' | string, params: Record<string, any> = {}) {
  const attribution = getAttributionData();
  const eventPayload = {
    ...params,
    ...attribution,
    timestamp: new Date().toISOString(),
  };

  // Google Tag Manager dataLayer support
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
  }

  // Google Analytics / Google Ads gtag support
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, eventPayload);
  }

  // Debug log in development or test environment
  if (import.meta.env.DEV || typeof window !== 'undefined') {
    console.log(`[Conversion Event Fired: ${eventName}]`, eventPayload);
  }
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  countryCode: string;
  email?: string;
  service: string;
  projectDetails?: string;
  attribution: AttributionData;
  submittedAt: string;
}

// Save lead record locally and dispatch event
export function saveLeadSubmission(lead: Omit<LeadSubmission, 'id' | 'attribution' | 'submittedAt'>): LeadSubmission {
  const attribution = getAttributionData();
  const fullRecord: LeadSubmission = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...lead,
    attribution,
    submittedAt: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
    existing.unshift(fullRecord);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn('Could not persist lead to localStorage:', err);
  }

  // Fire main conversion event
  trackEvent('generate_lead', {
    service: fullRecord.service,
    has_email: Boolean(fullRecord.email),
    country_code: fullRecord.countryCode,
  });

  return fullRecord;
}
