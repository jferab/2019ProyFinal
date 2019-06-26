

//////CONTEXTOS///////
	var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");
	var contextoJugador = document.getElementById("lienzoJugador").getContext("2d");
	var contextoAtaque = document.getElementById("lienzoAtaque").getContext("2d");
	var contextoFondoNegro = document.getElementById("lienzoFondoNegro").getContext("2d");
	var ctxHUD = document.getElementById("lienzoHud").getContext("2d");


//cambio RRDD 09/02/2019
// Cargamos el lienzo donde vamos a dibujar la seleccion de coches
	var lienzoPersonaje2 = document.getElementById("lienzoPersonaje2");
	var contexto1 = lienzoPersonaje2.getContext("2d");
//Fin cambio RRDD 09/02/2019

/////GLOBALES//////
	var temporizador; 
	var fondox = 0;
	var fondoy = 0;

	//cambio RRDD 09/02/2019
	//variable para prueja juego
	var contadorCoches=0;
	var contadorCochesFila2=0;
	var longanizaUsuarios="";
	//Fin cambio RRDD 09/02/2019

////CLASES////
	//Jugador
	var player = new Array();
	//Recogibles
	recogibles = new Array();
	cantidadRecogibles = 10;//cambio a 10 desde 20
	//Sonido
	var sonido = new Sound();

//FORMULARIOS
	var usuario = "";

//BANDERAS
	var banConfirmacion = false;
	var banBD = true;



//////IMAGENES//////

	var imgFondo = new Image(); //Imagen Fondo
	imgFondo.src = "img/circuit.png";

	var imgFondoNegro = new Image(); //Imagen Fondo Offset
	imgFondoNegro.src = "img/circuitBlack.png";

	var personaje = new Image();
	personaje.src = "img/cocheRojo.png";

	var Coches=new Image();
	Coches.src="img/coches.png";




