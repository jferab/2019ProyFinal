/*
//funcion que reescala la ventana que ve el usuario
function reescalaVentana(){
	//console.log("reescalar1")

	    var anchuraPantalla = window.innerWidth;
		var alturaPantalla = window.innerHeight;
		//Pongo las propiedades del canvas.
		$("#lienzoFondoNegro").attr("width",anchuraPantalla);
		$("#lienzoFondoNegro").attr("height",alturaPantalla);
		$("#lienzoFondo").attr("width",anchuraPantalla);
		$("#lienzoFondo").attr("height",alturaPantalla);
		$("#lienzoJugador").attr("width",anchuraPantalla);
		$("#lienzoJugador").attr("height",alturaPantalla);
		$("#lienzoAtaque").attr("width",anchuraPantalla);
		$("#lienzoAtaque").attr("height",alturaPantalla);


	    //camara.anchuraPantalla = window.innerWidth;
		//camara.alturaPantalla = window.innerHeight;
}


function actualizarLista(usr) {
		var cadena = "<li class=\"list-group-item listaEspera\"><h3>"+usr+"</h3></li>";
		$( "#lgEspera" ).append(cadena);

}

//Actualizar posiciones
function enviarAjax(){
	if(banBD){
		banBD = false;
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/existeP.php",
				data:"idSala="+player[0].idSala
					+"&idUsr="+player[0].id
					+"&posX="+player[0].posX
					+"&posY="+player[0].posY
					+"&angulo="+player[0].angulo
					+"&listo="+player[0].listo
					+"&muerto="+player[0].muerto,
				//beforeSend:inicioEnvio,
				success:finRecibir
				//timeout:4000,
				//error:problemaRecibe

		     });
	}

}
function finRecibir(dato){
	//console.log("fin sala de espera:"+dato)
	var general = dato.split("&");
	var banEncontrado = false;
	var datos = general[0].split(";");
	for (var i = 0; i < datos.length; i++){
		var fila = datos[i].split("|");

		if(parseInt(fila[2])!=player[0].id){
			for(var j =0;j<player.length;j++){
				//console.log(player[j].nombre, fila[0])
				if(player[j].nombre == fila[0]){
					player[j].posX = parseFloat(fila[4]);
					player[j].posY = parseFloat(fila[5]);
					player[j].angulo = parseFloat(fila[6]);
					player[j].angulo = parseFloat(fila[7]);
					break;
				}
			}
		}
	}
	//console.log(general[1])
	/*estrella.vida=parseInt(general[1]);
	if(parseInt(general[2]) == 1){
		player[0].impacto = 0;
	}*/
	banBD = true;

}

//login
function enviarAjaxLogin(usr,psw){
	//console.log("login: "+nombre)
	if(banBD){
		banBD = false;
		$.ajax({
			async:true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url:"php/validarUsuario.php",
			data:"usuario="+usr+"&contrasena="+psw,
			//beforeSend:inicioEnvio,
			success:finRecibirLogin
			//timeout:4000,
			//error:problemas

	     });

	}

}

function finRecibirLogin(dato){
	//console.log("respuesta",dato)
	if(dato[0]=="E"){
		$("#msgLogin").text(dato)
		$( "#btnListo" ).attr("disabled", "enable");
	}else{
		var datos = dato.split("|");
		var idUsr = parseInt(datos[0]);
		var idSala = parseInt(datos[1]);

		player[0] = new Player(usuario, idUsr, idSala);

		actualizarLista(usuario);
		$( "#contenedorInicio" ).hide()
		$( "#contenedorSegundo" ).show()
		$( "#contenedorJuego" ).hide()

		CrearRecogibles();
		//lugar ajax
		//bucleespera();//ya no lo vamos a llamar, ajaxRecogibles. pasar idusuario e idsala
	}
	banBD = true;

}


//Sign in
function enviarAjaxSignin(usr,psw,nombre,apellidos){
	//console.log("login: "+nombre)
	if(banBD){
		banBD = false;
		$.ajax({
			async:true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url:"php/signin.php",
			data:"usuario="+usr+
				"&contrasena="+psw+
				"&nombre="+nombre+
				"&apellidos="+apellidos,
			//beforeSend:inicioEnvio,
			success:finRecibirSignin
			//timeout:4000,
			//error:problemas

	     });

	}

}
function finRecibirSignin(dato){
	//console.log("respuesta",dato)
	$("#msgSignin").text(dato)
	if(dato[0]=="E"){

	}else{

	}
	banBD = true;

}

function drawImageRot(micontexto,img,x,y,width,height,rad){
	//Convert degrees to radian

	//St the origin to the center of the imagee
	micontexto.translate(x + width / 2, y + height / 2);
	//Rotate the canvas around the origin
	micontexto.rotate(rad-Math.PI/2);
	//draw the image
	micontexto.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
	//reset the canvas
	micontexto.rotate((rad-Math.PI/2) * ( -1 ) );
	micontexto.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}


//cambio RRDD 09/02/2019
function DibujarJugadorC(){

	//prueba, funcion para juego prueba
	 var ladox=130;
	 var ladoy=70;
	 switch (contadorCoches) {
		case 0:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 1:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 2:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 3:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 4:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 5:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 6:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 7:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 8:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		case 9:	contexto1.drawImage(Coches,62*contadorCoches,114*contadorCochesFila2,62,114,ladox,ladoy,64,64);break;
		default: break;
		}
}

function JugadorEnSala(){
//console.log(player[0].usuario);
var textochat=""
	if(banBD){
		banBD = false;
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/existeP.php",
				data:"idSala="+player[0].idSala
					+"&idUsr="+player[0].id
					+"&posX="+player[0].posX
					+"&posY="+player[0].posY
					+"&angulo="+player[0].angulo
					+"&listo="+player[0].listo
					+"&muerto="+player[0].muerto
					+"&chat="+textochat,
				//beforeSend:inicioEnvio,
				success:actualizaExitoP
				//timeout:4000,
				//error:problemaRecibe

		     });
	}

}
function actualizaExitoP(dato){
//console.log("fin sala de espera:"+dato)

	$( ".listaEspera" ).remove();
	var banEncontrado = false;
	var datos = dato.split(";");
	for (var i = 0; i < datos.length; i++){
		var fila = datos[i].split("|");
		actualizarLista(fila[0]);

		//si el id de Usr == id del jugador principal
		if(parseInt(fila[2])!=player[0].id){ //fila 2 tiene el id de usuario
			banEncontrado = false;

			//barrido del jugador--> recogibles
			for(var j =0;j<player.length;j++){
				//console.log(player[j].nombre, fila[0])

				//si el id de usuario cuadra con alguno player ya creado actualizamos
				if(player[j].id == parseInt(fila[2])){
					player[j].listo = parseInt(fila[3]);
					player[j].posX = parseFloat(fila[4]);
					player[j].posY = parseFloat(fila[5]);
					player[j].angulo = parseFloat(fila[6]);
					player[j].muerto = parseFloat(fila[7]);

					banEncontrado=true;
					break;
				}
			}

			//si no cuadro, creamos uno nuevo
			if(!banEncontrado){
				var tmpPlayer = new Player(fila[0],parseInt(fila[2]),parseInt(fila[1]));
				tmpPlayer.listo = parseInt(fila[3]);
				tmpPlayer.posX = parseFloat(fila[4]);
				tmpPlayer.posY = parseFloat(fila[5]);
				tmpPlayer.angulo = parseFloat(fila[6]);
				tmpPlayer.muerto = parseFloat(fila[7]);
				player.push(tmpPlayer);
			}
		}
	}


	banBD = true;
}


function CrearRecogibles(){
//console.log(player[0].usuario);
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/RecogiblesCreacion.php",
				data:"idSala="+player[0].idSala
					+"&idUsr="+player[0].id,
				//beforeSend:inicioEnvio,
				success:creacionR
				//timeout:4000,
				//error:problemaRecibe

		     });

		     function creacionR(){
	     	   	for (var i = 0; i < cantidadRecogibles; i ++){
					recogibles[i] = new Recogible(Math.random()*1648, Math.random()*1888);
					recogibles[i].idRecogible=player[0].id *100+i;
				}
		     	bucleespera();

				}

}

function ActualizarRecogibles(){
//console.log(player[0].usuario);
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/actualizarRecogibles.php",
				data:"idSala="+player[0].idSala,
				//beforeSend:inicioEnvio,
				success:ActualizarR
				//timeout:4000,
				//error:problemaRecibe

		     });

		     function ActualizarR(datos){
		     	//var tempL=datos;
		     	//console.log(tempL)

		     	//var banEncontrado = false;
				var datosR = datos.split(";");
				for (var i = 0; i < datosR.length; i++){
					var fila = datosR[i].split("|");
					var tempD=Math.trunc(parseInt(fila[0])/100);
					for(var j =0;j<recogibles.length;j++){
					//si el id de Usr == id del jugador principal

					//console.log(tempD)

							if(recogibles[j].idRecogible==parseInt(fila[0])){
								recogibles[j].tipo = parseInt(fila[2]);
								recogibles[j].posX = parseFloat(fila[3]);
								recogibles[j].posY = parseFloat(fila[4]);
								recogibles[j].idRecogible = parseInt(fila[0]);
								recogibles[j].muerto = parseInt(fila[5]);

							}else{

								if(parseInt(fila[0])==recogibles[j].idRecogible){
									recogibles[j].tipo = parseInt(fila[2]);
									recogibles[j].posX = parseFloat(fila[3]);
									recogibles[j].posY = parseFloat(fila[4]);
									recogibles[j].idRecogible = parseInt(fila[0]);
									recogibles[j].muerto = parseInt(fila[5]);
									}
							}

						}


		     	//for(let j=0;j<30;j++){
		     	//console.log(recogibles[j]);
		     //}
				}

		     }

}




//Leo los mensajes del Chat
function runChat(){
            $.ajax({
               async:true,
               type: "POST",
               dataType: "html",
               contentType: "application/x-www-form-urlencoded",
               url:"php/leemensajes.php",
               beforeSend:inicioRecibe,
               success:exitoRecibe,
               timeout:4000,
               error:problemaRecibe
             });
             $("#mensajes").scrollTop(1000000000)
        }

//Funciones Chat
function inicioEnvia(){}
function exitoEnvia(){$("#nuevomensaje").val("")}
function problemaEnvia(){}
function inicioRecibe(){}
function exitoRecibe(datos){$("#mensajes").html(datos)}
function problemaRecibe(){}


function pintarHUD(){
        ctxHUD.clearRect(0,0, anchuraPantalla, alturaPantalla);
        //ctxHUD.drawImage(disparo[0].spriteSheet,100, 200);
        ctxHUD.fillStyle="white";
        ctxHUD.font = "bold 34px sans-serif";
        //ctxHUD.fillText("vidas: " + player.vidas,50,100);
        ctxHUD.fillText("Puntos: " + puntos,50,150);
        switch(vidas){
            case 0:
                ctxHUD.drawImage(spriteVida0,50,0);
                //alert("Game Over");
                //player.vidas = 3;
                //alert("Intentalo Otravez");
            break;
             case 1:
                ctxHUD.drawImage(spriteVida1,50,0);
            break;
             case 2:
                ctxHUD.drawImage(spriteVida2,50,0);
            break;
             case 3:
                ctxHUD.drawImage(spriteVida3,50,0);
            break;
        }
    }*/
