function Configuracion(){
    this.personaje = 0
    this.nombreUsuario = ""
    this.dificultad = 0;
    this.textoDificultad = ""

    this.asignarDificultad = function(val){
      this.dificultad = val;
        switch (this.dificultad) {
          case 0:this.textoDificultad = "Facil";break;
          case 1:this.textoDificultad = "Normal";break;
          case 2:this.textoDificultad = "Dificil";break;
          default: this.textoDificultad = "Facil";
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
    this.asignarPersonaje = function(){
      if($( "#dimg1" ).hasClass( "active" )){
        this.personaje = 1;
      }else if($( "#dimg2" ).hasClass( "active" )){
        this.personaje = 2;
      } else if($( "#dimg3" ).hasClass( "active" )){
        this.personaje = 3;
      }
      this.nombreUsuario = $( "#selPerNombreUsuario" ).val()

      if (this.nombreUsuario != "") {
        return true;
      }else{
        return false;
      }
    }

}
