export const analyticsEventNames = {
  clickToCall: "click_to_call",
  generateLead: "generate_lead",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analyticsConsentGranted?: boolean;
  }
}

export function trackAnalyticsEvent(eventName: typeof analyticsEventNames[keyof typeof analyticsEventNames]) {
  try {
    if (window.__analyticsConsentGranted) window.gtag?.("event", eventName);
  } catch {
    // Analytics must never affect a visitor's action.
  }
}

export function trackPageView(pathname: string) {
  try {
    if (window.__analyticsConsentGranted && pathname.startsWith("/")) {
      window.gtag?.("event", "page_view", { page_path: pathname });
    }
  } catch {
    // Analytics must never affect navigation.
  }
}
