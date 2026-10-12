alter table contact_messages
  add constraint contact_messages_message_length
  check (char_length(message) <= 2000);
