function juegoBucleBatalla(){
  norVentana.borrarTodo(contextoJuego);
  isoMapa.mostrarFondo(contextoJuego,isoImg);
  isoJugador.dibujar(contextoJuego,isoImg,isoMapa);

  
  isoMapa.dibujarSelector(contextoJuego);

  setTimeout(juegoBucleBatalla,60);
  }
