alter table leads
  add column sms_confirmation_attempted_at timestamptz;

alter table contact_messages
  add column sms_confirmation_attempted_at timestamptz;
