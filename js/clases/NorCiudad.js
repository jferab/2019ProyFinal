function NorCiudad(px,py,tam,nombre){

  //parametros
  this.nombre = "";
  this.posX = 0;
  this.posY = 0;
  this.tamano = 0;


  this.crear = function (px,py,tam,nombre) {
    this.setPos(px,py);
    this.setTamano(tam);
    this.setNombre(nombre)
  }

  this.setPos = function(px, py) {
    this.posX = px;
    this.posY = py;
  }

  this.setTamano = function(tam) {
    this.tamano = tam;
  }

  this.setNombre = function(nombre) {
    this.nombre = nombre;
  }

  this.colicion = function(pj){
    var dist = Math.sqrt(Math.pow(this.posX - pj.posX,2) + Math.pow(this.posY - pj.posY,2))
    dist -= pj.tamano + this.tamano;
    if(dist<=0){console.log(this.nombre, "Colicion");}
  }

  this.dibujar = function(ctx,mapa) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(this.posX + mapa.desfaseX, this.posY + mapa.desfaseY, this.tamano, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
  }

  //Constructor
  this.crear(px,py,tam,nombre);
}
