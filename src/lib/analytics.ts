export const analyticsEventNames = {
  clickToCall: "click_to_call",
  contactMessageSent: "contact_message_sent",
  generateLead: "generate_lead",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analyticsConsentGranted?: boolean;
    __analyticsMeasurementId?: string;
  }
}

export function trackAnalyticsEvent(eventName: typeof analyticsEventNames[keyof typeof analyticsEventNames]) {
  try {
    if (window.__analyticsConsentGranted && window.__analyticsMeasurementId) {
      window.gtag?.("event", eventName, { send_to: window.__analyticsMeasurementId });
    }
  } catch {
    // Analytics must never affect a visitor's action.
  }
}

export function trackPageView(pathname: string) {
  try {
    if (window.__analyticsConsentGranted && window.__analyticsMeasurementId && pathname.startsWith("/")) {
      window.gtag?.("event", "page_view", {
        page_path: pathname,
        send_to: window.__analyticsMeasurementId,
      });
    }
  } catch {
    // Analytics must never affect navigation.
  }
}
