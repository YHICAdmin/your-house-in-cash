import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { TextLink } from "@/components/ui/text-link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Your House in Cash",
  description: "Learn how Your House in Cash handles personal information collected through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main>
        <section className={`${styles.policy} section-spacing system-lines-bg`} aria-labelledby="privacy-policy-heading">
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.column}>
              <header className={styles.pageHeading}>
                <h1 id="privacy-policy-heading" className="text-display">Privacy Policy</h1>
                <p className="text-body-small">Effective date: October 12, 2026</p>
              </header>

              <div className={styles.content}>
                <section>
                  <p>Your House in Cash is operated by TOP HOUSES LLC. This Privacy Policy explains how we handle information when you use this website.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Information You Provide</h2>
                  <p>The website includes forms for requesting a cash offer and sending a message. Depending on the form, we may collect your name, email address, phone number, property address, details about the property, your selling timeline, and information you include in a message or notes.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">How We Use Information</h2>
                  <p>We use information to respond to your request, discuss your property, provide an offer, follow up about a possible transaction, operate our business, and meet legal or recordkeeping obligations.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Address Autocomplete</h2>
                  <p>When you type at least three characters into a property-address field, the text you enter is sent from your browser to Geoapify to provide address suggestions. Geoapify may receive technical request information, including your IP address and request details. Geoapify&apos;s handling of that information is governed by its <TextLink href="https://www.geoapify.com/privacy-policy/">Privacy Policy</TextLink>.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Information Collected Automatically</h2>
                  <p>When you visit the website, our website host and service providers may receive standard technical information, such as your IP address, browser type, device information, pages requested, and the date and time of your visit. We use this information to operate, maintain, and protect the website.</p>
                  <p>We do not use advertising pixels or website analytics tools at this time. Third-party features, including Google Maps and Geoapify address autocomplete, may use cookies or similar technologies under their own privacy policies.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Who Receives Information</h2>
                  <p>We may share personal information with authorized people who need it to respond to inquiries, evaluate properties, complete transactions, operate our business, or provide support.</p>
                  <p>We may also share information with service providers that help us operate the website, store form submissions, communicate with you, and run our business. These providers may include:</p>
                  <ul>
                    <li>Our website host</li>
                    <li>Database host</li>
                    <li>Email or communication providers</li>
                    <li>Geoapify for address autocomplete</li>
                    <li>Google for embedded maps</li>
                  </ul>
                  <p>We may disclose information when required by law, to protect our rights or safety, or as part of a business sale, merger, or similar transaction.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Google Maps</h2>
                  <p>Some pages include an embedded Google Map. Loading or using that map connects your browser to Google. Google may collect information under its own <TextLink href="https://policies.google.com/privacy">Privacy Policy</TextLink>. We do not control Google&apos;s practices.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Retention</h2>
                  <p>We keep lead and inquiry information for three years after our last meaningful interaction with you. If your inquiry leads to a transaction, contract, or closing, we may keep relevant records longer when needed for legal, tax, accounting, dispute-resolution, or regulatory purposes.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Marketing Communications</h2>
                  <p>We may use your contact information to respond to your request, discuss your property, provide an offer, and follow up about a possible transaction. If we send promotional email, you can opt out by using the unsubscribe instructions in the message or contacting us. Submitting a form does not itself give permission for automated marketing calls or texts.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Privacy Requests</h2>
                  <p>You may contact us at <TextLink href="mailto:info@yourhousesincash.com">info@yourhousesincash.com</TextLink> to ask about the personal information we hold about you or to request access, correction, or deletion. We may ask for information needed to verify your request. We may keep information that we need for legal, recordkeeping, or business purposes.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Changes to This Policy</h2>
                  <p>We may update this Privacy Policy from time to time. We will post the updated version on this page and change the effective date.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Contact</h2>
                  <p>For privacy questions, contact <TextLink href="mailto:info@yourhousesincash.com">info@yourhousesincash.com</TextLink> or call <TextLink href="tel:2165109014">(216) 510-9014</TextLink>.</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
