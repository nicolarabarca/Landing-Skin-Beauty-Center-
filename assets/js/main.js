$(function () {
  // <-- Esto hace que se ejecute el código hasta que se cargó el DOM
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });
});

$(function () {
  $(".visible ").click(function () {
    $(".hidden").toggle();
  });
});

$(document).ready(function () {
  $(".ingredients").on("dblclick", function () {
    $(".ingredients").css("color", "#dc3545");
  });
});
$(document).ready(function () {
  $(".preparation").on("dblclick", function () {
    $(".preparation").css("color", "#dc3545");
  });
});
