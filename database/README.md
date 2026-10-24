# Database migrations

Run the SQL files in `migrations/` against the matching Neon database, in filename order. Each migration is applied once and retained in version control.

`001_initial_schema.sql` creates the storage for cash-offer leads and Contact page messages. It includes the internal state needed to retry a future HubSpot sync, but deliberately does not create user accounts, CRM workflow fields, notification delivery, or browser-accessible database credentials.

`004_lead_notification_queue.sql` adds an idempotency key to cash-offer leads. Its former notification queue is removed by `006_remove_lead_notification_queue.sql`.

`005_remove_lead_step_two_fields.sql` removes the unused former Step 2 columns from `leads`.

`006_remove_lead_notification_queue.sql` removes the retired notification queue table.

`007_add_lead_sms_confirmation_attempt.sql` adds one-time SMS confirmation attempt fields for cash-offer leads and Contact Us messages.

`009_add_automated_sms_monthly_usage.sql` adds the atomic, UTC calendar-month counter that caps automated Quo SMS attempts at 10,000 per month.
