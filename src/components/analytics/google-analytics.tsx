"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { trackAnalyticsEvent, trackPageView } from "@/lib/analytics";
import styles from "./google-analytics.module.css";

const consentCookie = "yhac_analytics_consent";
const productionDomains = new Set(["yourhouseincash.com", "www.yourhouseincash.com"]);

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
  const value = document.cookie.split("; ").find(cookie => cookie.startsWith(`${consentCookie}=`))?.split("=")[1];
  return value === "granted" || value === "denied" ? value : null;
}

function saveConsent(consent: Exclude<Consent, null>) {
  document.cookie = `${consentCookie}=${consent}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("analytics-consent-change", callback);
  return () => window.removeEventListener("analytics-consent-change", callback);
}

function subscribeToNothing() {
  return () => {};
}

export function GoogleAnalytics({ measurementId, productionDeployment }: { measurementId?: string; productionDeployment: boolean }) {
  const pathname = usePathname();
  const productionDomain = useSyncExternalStore(
    subscribeToNothing,
    () => productionDomains.has(window.location.hostname),
    () => false,
  );
  const consent = useSyncExternalStore(subscribeToConsent, readConsent, () => null);
  const [tagReady, setTagReady] = useState(false);
  const lastPagePath = useRef<string | undefined>(undefined);
  const enabled = Boolean(measurementId && productionDeployment && productionDomain);
  const trackingAllowed = enabled && consent === "granted";

  useEffect(() => {
    if (!trackingAllowed || window.__analyticsConsentGranted) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer?.push(args); };
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      send_page_view: false,
    });
    window.__analyticsConsentGranted = true;
  }, [measurementId, trackingAllowed]);

  useEffect(() => {
    if (!trackingAllowed || !tagReady || !pathname || pathname === lastPagePath.current) return;
    trackPageView(pathname);
    lastPagePath.current = pathname;
  }, [pathname, tagReady, trackingAllowed]);

  useEffect(() => {
    if (!trackingAllowed || !tagReady) return;
    const onPhoneClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href^="tel:"]')) trackAnalyticsEvent("click_to_call");
    };
    document.addEventListener("click", onPhoneClick);
    return () => document.removeEventListener("click", onPhoneClick);
  }, [tagReady, trackingAllowed]);

  function updateConsent(nextConsent: Exclude<Consent, null>) {
    saveConsent(nextConsent);
    if (nextConsent === "denied") window.__analyticsConsentGranted = false;
    window.dispatchEvent(new Event("analytics-consent-change"));
  }

  if (!enabled || consent !== null) {
    return trackingAllowed ? (
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => setTagReady(true)}
      />
    ) : null;
  }

  return (
    <aside className={styles.banner} aria-label="Analytics cookie preference">
      <p className="text-body-small">We use optional analytics cookies to understand website usage. <Link href="/privacy-policy">Learn more</Link></p>
      <div className={styles.actions}>
        <button className={styles.decline} type="button" onClick={() => updateConsent("denied")}>Decline</button>
        <button className={styles.accept} type="button" onClick={() => updateConsent("granted")}>Accept analytics</button>
      </div>
    </aside>
  );
}
