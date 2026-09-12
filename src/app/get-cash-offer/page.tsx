import type { Metadata } from "next";
import { MinimalHeader } from "@/components/layout/minimal-header";
import { MinimalFooter } from "@/components/layout/minimal-footer";
import { SellerDetails } from "@/components/seller/seller-details";
import { Progress } from "@/components/seller/progress";
import styles from "@/components/seller/seller-form.module.css";

export const metadata: Metadata = { title: "Get a Cash Offer | Your House in Cash" };

export default function SellerFormPage() {
  return <>
    <MinimalHeader />
    <main className={`system-lines-bg section-spacing ${styles.main}`}>
      <div className={styles.background} aria-hidden="true">
        {/* Approved ribbon geometry, separated from the reference's sample form. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.ribbon} src="/brand/seller-form-background.svg" alt="" />
      </div>
      <div className="content-inset">
        <div className={styles.card}>
          <Progress step={1} />
          <SellerDetails />
        </div>
      </div>
    </main>
    <MinimalFooter />
  </>;
}

