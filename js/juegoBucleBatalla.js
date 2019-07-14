function juegoBucleBatalla(){
  isoMapa.mostrarFondo(contextoJuego,isoImg);
  isoJugador.dibujar(contextoJuego,isoImg,isoMapa);
  setTimeout(juegoBucleBatalla,60);
  }
