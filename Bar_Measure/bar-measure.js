/* 
             __Medidor de Barra v0.1__
   Esta funcion se encargara de graficar los porcentajes 

*/

function measurer(data) {

  var medidor = document.getElementById("load");
  var percentage = data+"%";

  medidor.innerHTML= percentage;
  medidor.style.width = percentage;

}





