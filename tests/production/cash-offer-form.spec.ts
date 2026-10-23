import { expect, test } from "@playwright/test";

function required(name: "PRODUCTION_TEST_URL" | "PRODUCTION_TEST_EMAIL" | "PRODUCTION_TEST_PHONE") {
  const value = process.env[name];
  if (!value) throw new Error(`${name} must be configured.`);
  return value;
}

test("the live cash-offer form stores a lead", async ({ page }) => {
  required("PRODUCTION_TEST_URL");
  const email = required("PRODUCTION_TEST_EMAIL");
  const phone = required("PRODUCTION_TEST_PHONE");

  await page.goto("/get-cash-offer", { waitUntil: "networkidle" });
  await page.getByLabel("Property Address").fill("123 Test Street, Cleveland, OH 44101");
  await page.getByLabel("Your Name").fill("AUTOMATED TEST — Do Not Contact");
  await page.getByLabel("Phone Number").fill(phone);
  await page.getByLabel("Email Address").fill(email);
  await page.getByLabel("Anything else you'd like us to know?").fill(`Automated production form check: ${new Date().toISOString()}`);

  await page.getByRole("button", { name: "Get My Cash Offer" }).click();

  await expect(page.getByRole("heading", { name: /all set/i })).toBeVisible();
});

test("the live contact form stores a message", async ({ page }) => {
  required("PRODUCTION_TEST_URL");
  const email = required("PRODUCTION_TEST_EMAIL");

  await page.goto("/contact", { waitUntil: "networkidle" });
  await page.getByLabel("Your Name").fill("AUTOMATED TEST — Do Not Contact");
  await page.getByLabel("Email", { exact: true }).fill(email);
  await page.getByLabel("Message").fill(`Automated production contact-form check: ${new Date().toISOString()}`);

  await page.getByRole("button", { name: "Send Message" }).click();

  await expect(page.getByRole("heading", { name: "Thanks for reaching out." })).toBeVisible();
});
