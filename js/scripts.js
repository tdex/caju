$().ready(function() {
  $("#formulario").validate({
    messages: {
      nome: 'Campo Obrigatório!',
      email: 'Por favor insira um e-mail válido!'
    }
  });
});