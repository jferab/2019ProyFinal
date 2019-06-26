function Mapa(){
    
    this.dibujarEscenario = function(ctx,camara){
        //ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    
        //Dibujar Mapa;
        ctx.fillStyle="white";
        ctx.strokeStyle ="white";
        for (var obj in nodos) {
            ctx.beginPath();
            ctx.arc(nodos[obj].posX+camara.posX,nodos[obj].posY+camara.posY,10,0,Math.PI*2,true);
            ctx.fill();
            ctx.stroke(); 
            ctx.closePath();
            
            for (var j in nodos[obj].destino) {
                //console.log(grafo[obj].destino[j])
                ctx.moveTo(nodos[obj].posX+camara.posX,nodos[obj].posY+camara.posY);
                ctx.lineTo(nodos[nodos[obj].destino[j]].posX +camara.posX, nodos[nodos[obj].destino[j]].posY +camara.posY);
                ctx.stroke(); 
                
            }
            
            
        }
    
    }   
    
    this.dibujarEscenarioIsometrico = function(ctx,camara){
        tamPlat = 2;
        ladoTerreno = 256;
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		for(var i=1;i<=tamPlat;i++){
			for(var j=1;j<=tamPlat;j++)
			{
				px = convIsoX(i*ladoTerreno,j*ladoTerreno)
				py = convIsoY(i*ladoTerreno,j*ladoTerreno);
				
				ctx.drawImage(fondoTerreno,
					px-ladoTerreno+camara.pos2X,
					py-ladoTerreno+camara.pos2Y,
					ladoTerreno*2,
					ladoTerreno);
			}
		}
		
		
		 //Dibujar Mapa;
		 var px = 0;
		 var py = 0;
		 var p2x = 0;
		 var p2y = 0;
        ctx.fillStyle="white";
        ctx.strokeStyle ="white";
        for (var obj in grafo) {
            ctx.beginPath();
            px = convIsoX(nodos[obj].posX,nodos[obj].posY)*2;
            py = convIsoY(nodos[obj].posX,nodos[obj].posY)*2;
            ctx.arc(px+camara.pos2X,py+camara.pos2Y,10,0,Math.PI*2,true);
            ctx.fill();
            ctx.stroke(); 
            ctx.closePath();
            
            for (var j in grafo[obj].destino) {
                //console.log(grafo[obj].destino[j])
                px = convIsoX(nodos[obj].posX,nodos[obj].posY)*2;
                py = convIsoY(nodos[obj].posX,nodos[obj].posY)*2;
                p2x = convIsoX(nodos[grafo[obj].destino[j]].posX,nodos[grafo[obj].destino[j]].posY )*2;
                p2y = convIsoY(nodos[grafo[obj].destino[j]].posX,nodos[grafo[obj].destino[j]].posY )*2;
                
                ctx.moveTo(px+camara.pos2X,py+camara.pos2Y);
                ctx.lineTo(p2x +camara.pos2X, p2y +camara.pos2Y);
                ctx.stroke(); 
                
            }
            
            
        }
    }
}