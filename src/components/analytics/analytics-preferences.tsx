"use client";

import { TextLink } from "@/components/ui/text-link";

export function AnalyticsPreferences() {
  return (
    <TextLink onClick={() => {
      document.cookie = "yhac_analytics_consent=; Path=/; Max-Age=0; SameSite=Lax; Secure";
      window.location.reload();
    }}>
      Change analytics cookie preference
    </TextLink>
  );
}
