function IsoJugador(){
  //parametros
  this.posX = 700;
  this.posY = 700;
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
      mapa.desfaseX -= paso * Math.cos(this.ang);
      mapa.desfaseY -= paso * Math.sin(this.ang);
    }


  }
  this.dibujar = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

}
