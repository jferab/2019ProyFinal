function Mapa(){
  //parametros
  this.desfaseX = -500;
  this.desfaseY = -500;


  //metodos
  this.mostrarFondo = function(ctx) {
    ctx.drawImage(img.imgFondo,this.desfaseX,this.desfaseY);
  }
}
