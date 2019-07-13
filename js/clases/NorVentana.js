function NorVentana(){
  //parametros
  this.mainTamano = .8
  this.anchoMain = window.innerWidth * this.mainTamano;
  this.altoMain =  window.innerHeight;
  this.anchoMenu = window.innerWidth * (1 - this.mainTamano);
  this.altoMenu =  window.innerHeight;

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
    this.anchoMain = window.innerWidth * this.mainTamano;
    this.altoMain =  window.innerHeight;
    this.anchoMenu = window.innerWidth * (1 - this.mainTamano);
    this.altoMenu =  window.innerHeight;
  }
  this.reescalaVentana = function(){
    this.actualizarTamanos();

    $(".cvMain").attr("width",this.anchoMain);
    $(".cvMain").attr("height",this.altoMain);
  	$(".cvMenu").attr("width",this.anchoMenu);
  	$(".cvMenu").attr("height",this.altoMenu);

  }

}
