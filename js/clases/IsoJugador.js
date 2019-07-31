function IsoJugador(){
  //parametros
  this.x = 6;
  this.y = 6;
  this.ancho = 128;
  this.alto = 160;
  this.escala = 2 ;

  //metodos
  this.mover = function() {

  }
  this.dibujar = function(ctx,img,mapa) {
    var px= convIsoX(this.x*mapa.longCuad, this.y*mapa.longCuad);
    var py= convIsoY(this.x*mapa.longCuad, this.y*mapa.longCuad);
    ctx.drawImage(img.imgDragon,2*this.ancho,2*this.alto,this.ancho,this.alto,
    px +mapa.desfaseX -this.ancho/this.escala/2,
    py +mapa.desfaseY -(this.alto-this.ancho)/this.escala -(this.ancho/this.escala)*2/4,
    this.ancho/this.escala,this.alto/this.escala);


    var px = convIsoX(this.x*mapa.longCuad +mapa.longCuad/2,this.y*mapa.longCuad +mapa.longCuad/2);
    var py = convIsoY(this.x*mapa.longCuad +mapa.longCuad/2,this.y*mapa.longCuad +mapa.longCuad/2);
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(px+mapa.desfaseX , py+mapa.desfaseY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }
  
}
