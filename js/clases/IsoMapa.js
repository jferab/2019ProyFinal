function IsoMapa(){
  //parametros
  this.desfaseX = 500;
  this.desfaseY = 30;
  this.maxCuad = 24;
  this.longCuad = 32;

  this.dibujarCuadricula = function(ctx){
    var px = 0;
  	var py = 0;
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
    }

    ctx.fillStyle="red";
    for (var i=0;i<this.maxCuad;i++) {
      for (var j=0;j<this.maxCuad;j++) {

        px = convIsoX(i*this.longCuad+this.longCuad*0.5,j*this.longCuad+this.longCuad*0.5);
        py = convIsoY(i*this.longCuad+this.longCuad*0.5,j*this.longCuad+this.longCuad*0.5);

        ctx.beginPath();
        ctx.arc(px+this.desfaseX,py+this.desfaseY,5,0,Math.PI*2,true);
        ctx.fill();
        ctx.closePath();

      }
    }
  }

  this.dibujarImagenFondo = function(ctx,img) {
    var px= 0, py=0;
    for(var i = 0;i<3;i++){
      for(var j = 0;j<3;j++){
        px = convIsoX(i*256,j*256);
        py = convIsoY(i*256,j*256);

        ctx.drawImage(img.imgPasto,px+this.desfaseX-256,py+this.desfaseY);
      }
    }
  }

  this.mostrarFondo = function(ctx,img) {
    this.dibujarImagenFondo(ctx,img);
    this.dibujarCuadricula(ctx);


  }
}
