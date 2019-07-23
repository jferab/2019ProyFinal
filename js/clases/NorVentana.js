function NorVentana(){
  //parametros
  this.mainTamano = .8
  this.anchoMain = window.innerWidth * this.mainTamano;
  this.altoMain =  window.innerHeight;
  this.anchoMenu = window.innerWidth * (1 - this.mainTamano);
  this.altoMenu =  window.innerHeight;

  //metodos
  this.mostrarInicio = function() {


    $("#contenedorJuego").hide();
    $("#contenedorVentanas").hide();
    $("#contenedorInicio").hide();
    $("#contenedorSelPersonaje").hide();
    $("#contenedorInicio").show();
    $("#contenedorMenu").show();
  }
  this.mostrarSelPersonaje = function() {
    //$("div").hide();
    $("#contenedorJuego").hide();
    $("#contenedorVentanas").hide();
    $("#contenedorInicio").hide();
    $("#contenedorMenu").hide();
    $("#contenedorInicio").show();
    $("#contenedorSelPersonaje").show();
    /*$(".carousel").show();
    $(".carousel-inner").show();
    $(".carousel-item").show();*/
  }
  this.mostrarJuego = function() {
    $("#contenedorVentanas").hide();
    $("#contenedorInicio").hide();
    $("#contenedorSelPersonaje").hide();
    $("#contenedorJuego").show();
    $("#contenedorJuegoMenu").show();
    $("#contenedorJuegoMain").show();
    juegoBucle()
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
  this.mostrarMenuDificultad = function(){
    $("#contenedorInicio").hide();
    $("#contenedorVentanas").show();
  }
}
