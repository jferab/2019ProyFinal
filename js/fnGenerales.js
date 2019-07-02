function reescalaVentana(){
  ventana.actualizarTamanos();
  console.log("reescalando");
  ventana.ancho = window.innerWidth;
	ventana.alto = window.innerHeight;

	$(".cvMenu").attr("width",ventana.ancho);
	$(".cvMenu").attr("height",ventana.alto);
	$(".cvMain").attr("width",ventana.ancho);
	$(".cvMain").attr("height",ventana.alto);

}
