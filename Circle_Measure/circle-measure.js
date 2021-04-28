/* 
             __Medidor Circular v0.1__
   Esta funcion se encargara de graficar los porcentajes 

*/

function measurer(data) {

  value  = data / 100;
  var medidor = document.getElementById("load");
  var data = document.getElementById("percentage");
  
  var rotate = "rotate("+ value / 2 +"turn)";

  data.innerHTML= Math.round(value * 100)+"%";
  medidor.style.transform = rotate;

}





