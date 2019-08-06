
var contextoJuego = document.getElementById("juegoMain").getContext("2d");

//Variables mapa normal
var norCiudad = new Array();
var norEnemigo = new Array();
var norImg = new NorImagenes();
var norJugador = new NorJugador();
var norMapa = new NorMapa();
var norVentana = new NorVentana();
var config = new Configuracion();

//Variables juego isometrico
var isoImg = new IsoImagenes();
var isoJugador = new IsoJugador();
var isoMapa = new IsoMapa();
//var isoVentana = new norVentana();*/

norCiudad[0] = new NorCiudad(100,100,30,"Ciudad 1");
norCiudad[1] = new NorCiudad(100,500,30,"Ciudad 2");
norCiudad[2] = new NorCiudad(250,250,30,"Ciudad 3");
norCiudad[3] = new NorCiudad(500,100,30,"Ciudad 4");
norCiudad[4] = new NorCiudad(500,500,30,"Ciudad 5");

/*
var obj={x:0,y:0}
console.log(obj);

createjs.Tween.get(obj)
.to({x:10}, 3000)
.call(function(){console.log("fin");});*/
/*
estrella = new IsoEstrella();
//estrella.actualizarArr(1,3,"j");
estrella.actualizarArr(3,2,true);
estrella.actualizarArr(3,3,true);
estrella. actualizarArr(3,4,true);

estrella.buscarCamino("1a3","5a3")*/



//norVentana.mostrarJuego();
norVentana.mostrarInicio();
