function Mochila()
{
  this.numeroItems  = 0;
  this.numeroItemsMax = 12;
  this.numSlotsImagen=10;

  this.posX       = 800;
  this.posY       = 650;

  this.dinero  = 1000;
  this.numeroSlotslibres  = this.numeroItemsMax-this.numeroItems;
  //this.avanceY    = 0;
  
  this.id=0;  
  this.tamanoH=128;
  this.tamanoW=128;

  

  
 
  this.dibujar = function(ctx)
  {
      
      ctx.drawImage(imgMochila, this.posX, this.posY, this.tamanoW, this.tamanoH);
    }

  this.activarVentanaMochila =function(posX,posY,contexto,dinero,numSlotsImagen){
		$("#juegoMain").click(function(e){
			//console.log(e.pageX + " , " + e.pageY)
			if(e.pageX>=posX&&e.pageX<posX+128&&e.pageY>=posY&&e.pageY<posY+128){//e.pageX>=this.posX&&e.pageX<this.posX+this.tamanoW&&e.pageY>=this.posY&&e.pageY<this.posY+this.tamanoH
				//console.log("TOCON DE MOCHILA");
				//console.log("hola")
				$("#contenedorJuego").hide();
				$("#contenedorVentanas").show();
				$("#contenedorMochila").show();
				banderaMochila=true;
				
				contexto.clearRect(0,0,3000,3000);
				
				//Pinto fondo y slots
				contexto.drawImage(norImg.imgFondo,0,0);
				contexto.drawImage(interiorMochila,50,50,512,512);//4
				//contexto.drawImage(interiorMochila,5,30,155,240,50,50,512,512);
				contexto.drawImage(interiorMochilaBlanco,35,10,95,130,560,50,510,507);//interiorMochilaBlanco
				//contextoMochila.fillRect(20, 20, 150, 100);
				
				//pinto items
				//contexto.drawImage(imgMochila, 85,85, 50, 50);//130,130
				//contexto.drawImage(imgMochila, 480,480, 50, 50);//175,130
				//Auto
				for(var m=0;m<5;m++){//limite por numero de items
					for (var m2 =0;m2<5;m2++){//limite por numero de items
						var espacio=44; //espacio en X e Y vertical y horizontal, temporal se puede cambiar
						var inicio =85;// primer punto en X e Y de la primera imagen a dibujar
						var xx=inicio+espacio*m;
						var yy=inicio+espacio*m2;
						contexto.drawImage(imgMochila, xx,yy, 50, 50);//130,130 // dibujar magen del item en mochila, esto es temporal hasta tener array u objeto de items
						
					}
					
				}
				
				
				contexto.beginPath();
				contexto.lineWidth = "6";
				contexto.strokeStyle = "red";
				contexto.rect(50, 560, 1017, 64); 
				contexto.stroke();
				
				contexto.font="15pt Verdana";
				contexto.fillStyle = "black";
				contexto.fill();
				contexto.fillStyle = "white";
				contexto.fillText("DINERO: "+dinero,60,595);
				contexto.closePath();
				contexto.drawImage(moneda, 250,565, 50, 50);
				
				
			}
			
			//mochila.itemSeleccionado(numSlotsImagen);
		})
  }
  
  this.cerrarMochila = function(){
	  $("#atrasMochila").click(function(){
        
        banderaMochila=false;
		$("#contenedorVentanas").hide();
		$("#contenedorMochila").hide();
        
        $("#contenedorJuego").fadeIn(1000)
         posItem=-1;//saber el item seleccionadoionado
    
    })
	  
  }
  
  this.itemSeleccionado = function(numSlotsImagen2,contexto,dinero){ 
	   $("#ventanaMochila").mousedown(function (e2) {//mouseup  mousemove  mousedown
    	var posX = e2.pageX;
		var posY = e2.pageY;
        //var numSlotsImagen = 10; // numero de slots por fila de la imagen a usar en la mochila 
		//var posItem=-1;//saber el item seleccionadoionado
		if(posX>=50&&posX<562&&posY>=50&&posY<562){
       //console.log("mousemove");
        //console.log(e2.pageX + " , " + e2.pageY)
		var x1=0;
		var y1=0;
		for(var x=0;x<5;x++){//limite por numero de items
				for (var y =0;y<5;y++){//limite por numero de items
					var espacio=44; //espacio en X e Y vertical y horizontal, temporal se puede cambiar
					var inicio =85;// primer punto en X e Y de la primera imagen a dibujar
					var xx=inicio+espacio*x;
					var yy=inicio+espacio*y;
					if(posX>=xx&&posX<xx+50&&posY>=yy&&posY<yy+50){
						posItem=numSlotsImagen2*y+x;
						//console.log(posItem);
					}
				}
			}
		
		
		}
		contexto.clearRect(0,0,3000,3000);
		//Pinto fondo y slots
				contexto.drawImage(norImg.imgFondo,0,0);
				contexto.drawImage(interiorMochila,50,50,512,512);//4
				//contexto.drawImage(interiorMochila,5,30,155,240,50,50,512,512);
				contexto.drawImage(interiorMochilaBlanco,35,10,95,130,560,50,510,507);//interiorMochilaBlanco
				//contextoMochila.fillRect(20, 20, 150, 100);
				
				//pinto items
				//contexto.drawImage(imgMochila, 85,85, 50, 50);//130,130
				//contexto.drawImage(imgMochila, 480,480, 50, 50);//175,130
				//Auto
				for(var m=0;m<5;m++){//limite por numero de items
					for (var m2 =0;m2<5;m2++){//limite por numero de items
						var espacio=44; //espacio en X e Y vertical y horizontal, temporal se puede cambiar
						var inicio =85;// primer punto en X e Y de la primera imagen a dibujar
						var xx=inicio+espacio*m;
						var yy=inicio+espacio*m2;
						contexto.drawImage(imgMochila, xx,yy, 50, 50);//130,130 // dibujar magen del item en mochila, esto es temporal hasta tener array u objeto de items
						
						if(posItem!=-1){
							//console.log(posItem+"hola");
							var tempPosItem=numSlotsImagen2*m2+m;
							if(tempPosItem==posItem){
								contexto.drawImage(imgMochila, 735,175, 128, 128);// dibujar magen del item en mochila, esto es temporal hasta tener array u objeto de items
								contexto.beginPath();
								contexto.lineWidth = "6";
								contexto.font="12pt Verdana";
								contexto.fillStyle = "black";
								contexto.fillText("Mochila del usuario, lleva muchos objetos",650,350);// descripcion del item
								contexto.closePath();
							}
						
						}
					}
					
				}
				
				
				contexto.beginPath();
				contexto.lineWidth = "6";
				contexto.strokeStyle = "red";
				contexto.rect(50, 560, 1017, 64); //512
				contexto.stroke();
				
				contexto.font="15pt Verdana";
				contexto.fillStyle = "black";
				contexto.fill();
				contexto.fillStyle = "white";
				contexto.fillText("DINERO: "+dinero,60,595);
				contexto.closePath();
				contexto.drawImage(moneda, 250,565, 50, 50);
				
		
    
    })
	  
  }
  
		
    
}
