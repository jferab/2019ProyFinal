//convierte a isometrico X
function convIsoX( x, y){
	return x - y;
}
//convierte a isometrico Y
function convIsoY( x, y){
	return x/2 + y/2;
}
//Desconvierte de isometrico X
function dconvIsoX(px,py){
	return py + px/2;
}
//Desconvierte de isometrico Y
function dconvIsoY(px,py){
	return py - px/2;
}

//ordenar objetos por PosX
function sortObjetosMapa(){
	objetos = objetos.sort(function(a, b) {
        if(a.posX > b.posX  ){
        	return 1;
        }else{
        	if(a.posX == b.posX  ){
	        	if(a.posY > b.posY  ){
		        	return 1;
		        }else{
			        if(a.posY == b.posY  ){
			        	return 0;
			        }else{
			        	return -1;
			        }
		        }
	        }else{
	        	return -1;
	        }
        }
	});
}
