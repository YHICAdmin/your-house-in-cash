-- Prevents repeated contact-form requests from creating duplicate messages and notifications.
alter table contact_messages
  add column submission_key uuid;

alter table contact_messages
  add constraint contact_messages_submission_key_unique unique (submission_key);
