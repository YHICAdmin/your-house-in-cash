-- Records an affirmative, optional opt-in for promotional email.
alter table leads
  add column email_marketing_opt_in boolean not null default false,
  add column email_marketing_consented_at timestamptz,
  add column email_marketing_consent_version text;

alter table contact_messages
  add column email_marketing_opt_in boolean not null default false,
  add column email_marketing_consented_at timestamptz,
  add column email_marketing_consent_version text;

alter table leads
  add constraint leads_email_marketing_consent_details
  check (
    (email_marketing_opt_in and email_marketing_consented_at is not null and email_marketing_consent_version is not null)
    or
    (not email_marketing_opt_in and email_marketing_consented_at is null and email_marketing_consent_version is null)
  );

alter table contact_messages
  add constraint contact_messages_email_marketing_consent_details
  check (
    (email_marketing_opt_in and email_marketing_consented_at is not null and email_marketing_consent_version is not null)
    or
    (not email_marketing_opt_in and email_marketing_consented_at is null and email_marketing_consent_version is null)
  );
