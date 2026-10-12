-- Your House in Cash initial submission storage.
-- Run this migration against the Neon project using its SQL Editor.

create extension if not exists pgcrypto;

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table leads (
  id uuid primary key default gen_random_uuid(),
  property_address text not null check (btrim(property_address) <> ''),
  seller_name text not null check (btrim(seller_name) <> ''),
  phone_digits varchar(10) not null check (phone_digits ~ '^[0-9]{10}$'),
  email_address text not null check (btrim(email_address) <> ''),
  property_condition text,
  occupancy text,
  selling_reasons text[] not null default '{}',
  selling_timeline text,
  notes varchar(2000),
  property_details_saved_at timestamptz,
  hubspot_sync_status text not null default 'pending'
    check (hubspot_sync_status in ('pending', 'synced', 'failed')),
  hubspot_record_id text,
  hubspot_sync_attempted_at timestamptz,
  hubspot_sync_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger leads_set_updated_at
before update on leads
for each row
execute function set_updated_at();

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  sender_name text not null check (btrim(sender_name) <> ''),
  email_address text not null check (btrim(email_address) <> ''),
  phone_digits varchar(10) check (phone_digits is null or phone_digits ~ '^[0-9]{10}$'),
  property_address text,
  message text not null check (btrim(message) <> ''),
  hubspot_sync_status text not null default 'pending'
    check (hubspot_sync_status in ('pending', 'synced', 'failed')),
  hubspot_record_id text,
  hubspot_sync_attempted_at timestamptz,
  hubspot_sync_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger contact_messages_set_updated_at
before update on contact_messages
for each row
execute function set_updated_at();
