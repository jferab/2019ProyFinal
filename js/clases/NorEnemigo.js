function NorEnemigo(pj){

  //parametros
  this.nombre = "";
  this.posX = 0;
  this.posY = 0;
  this.tamano = 15;
  this.dist = 50;
  this.maxDist = 200;
  this.banBorrar = false;
  this.banPelear = false;


  this.crear = function (pj) {
    var px = pj.posX + Math.random()*this.maxDist*2-this.maxDist;
    var py = pj.posY + Math.random()*this.maxDist*2-this.maxDist;
    this.setPos(px,py);
  }

  this.setPos = function(px, py) {
    this.posX = px;
    this.posY = py;
  }

  this.colicion = function(pj){
    this.dist = Math.sqrt(Math.pow(this.posX - pj.posX,2) + Math.pow(this.posY - pj.posY,2))
    this.dist -= pj.tamano + this.tamano;
    if(this.dist<=0){this.banPelear = true}else{this.banPelear = false}
    if(this.dist>=this.maxDist){this.banBorrar = true}
  }

  this.dibujar = function(ctx,mapa) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

  //Constructor
  this.crear(pj);
}
