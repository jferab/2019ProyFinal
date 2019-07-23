
var contextoJuego = document.getElementById("juegoMain").getContext("2d");

//Variables mapa normal
var norCiudad = new Array();
var norEnemigo = new Array();
var norImg = new NorImagenes();
var norJugador = new NorJugador();
var norMapa = new NorMapa();
var norVentana = new NorVentana();

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

//cambios raul
var mochila = new Mochila();
var imgMochila= new Image();
imgMochila.src="img/mochila.png";
var contextoMochila = document.getElementById("ventanaMochila").getContext("2d");
var interiorMochila =new Image();
interiorMochila.src="img/estiloMochila4.png";//png
var interiorMochilaBlanco =new Image();// imagen slots mochila
interiorMochilaBlanco.src="img/estiloMochila1.jpg";//jpg
var moneda =new Image();
moneda.src="img/moneda2.png";
var banderaMochila=false; // bandera cuando se abre mochila 
var posItem=-1;//saber el item seleccionadoionado en la mochila
//fin cambios raul




norVentana.mostrarJuego();
