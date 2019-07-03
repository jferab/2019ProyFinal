function Ciudad(){
  //parametros
  this.posX = 0;
  this.posY = 0;
  this.tamano = 10

  this.dibujar = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

}
