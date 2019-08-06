
$( "#btnMenuInicio" ).click(function() {
  norVentana.mostrarSelPersonaje();
});
$( "#btnSelPerInicio" ).click(function() {
  if(config.asignarPersonaje()){
    norVentana.mostrarJuego();
  }else{
    $( "#selPerError" ).html("Error de usuario")
  }
});
$( "#btnMenuDificultad" ).click(function() {
  norVentana.mostrarMenuDificultad();
});

$( "#btnDificultadFacil" ).click(function() {
  config.asignarDificultad(0);
  norVentana.mostrarInicio();
});
$( "#btnDificultadNormal" ).click(function() {
  config.asignarDificultad(1);
  norVentana.mostrarInicio();
});
$( "#btnDificultadDificil" ).click(function() {
  config.asignarDificultad(2);
  norVentana.mostrarInicio();
});

//$( "#juegoMain" ).mousemove(function(e) {
$( "#juegoMain" ).click(function(e) {
  isoMapa.asignarSelPos(e.clientX,e.clientY)
});
$( "#juegoMain" ).mousemove(function(e) {
  //isoMapa.asignarSelPos(e.clientX,e.clientY)
  //isoMapa.asignarDesfase(e.clientX,e.clientY,norVentana)

});


$('.carousel').carousel()
