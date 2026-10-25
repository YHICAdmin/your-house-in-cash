This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email notifications

Cash-offer submissions are saved to Neon, then immediately send best-effort Resend emails to the internal team and the seller. Set `RESEND_API_KEY`, a verified `RESEND_FROM_EMAIL`, and `LEAD_NOTIFICATION_EMAIL` in your environment.

Seller confirmation SMS defaults to disabled outside production and enabled in production. Set `ENABLE_SELLER_SMS=true` or `ENABLE_SELLER_SMS=false` to override the default in any environment.

## Buyer registrations

Apply `database/migrations/010_buyer_registrations.sql` before deploying buyer registration. Buyer registrations are stored by email address, and each newly created registration sends a best-effort buyer confirmation and internal team notification. Email delivery errors are logged and never prevent a registration from being saved.

## Production form check

The GitHub Actions workflow in `.github/workflows/production-cash-offer-smoke-test.yml` submits the live cash-offer and Contact Us forms daily at 14:15 UTC (10:15 AM in Bolivia). Visible success confirmations prove that the production database saved a lead and contact message. The resulting lead, messages, emails, and cash-offer SMS are intentional; the workflow does not delete database records. The Contact Us test leaves its optional phone field blank, so it sends no SMS.

Configure these repository secrets before running the workflow:

* `PRODUCTION_TEST_URL` — the public production site URL, without a trailing slash.
* `PRODUCTION_TEST_EMAIL` — `test@yourhouseincash.com`.
* `PRODUCTION_TEST_PHONE` — the existing ten-digit phone number that should receive the normal confirmation SMS.
* `PRODUCTION_TEST_ALERT_RESEND_API_KEY` — a Resend API key used only to send test-failure alerts.
* `PRODUCTION_TEST_ALERT_FROM_EMAIL` — a verified Resend sender address.
* `PRODUCTION_TEST_ALERT_EMAIL` — the recipient for failed-test alerts, such as `test@yourhouseincash.com`.

You can run the check manually from the GitHub Actions page with **Production form smoke test → Run workflow**. It intentionally uses the normal production submission path and does not alter the application code, API, or database schema.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
