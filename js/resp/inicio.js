function inicio(){/*
		//console.log("inicio")
	$( document ).ready(function() {
		//condicionesInicialesEstrellas();//Cargamos Fondo Parallax
		reescalaVentana();
	});


	//controles();//Carga Controles


	$(window).resize(function(){
		reescalaVentana();
	})

//Menu de Acceso de Usuario
 //Boton LogIn
	$( "#idLogin" ).click(function() {
		$("#inUsuario").val("")
		$("#inContrasena").val("")

		$("#msgLogin").text("")
		$( "#contenedorLogin" ).show();
		$( "#contenedorSignin" ).hide();
		//cambio RRDD
		DibujarJugadorC();
		//deleteChat();
		//Fin cambio RRDD
	});
 //Boton SingIn
	$( "#idSignin" ).click(function() {

		$("#inUsuario2").val("")
		$("#inContrasena2").val("")
		$("#inNombre").val("")
		$("#inApellidos").val("")

		$( "#contenedorLogin" ).hide();
		$( "#contenedorSignin" ).show();
		//cambio RRDD
		DibujarJugadorC();

		//Fin cambio RRDD
	});
 //Boton Listo
	$( "#btnListo" ).click(function() {
    	$( "#btnListo" ).attr("disabled", "disabled");
    	$( "#Patras" ).hide();
    	$( "#Psiguiente" ).hide();
    	player[0].sprint = 1;
    	player[0].listo = 1;
    	sonido.playIntro();//Sonido
	});
 //Boton Entrar LogIn
	$( "#btnEntrarLogin" ).click(function() {
		if(banBD){
			usuario = $("#inUsuario").val();
			var contrasena = $("#inContrasena").val();
			enviarAjaxLogin(usuario,contrasena);
		}
	});
 //Boton Entrar SingIn
	$( "#btnEntrarSignin" ).click(function() {
		if(banBD){
			var usr = $("#inUsuario2").val();
			var psw = $("#inContrasena2").val();
			var nombre = $("#inNombre").val();
			var apellidos = $("#inApellidos").val();
			console.log(usr,psw,nombre,apellidos);
			enviarAjaxSignin(usr,psw,nombre,apellidos);
		}
	});


//cambio RRDD 09/02/2019
 //Boton Seleccion Coches Derecha
	$("#Psiguiente").click(function(){
	      contexto1.clearRect(0,0,3000,3000);
	      contadorCoches+=1;
	      if(contadorCoches>=10){
	          if(contadorCochesFila2==0){
	              contadorCochesFila2=1;
	              contadorCoches=0;
	          }else{
	              contadorCochesFila2=0;
	              contadorCoches=0;
	          }
	      }
	      DibujarJugadorC();
	});
 //Boton Seleccion Coches Izquierda
	$("#Patras").click(function(){
	       contexto1.clearRect(0,0,3000,3000);
	       contadorCoches-=1;
	      if(contadorCoches<=-1){
	          if(contadorCochesFila2==0){
	              contadorCochesFila2=1;
	              contadorCoches=9;
	          }else{
	              contadorCochesFila2=0;
	              contadorCoches=9;
	          }
	      }
	      DibujarJugadorC();
	});

//Boton enviar Chat
	$("#enviamensaje").click(function(){
                $.ajax({
                   async:true,
                   type: "POST",
                   dataType: "html",
                   contentType: "application/x-www-form-urlencoded",
                   url:"php/escribemensaje.php",
                   data:"usuario="+player[0].usuario +"&mensaje="+encodeURI($("#nuevomensaje").val()),
                   beforeSend:inicioEnvia,
                   success:exitoEnvia,
                   timeout:4000,
                   error:problemaEnvia
                 });
                   console.log("envio mensaje");
                });


//Boton Musica
	var audio = new Audio("sound/Rampant.mp3")
  $("#musica").click(function(){

                audio.play();

            })
//Slider Musica
	$("#slidervolumen").change(function(){
	    if(!banAprender){
	    	tiempo = $(this).val();

	    }
	})


//Fin cambio RRDD 09/02/2019
*/
}
