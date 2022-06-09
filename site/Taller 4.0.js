var d = document.getElementById('Dibujo')
var lienzo = d.getContext('2d')

    function SquShadow(x1,y1,x2,y2){
      lienzo.beginPath()
      lienzo.moveTo(x1,y1);
      lienzo.lineTo(x2,y2);
      grad1=lienzo.createLinearGradient(10,75,80,75);
      grad1.addColorStop(0,"#35BBCA")
      grad1.addColorStop(0.3,"#0191B4")
      grad1.addColorStop(0.7,"#F8D90F")
      grad1.addColorStop(1,"#D3DD18")
      lienzo.shadowOffsetX= 10
      lienzo.shadowOffsetY= 10
      lienzo.shadowColor="grey"
      lienzo.shadowBlur = 6
      lienzo.fillStyle=grad1
      lienzo.fillRect(20,20,80,80)
}

    function DibujarPuntoCirculos(){
      
      lienzo.lineWidth = 10;
      lienzo.beginPath();
      grad1=lienzo.createLinearGradient(350,500,80,75);
      grad1.addColorStop(0,"#35BBCA")
      grad1.addColorStop(0.2,"#0191B4")
      grad1.addColorStop(0.5,"#F8D90F")
      grad1.addColorStop(0.7,"#D3DD18")
      grad1.addColorStop(1,"#FE7A15")
      lienzo.arc(300,250,200,0,2*Math.PI)
      lienzo.fillStyle=grad1;
      lienzo.strokeStyle = grad1;
      lienzo.shadowOffsetX= -20
      lienzo.shadowOffsetY= 20
      lienzo.shadowColor="red"
      lienzo.shadowBlur = 25
      lienzo.stroke();
      lienzo.closePath();}

	function DibujarPuntoCurvasBezier(){
      lienzo.beginPath();
      lienzo.moveTo(50, 200);
      lienzo.bezierCurveTo(200, 50, 350, 200, 500, 50);
      lienzo.shadowOffsetX= -40
      lienzo.shadowOffsetY= -20
      lienzo.shadowColor="blue"
      lienzo.shadowBlur = 10
      lienzo.stroke();
      lienzo.closePath();
    }
  
//SquShadow(20,20,80,80) 
DibujarPuntoCirculos()
//DibujarPuntoCurvasBezier()