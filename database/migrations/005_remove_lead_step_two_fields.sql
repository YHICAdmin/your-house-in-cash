-- The cash-offer form no longer collects a second-step property questionnaire.
alter table leads
  drop column property_condition,
  drop column occupancy,
  drop column selling_reasons,
  drop column selling_timeline,
  drop column property_details_saved_at;
