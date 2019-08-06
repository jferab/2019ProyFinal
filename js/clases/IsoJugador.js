function IsoJugador(){
  //parametros
  this.x = 6;
  this.y = 6;
  this.ancho = 68;
  this.alto = 90;
  this.escala = 1 ;

  //metodos
  this.mover = function() {

  }
  this.dibujar = function(ctx,img,mapa) {

    var tmpImg = "";
    console.log(config.personaje);
    switch (config.personaje) {
      case 1: tmpImg = img.imgPersonaje1d; break;
      case 2: tmpImg = img.imgPersonaje2d; break;
      case 3: tmpImg = img.imgPersonaje3d; break;
      default: tmpImg = img.imgPersonaje3d;
    }
    //console.log(tmpImg);

    var px= convIsoX(this.x*mapa.longCuad, this.y*mapa.longCuad);
    var py= convIsoY(this.x*mapa.longCuad, this.y*mapa.longCuad);
    /*ctx.drawImage(tmpImg,2*this.ancho,2*this.alto,this.ancho,this.alto,
    px +mapa.desfaseX -this.ancho/this.escala,
    py +mapa.desfaseY -(this.alto-this.ancho)/this.escala,
    this.ancho/this.escala,this.alto/this.escala);*/
    ctx.drawImage(tmpImg,
      px +mapa.desfaseX -this.ancho/2,
      py +mapa.desfaseY - this.alto *2/4 - 6 );


    var px = convIsoX(this.x*mapa.longCuad +mapa.longCuad/2,this.y*mapa.longCuad +mapa.longCuad/2);
    var py = convIsoY(this.x*mapa.longCuad +mapa.longCuad/2,this.y*mapa.longCuad +mapa.longCuad/2);
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(px+mapa.desfaseX , py+mapa.desfaseY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

}
