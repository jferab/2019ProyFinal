function buclejuego(){
        
        //Cargamos Musica
        //sonido.playMusic();//Sonido Musica

        //Limpiamos los canvas
        contextoJugador.clearRect(0,0,window.innerWidth,window.innerHeight);
        contextoFondo.clearRect(0,0,window.innerWidth,window.innerHeight);
        contextoFondoNegro.clearRect(0,0,window.innerWidth,window.innerHeight);
        contextoAtaque.clearRect(0,0,window.innerWidth,window.innerHeight);
        //Pintamos Fondos        
        contextoFondoNegro.drawImage(imgFondoNegro,player[0].desfaseX,player[0].desfaseY);
        contextoFondo.drawImage(imgFondo,player[0].desfaseX,player[0].desfaseY);
       
        //Pinto los Recogibles
        

        //Cargamos Control de teclas
        controles();
        //Enviamos datos de Ajax al Servidor
        
        enviarAjax();
        if(player[0].id == 1){
            for ( var i = 0; i<recogibles.length;i++){
               // recogibles[i].tocarCarretera();
                //console.log(recogibles[i].idRecogible)
            }
            //console.log("Actualizamos recogible")
           // actRecogible();
            
        }else{
            for ( var i = 0; i<recogibles.length;i++){
               // recogibles[i].pintar();
            //console.log(recogibles[i].idRecogible)
            }
        }
        
        
        CrearRecogibles();

        

        //Mueve los Jugadores de la BD
        for(var i = 0; i<player.length;i++){
            
            if(i==0){
                player[0].muevete();
                //player[0].meHanDado();
            }else{
                player[i].pintar();
            }
    
        }
        
        var banFin = true
        for(var i = 0; i<player.length;i++){
            if(player[i].muerto == 0){
                banFin= false;        
            }
        }
        if(banFin){
            alert("todos murieron")
        }
        
        //pintarHUD();   //esto lo comente para preubas disculpa
        
    	clearTimeout(temporizador);
    	temporizador = setTimeout("buclejuego()", 60);
}