function bucleespera(){
    
    JugadorEnSala();// vamos por datos de jugadores
    ActualizarRecogibles();
    //actualizarRecogibles();// vamos por datos de jugadores
    //obtenerChat();// vamos por datos de jugadores
    //player[0].id 
    //player[0].idSala

    banConfirmacion= true;
    
    for(var i = 0; i<player.length;i++){
        if(player[i].listo== 0){
            banConfirmacion= false;        
        }
    }
    if(banConfirmacion){
        

    	$( "#contenedorInicio" ).hide()
    	$( "#contenedorSegundo" ).hide()
    	$( "#contenedorFin" ).hide()
    	$( "#contenedorJuego" ).show()
        buclejuego();
    }else{
        //BorrarRecogibles();//borrar recogibles que no esten en bd
        clearTimeout(temporizador);
        /*
        for (var i = 0; i < cantidadRecogibles; i ++){
			recogibles[i] = new Recogible(Math.random()*1648, Math.random()*1888);
		}
		//aqui actualizo los recogibles
		*/
		runChat();
    	temporizador = setTimeout("bucleespera()", 60);
    }
}