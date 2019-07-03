function juegoBucle(){
  mapa.mostrarFondo(contextoJuego);
  jugador.mover();
  jugador.dibujar(contextoJuego);

  setTimeout(juegoBucle,60);
}
