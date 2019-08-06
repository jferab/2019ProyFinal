function juegoBucleBatalla(){
  norVentana.borrarTodo(contextoJuego);
  isoMapa.mostrarFondo(contextoJuego,isoImg);
  isoJugador.dibujar(contextoJuego,isoImg,isoMapa);


  //isoMapa.calcularSelector(contextoJuego);

  setTimeout(juegoBucleBatalla,60);
  }
