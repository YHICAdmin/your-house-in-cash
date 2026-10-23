-- Creates an idempotent, durable outbox for cash-offer lead notifications.
alter table leads
  add column submission_key uuid;

alter table leads
  add constraint leads_submission_key_unique unique (submission_key);

create table lead_notification_jobs (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null unique references leads(id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'processing', 'delivered', 'failed')),
  scheduled_at timestamptz not null,
  attempts integer not null default 0 check (attempts >= 0),
  payload jsonb,
  claim_token uuid,
  locked_at timestamptz,
  lock_expires_at timestamptz,
  delivered_at timestamptz,
  resend_email_id text,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index lead_notification_jobs_due_index
  on lead_notification_jobs (scheduled_at)
  where status = 'pending';

create trigger lead_notification_jobs_set_updated_at
before update on lead_notification_jobs
for each row
execute function set_updated_at();
