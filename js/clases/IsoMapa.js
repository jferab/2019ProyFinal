function IsoMapa(){
  //parametros
  this.desfaseX = 500;
  this.desfaseY = 30;
  this.maxCuad = 6;
  this.longCuad = 64;

  this.dibujarCuadricula = function(ctx){
    //Dibujar Mapa;
    var px = 300;
  	var py = 300;
  	var p2x = 0;
  	var p2y = 0;
    ctx.fillStyle="white";
    ctx.strokeStyle ="white";
    for (var i=0;i<=this.maxCuad;i++) {
      ctx.beginPath();
      px = convIsoX(i*this.longCuad,0);
      py = convIsoY(i*this.longCuad,0);
      ctx.moveTo(px+this.desfaseX,py+this.desfaseY);
      px = convIsoX(i*this.longCuad,this.longCuad*this.maxCuad);
      py = convIsoY(i*this.longCuad,this.longCuad*this.maxCuad);
      ctx.lineTo(px+this.desfaseX,py+this.desfaseY);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      px = convIsoX(0,i*this.longCuad);
      py = convIsoY(0,i*this.longCuad);
      ctx.moveTo(px+this.desfaseX,py+this.desfaseY);
      px = convIsoX(this.longCuad*this.maxCuad,i*this.longCuad);
      py = convIsoY(this.longCuad*this.maxCuad,i*this.longCuad);
      ctx.lineTo(px+this.desfaseX,py+this.desfaseY);
      ctx.stroke();
      ctx.closePath();

        /*ctx.beginPath();
        px = convIsoX(i*this.longCuad,j*this.longCuad);
        py = convIsoY(i*this.longCuad,j*this.longCuad);
        p2x = convIsoX(i*this.longCuad,j*this.longCuad);
        p2y = convIsoY(i*this.longCuad,j*this.longCuad);

        ctx.arc(px+this.desfaseX,py+this.desfaseY,10,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(0 +this.desfaseX,py+this.desfaseY);
        ctx.lineTo( +this.desfaseX, this.maxCuad*this.longCuad+this.desfaseY);
        ctx.stroke();
        ctx.closePath();
*/
    }
  }

  //metodos
  this.mostrarFondo = function(ctx,img) {
    //ctx.drawImage(img.imgFondo,this.desfaseX,this.desfaseY);
    this.dibujarCuadricula(ctx);
  }
}
