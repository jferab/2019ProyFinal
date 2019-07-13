
$(document).keydown(function(event){
  //console.log(event.key);
  switch (event.key) {
    case "ArrowLeft":   norJugador.banAngL=true; break;
    case "ArrowRight":  norJugador.banAngR=true; break;
    case "ArrowUp":     norJugador.banMov=true; break;
    //case "ArrowDown":   prince.posY+=5; break;
    default:
  }
});


$(document).keyup(function(event){
  //console.log(event.key);

  switch (event.key) {
    case "ArrowLeft":   norJugador.banAngL=false; break;
    case "ArrowRight":  norJugador.banAngR=false; break;
    case "ArrowUp":     norJugador.banMov=false; break;

    default:
  }
});
