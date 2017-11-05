$().ready(function () {
  var $form = $("#formulario");
  $form.validate();

  $form.submit(function () {
    if ($form.valid()) {
      alert('Enviado!');
    }
  });
});