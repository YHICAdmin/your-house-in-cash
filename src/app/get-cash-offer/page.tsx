import type { Metadata } from "next";
import { MinimalHeader } from "@/components/layout/minimal-header";
import { MinimalFooter } from "@/components/layout/minimal-footer";
import { SellerForm } from "@/components/seller/seller-form";
import styles from "@/components/seller/seller-form.module.css";

export const metadata: Metadata = { title: "Get a Cash Offer | Your House in Cash" };

export default function SellerFormPage() {
  return <div className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.ribbon} src="/brand/seller-form-background.svg" alt="" />
      </div>
    <MinimalHeader />
    <main className={`system-lines-bg section-spacing ${styles.main}`}>
      <div className="content-inset">
        <div className={styles.card}>
          <SellerForm />
        </div>
      </div>
    </main>
    <MinimalFooter />
  </div>;
}
