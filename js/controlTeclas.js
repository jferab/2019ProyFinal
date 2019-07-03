
$(document).keydown(function(event){
  //console.log(event.key);
  switch (event.key) {
    case "ArrowLeft":   jugador.banAngL=true; break;
    case "ArrowRight":  jugador.banAngR=true; break;
    case "ArrowUp":     jugador.banMov=true; break;
    //case "ArrowDown":   prince.posY+=5; break;
    default:
  }
});


$(document).keyup(function(event){
  //console.log(event.key);

  switch (event.key) {
    case "ArrowLeft":   jugador.banAngL=false; break;
    case "ArrowRight":  jugador.banAngR=false; break;
    case "ArrowUp":     jugador.banMov=false; break;

    default:
  }
});
