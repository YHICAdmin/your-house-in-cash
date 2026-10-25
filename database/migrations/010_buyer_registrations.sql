create table buyer_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (btrim(full_name) <> ''),
  email_address text not null check (btrim(email_address) <> ''),
  phone_digits varchar(10) check (phone_digits is null or phone_digits ~ '^[0-9]{10}$'),
  purchasing_method text,
  investment_strategies text[] not null default '{}',
  purchase_budget text,
  preferred_areas text,
  email_marketing_opt_in boolean not null default false,
  email_marketing_consented_at timestamptz,
  email_marketing_consent_version text,
  sms_marketing_opt_in boolean not null default false,
  sms_marketing_consented_at timestamptz,
  sms_marketing_consent_version text,
  submission_key uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (submission_key)
);

create unique index buyer_registrations_email_address_unique
  on buyer_registrations (lower(email_address));

create trigger buyer_registrations_set_updated_at
before update on buyer_registrations
for each row execute function set_updated_at();
