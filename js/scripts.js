$().ready(function () {
  var $form = $("#formulario");
  $form.validate();

  $form.submit(function () {
    if ($form.valid()) {
      alert('Enviado!');
    }
  });

  $('#menu-button').click(function () {
    if ($('#itens:visible').length == 0) {
      $('#itens').show();
    } else {
      $('#itens').hide();
    }
  });

});