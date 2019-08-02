function IsoMapa(){
  //parametros
  this.desfaseX = 500;
  this.desfaseY = 30;
  this.maxCuad = 24;
  this.longCuad = 32;
  this.selPosX = 0;
  this.selPosY = 0;

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
/*
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
    }*/
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

  this.calcularSelector = function(ctx) {
    var est = new IsoEstrella();
    est.inicializar();
    var origen = isoJugador.x +"a"+ isoJugador.y;
    var destino = this.selPosX +"a"+ this.selPosY;
    //console.log(origen,destino);
    if (this.selPosX > 0 && this.selPosX < 24  ){
      if (this.selPosY >0 && this.selPosY <= this.maxCuad){
        est.buscarCamino(origen,destino)
        //console.log(est.camino);
        for(var x in est.camino){
          this.dibujarSelector(ctx,est.camino[x]);
        }
      }
    }

  }
  this.dibujarSelector = function(ctx,pos) {
    var x = parseInt(pos.split("a")[0]);
    var y = parseInt(pos.split("a")[1]);
    ctx.strokeStyle ="yellow";



    //Linea 1
    ctx.beginPath();
    px = convIsoX((x )*this.longCuad,(y +1)*this.longCuad);
    py = convIsoY((x )*this.longCuad,(y +1)*this.longCuad);
    ctx.moveTo(  px +this.desfaseX,  py+this.desfaseY);
    px = convIsoX((x )*this.longCuad,(y )*this.longCuad);
    py = convIsoY((x )*this.longCuad,(y )*this.longCuad);
    ctx.lineTo( px +this.desfaseX, py +this.desfaseY);
    ctx.stroke();
    ctx.closePath();

    //px = convIsoX( , );

    //Linea2
    ctx.beginPath();
    px = convIsoX((x +1)*this.longCuad , (y )*this.longCuad);
    py = convIsoY((x +1)*this.longCuad , (y )*this.longCuad);
    ctx.moveTo( px +this.desfaseX, py +this.desfaseY);
    px = convIsoX((x )*this.longCuad , (y )*this.longCuad );
    py = convIsoY((x )*this.longCuad , (y )*this.longCuad );
    ctx.lineTo( px +this.desfaseX, py +this.desfaseY);
    ctx.stroke();
    ctx.closePath();

    //Linea 3
    ctx.beginPath();
    px = convIsoX((x +1)*this.longCuad , (y )*this.longCuad);
    py = convIsoY((x +1)*this.longCuad , (y )*this.longCuad);
    ctx.moveTo( px +this.desfaseX, py+this.desfaseY);
    px = convIsoX( (x +1)*this.longCuad, (y +1)*this.longCuad );
    py = convIsoY( (x +1)*this.longCuad, (y +1)*this.longCuad );
    ctx.lineTo( px +this.desfaseX, py+this.desfaseY);
    ctx.stroke();
    ctx.beginPath();

    //Linea 4
    ctx.closePath();
    px = convIsoX((x )*this.longCuad , (y +1)*this.longCuad);
    py = convIsoY((x )*this.longCuad , (y +1)*this.longCuad);
    ctx.moveTo( px +this.desfaseX, py+this.desfaseY);
    px = convIsoX((x +1)*this.longCuad , (y +1)*this.longCuad );
    py = convIsoY((x +1)*this.longCuad , (y +1)*this.longCuad );
    ctx.lineTo( px   +this.desfaseX,  py +this.desfaseY);
    ctx.stroke();
    ctx.closePath();
  }

  this.mostrarFondo = function(ctx,img) {
    this.dibujarImagenFondo(ctx,img);
    this.dibujarCuadricula(ctx);


  }

  this.asignarSelPos = function(px,py){
      var dpx = dconvIsoX( (px-this.desfaseX)/this.longCuad, (py-this.desfaseY)/this.longCuad);
      var dpy = dconvIsoY( (px-this.desfaseX)/this.longCuad, (py-this.desfaseY)/this.longCuad);
      this.selPosX = parseInt(dpx);
      this.selPosY = parseInt(dpy) ;
  }
  this.asignarDesfase = function(px,py,ventana){
    //console.log(px , ventana.anchoMain*.1);
    var vel = 5;
    if(px <= ventana.anchoMain*.1){this.desfaseX +=vel };
    if(px >= ventana.anchoMain*.9){this.desfaseX -=vel };
    if(py <= ventana.altoMain*.1){this.desfaseY +=vel };
    if(py >= ventana.altoMain*.9){this.desfaseY -=vel };

  }
}
