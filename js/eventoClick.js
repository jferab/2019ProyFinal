
$( "#btnMenuInicio" ).click(function() {
  norVentana.mostrarSelPersonaje();
});
$( "#btnSelPerInicio" ).click(function() {
  norVentana.mostrarJuego();
});
/*
function ajustarCarousel(){

  if($( "#dimg1" ).hasClass( "active" )){
    console.log("img 1");
    $( "#img1" ).show( );
    $( "#img2" ).hide( );
    $( "#img3" ).hide( );
  }else if($( "#dimg2" ).hasClass( "active" )){
    console.log("img 2");
    $( "#img1" ).hide( );
    $( "#img3" ).hide( );
    $( "#img2" ).show( );
  } else if($( "#dimg3" ).hasClass( "active" )){
    console.log("img 3");
    $( "#img1" ).hide( );
    $( "#img2" ).hide( );
    $( "#img3" ).show( );
  }
}*/
$('.carousel').carousel()
