function Configuracion(){
    this.nombreUsuario = ""
    this.dificultad = 0;
    this.textoDificultad = ""

    this.setDificultad = function(){
      var ret = true;
        switch (this.dificultad) {
          case 0:this.textoDificultad = "Facil";break;
          case 1:this.textoDificultad = "Normal";break;
          case 2:this.textoDificultad = "Dificil";break;
          default: ret = false;
        }
    }
    this.setNombreUsuario = function(txt){
      var ret = true;
      if(txt == "" || txt.length < 6 ){
        ret = false;
      }else{
          this.nombreUsuario = txt;
      }

    }
}
