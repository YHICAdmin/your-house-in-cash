-- A calendar-month (UTC) counter for automated Quo SMS attempts.
-- Claiming a slot in this table before calling Quo keeps the hard limit safe
-- across concurrent requests and prevents retries from exceeding the cap.
create table automated_sms_monthly_usage (
  billing_cycle_start date primary key,
  sent_count integer not null default 0 check (sent_count >= 0 and sent_count <= 10000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger automated_sms_monthly_usage_set_updated_at
before update on automated_sms_monthly_usage
for each row
execute function set_updated_at();
