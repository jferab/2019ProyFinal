function juegoBucle(){
  var banPelear = false;
  norMapa.mostrarFondo(contextoJuego,norImg);
  norJugador.mover();
  norJugador.dibujar(contextoJuego,norMapa);

  for (var x in norCiudad){
    norCiudad[x].colicion(norJugador);
    norCiudad[x].dibujar(contextoJuego,norMapa);
  }

  //Colicion de enemigos
  for (var x=norEnemigo.length-1;x>=0;x--) {
    norEnemigo[x].colicion(norJugador);
    if (norEnemigo[x].banBorrar){
      norEnemigo.splice(x,1);
      continue;
    }
    norEnemigo[x].dibujar(contextoJuego,norMapa);
    if (norEnemigo[x].banPelear){
      banPelear = true;
    }
  }

  for(var x=norEnemigo.length;x<10;x++){
    norEnemigo[x] = new NorEnemigo(norJugador);
  }

  if(banPelear){
    juegoBucleBatalla();
  }else{
    setTimeout(juegoBucle,60);
  }
}
