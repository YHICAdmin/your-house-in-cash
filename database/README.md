# Database migrations

Run the SQL files in `migrations/` against the matching Neon database, in filename order. Each migration is applied once and retained in version control.

`001_initial_schema.sql` creates the storage for cash-offer leads and Contact page messages. It includes the internal state needed to retry a future HubSpot sync, but deliberately does not create user accounts, CRM workflow fields, notification delivery, or browser-accessible database credentials.
