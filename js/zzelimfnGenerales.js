function reescalaVentana(){
  ventana.actualizarTamanos();
  console.log(ventana.ancho,ventana.alto);

	$(".cvMenu").attr("width",ventana.ancho*.2);
	$(".cvMenu").attr("height",ventana.alto);
	$(".cvMain").attr("width",ventana.ancho*.8);
	$(".cvMain").attr("height",ventana.alto);

}
