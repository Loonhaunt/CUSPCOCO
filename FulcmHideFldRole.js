ON('load-record', function(event) {
  var adminRoles = ['Owner', 'Manager', 'Custom Admin Role'];

  // if the current role is one of the designated admin roles...
  if (ISROLE(adminRoles)) {
    // make the fields visible
    SETHIDDEN('sensitive_field_1', false);
    SETHIDDEN('sensitive_field_2', false);
  }
});