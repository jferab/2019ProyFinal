function IsoJugador(){
  //parametros
  this.x = 0;
  this.y = 0;
  this.ancho = 128;
  this.alto = 160;

  //metodos
  this.mover = function() {

  }
  this.dibujar = function(ctx,img,mapa) {
    var px= convIsoX(this.x*64,this.y*64);
    var py= convIsoY(this.x*64,this.y*64);
    ctx.drawImage(img.imgDragon,1*this.ancho,0*this.alto,this.ancho,this.alto,
    px+mapa.desfaseX,py+mapa.desfaseY,this.ancho,this.alto);
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(px+mapa.desfaseX , py+mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

}
