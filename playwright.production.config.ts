import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/production",
  timeout: 60_000,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: process.env.PRODUCTION_TEST_URL?.replace(/\/$/, ""),
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
});
