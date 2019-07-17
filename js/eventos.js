$( document ).ready(function() {  // Plugin initialization
  $('.carousel').carousel();
  norVentana.reescalaVentana();


});
$( window ).resize(function() {
  norVentana.reescalaVentana();
});
