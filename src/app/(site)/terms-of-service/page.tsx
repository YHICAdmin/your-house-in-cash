import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { TextLink } from "@/components/ui/text-link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Your House in Cash",
  description: "Read the terms that govern use of the Your House in Cash website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <main>
        <section className={`${styles.terms} section-spacing system-lines-bg`} aria-labelledby="terms-of-service-heading">
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.column}>
              <header className={styles.pageHeading}>
                <h1 id="terms-of-service-heading" className="text-display">Terms of Service</h1>
                <p className="text-body-small">Effective date: October 13, 2026</p>
              </header>

              <div className={styles.content}>
                <section>
                  <p>Your House in Cash is operated by TOP HOUSES LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Service govern your use of this website.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Use of This Website</h2>
                  <p>You may use this website for lawful, personal purposes, including learning about our services, requesting a cash offer, and contacting us.</p>
                  <p>Do not use the website in a way that interferes with its operation, attempts to gain unauthorized access to it or its systems, submits false or misleading information, or violates applicable law.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Information on the Website</h2>
                  <p>We work to keep the information on this website useful and current. However, information about real estate, selling options, timelines, property values, laws, and local requirements may change and may not apply to every situation.</p>
                  <p>Website content is provided for general informational purposes only. It is not legal, tax, financial, real-estate, appraisal, or other professional advice. You should make decisions about your property based on your own circumstances and the terms of any written agreement you choose to enter.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Cash-Offer Requests</h2>
                  <p>Submitting information through this website is a request for us to review your property and contact you. It does not obligate you to sell, and it does not require us to make an offer.</p>
                  <p>Any cash offer is subject to our review of the property, the information provided, title and ownership considerations, and other relevant conditions. An offer is not final unless it is stated in a separate written agreement signed by the applicable parties.</p>
                  <p>We do not provide appraisals through this website. A cash offer is a direct-sale offer that you may compare with other options.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Information You Submit</h2>
                  <p>When you submit information through the website, you represent that it is accurate to the best of your knowledge and that you have the authority to provide it.</p>
                  <p>If you submit information about a property, you are responsible for ensuring that you have the authority to discuss the property with us. You should not submit another person&apos;s personal information unless you are authorized to do so.</p>
                  <p>Our handling of personal information is described in our <TextLink href="/privacy-policy">Privacy Policy</TextLink>.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Third-Party Services and Links</h2>
                  <p>This website may include links to third-party websites or features, including Google Maps and Geoapify address autocomplete. Those services are operated by others and are governed by their own terms and privacy practices.</p>
                  <p>We do not control third-party websites or services and are not responsible for their content, availability, or practices.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Intellectual Property</h2>
                  <p>The website and its content, including text, design, graphics, logos, and other materials, are owned by or used with permission by TOP HOUSES LLC and are protected by applicable intellectual-property laws.</p>
                  <p>You may view and use the website for personal, non-commercial purposes. You may not copy, reproduce, distribute, modify, or use website content for commercial purposes without our prior written permission.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Disclaimer of Warranties</h2>
                  <p>The website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the extent permitted by law, we do not make warranties about the website&apos;s accuracy, completeness, reliability, security, or availability.</p>
                  <p>We do not guarantee that the website will always be available, error-free, or free of harmful components.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Limitation of Liability</h2>
                  <p>To the extent permitted by applicable law, TOP HOUSES LLC and its owners, employees, and representatives will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of, or inability to use, this website.</p>
                  <p>Nothing in these Terms limits liability that cannot legally be limited.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Governing Law</h2>
                  <p>These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles. Any dispute related to these Terms or the website will be handled in the appropriate state or federal court located in Ohio, unless applicable law requires otherwise.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Changes to These Terms</h2>
                  <p>We may update these Terms from time to time. We will post the updated version on this page and change the effective date. Your continued use of the website after an update means you accept the updated Terms.</p>
                </section>

                <section>
                  <h2 className="text-heading-3">Contact</h2>
                  <p>For questions about these Terms, contact <TextLink href="mailto:info@yourhousesincash.com">info@yourhousesincash.com</TextLink> or call <TextLink href="tel:2161111111">216-111-1111</TextLink>.</p>
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
