function NorJugador(){
  //parametros
  this.posX = 400;
  this.posY = 400;
  this.tamano = 10
  this.ang= 0;
  this.banMov = false;
  this.banAngL = false;
  this.banAngR = false;

  var paso = 5;

  //metodos
  this.mover = function() {

    if(this.banAngL){this.ang-=0.1}
    if(this.banAngR){this.ang+=0.1}
    if(this.banMov){
      this.posX += paso * Math.cos(this.ang);
      this.posY += paso *  Math.sin(this.ang);
      norMapa.desfaseX -= paso * Math.cos(this.ang);
      norMapa.desfaseY -= paso * Math.sin(this.ang);
    }


  }
  this.dibujar = function(ctx,mapa) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

}
