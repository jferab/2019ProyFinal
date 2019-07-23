function NorJugador(){
  //parametros
  this.posX = 400;
  this.posY = 400;
  this.tamano = 10
  this.ang= 0;
  this.banMov = false;
  this.banAngL = false;
  this.banAngR = false;
  this.imgAjuste = 2;

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
  this.dibujar = function(ctx,mapa,img) {
    ctx.beginPath();
    switch (config.personaje) {
      case 1: ctx.fillStyle = 'grey'; break;
      case 2: ctx.fillStyle = 'blue'; break;
      case 3: ctx.fillStyle = 'red'; break;
      default: ctx.fillStyle = 'white';

    }

    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
    drawRotated(ctx, img.imgPersonaje, this.ang+Math.PI, this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano*this.imgAjuste, this.tamano*this.imgAjuste)
  }

}
