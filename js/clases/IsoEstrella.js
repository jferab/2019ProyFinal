function IsoEstrella(){
  //parametros
  this.origen = "";
  this.destino = "";
  this.arr ={};

  this.f = -1;
  this.g = -1;
  this.h = -1;

  this.actual = "";
  this.nuevo = "";
  this.vecinos = {}

  this.listaAbierta = {};
  this.listaCerrada = {};


  //metodos
  this.buscarCamino = function(origen, destino) {
    if (this.nuevo == ""){
      this.listaAbierta[origen] = this.insListaAbierta(origen,destino,origen);
    }
    this.listaCerrada[origen] = this.listaAbierta[origen];
    delete this.listaAbierta[origen]

    this.actual = origen;
    this.buscarVecinos(this.actual,destino);
    this.selVecino();
    //if(this.nuevo != destino){
    if(this.nuevo != destino){
      this.buscarCamino(this.nuevo, destino)
    }else{
      this.listaCerrada[destino] = this.listaAbierta[destino];
      delete this.listaAbierta[destino]

      this.mostrarCamino(destino);
    }

  }
  this.actualizarArr = function(x,y,bloq){
    var id = x+"a"+y;
    this.arr[id] = {x:x, y:y, bloq:bloq}
  }
  this.calcularF = function(g,h){
    return g + h;
  }
  this.calcularG = function(x,y,dx,dy){
    //console.log(x,y,dx,dy);
    return  (Math.sqrt(Math.pow((x - dx),2)
    + Math.pow((y - dy),2)))*10;
  }
  this.calcularH  = function(x,y,dx,dy){
    return  (Math.abs( x - dx) +
     Math.abs(y - dy))*10
  }
  this.insListaAbierta = function(id,destino,padre){
    var x = parseInt(id.split("a")[0]);
    var y = parseInt(id.split("a")[1]);
    var dx = parseInt(destino.split("a")[0]);
    var dy = parseInt(destino.split("a")[1]);
    var px = parseInt(padre.split("a")[0]);
    var py = parseInt(padre.split("a")[1]);
    var g = this.calcularG(x,y, px,py);
    var h = this.calcularH(x,y, dx,dy);
    var f = this.calcularF(g,h);
    var bloq = false;
    if(this.arr.hasOwnProperty(id)){
      bloq = this.arr[id].bloq;
    }
    if(bloq){
      return {};
    }else{
      return {x:x, y:y, f:f, g:g, h:h,padre:padre};
    }


  }
  this.buscarVecinos = function(actual,destino){


    var x = parseInt(actual.split("a")[0])
    var y = parseInt(actual.split("a")[1])

    var id = x+"a"+y;
    var padre = this.listaCerrada[id].padre;
    var val ={};
    //console.log("estoy en: "+id);
    for(i=-1;i<=1;i++){
      var tx = x+i;
      if( tx<=0) {continue}
      if( tx>=8) {continue}
      for(j=-1;j<=1;j++){
        var ty = y+j;
        if(ty<=0){continue}
        if(ty>=8){continue}
        tid = tx+"a"+ty;
        if(id!=tid ){
          val = this.insListaAbierta(tid,destino,actual);
          if(val != {} ){

            if(padre != tid){
              if (this.listaAbierta.hasOwnProperty(tid)) {
                //buscamos mas corto
                var a = this.irPadre(tid)
                var b1 = this.irPadre(actual)

                var b2 = val.g;
                var b = b1 + b2;
                //console.log("comparar "+tid+": "+a, "con "+actual+":"+b);
                if(a>b){
                  delete this.listaAbierta[tid];
                  this.listaAbierta[tid] = val;
                }
              }else{
                if (!this.listaCerrada.hasOwnProperty(tid)) {
                  this.listaAbierta[tid] = val;
                }
              }
            }
          }
        }
      }
    }
  }
  this.selVecino = function(){
    val = 99999;
    id = "";
    for(var x in this.listaAbierta){
      if(this.listaAbierta[x].f < val){
        id = x;
        val = this.listaAbierta[x].f;
      }

    }
    this.nuevo = id;

  }
  this.irPadre = function(id){
    var gPadre = 0
    var padre ="";
    if(this.listaAbierta.hasOwnProperty(id)){
      gPadre = this.listaAbierta[id].g;
      padre =  this.listaAbierta[id].padre;
    }
    if(this.listaCerrada.hasOwnProperty(id)){
      gPadre = this.listaCerrada[id].g;
      padre =  this.listaCerrada[id].padre;
    }
    if (padre == id) {
      return 0;
    }else{
      return this.irPadre(padre) + gPadre;
    }
  }
  this.mostrarCamino = function(id){
    if(this.listaCerrada[id].padre!= id){
      this.mostrarCamino(this.listaCerrada[id].padre);
    }
    console.log(id);
  }
}
