function Ventana(){
  //parametros
  this.ancho = window.innerWidth;
  this.alto =  window.innerHeight;

  //metodos
  this.mostrarInicio = function() {
    $("div").hide();
    $("#contenedorInicio").show();
    $("#contenedorMenu").show();
  }
  this.mostrarSelPersonaje = function() {
    $("div").hide();
    $("#contenedorInicio").show();
    $("#contenedorSelPersonaje").show();
  }
  this.mostrarJuego = function() {
    $("div").hide();
    $("#contenedorJuego").show();
    $("#contenedorJuegoMenu").show();
    $("#contenedorJuegoMain").show();
  }
  this.actualizarTamanos = function(){
    this.ancho = window.innerWidth;
    this.alto =  window.innerHeight;

  }
}
