function NorMapa(){
  //parametros
  this.desfaseX = -100;
  this.desfaseY = -100;


  //metodos
  this.mostrarFondo = function(ctx,img) {
    ctx.drawImage(img.imgFondo,this.desfaseX,this.desfaseY);
  }
}
