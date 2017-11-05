$().ready(function () {
  $.validator.messages.required = '';
  $("#formulario").validate();
});