/* 
             __Medidor de Barra v0.1__
   Esta funcion se encargara de graficar los porcentajes 

*/

function measurer(ba,bb,bc) {

  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");


  a.innerHTML= ba + "%";
  a.style.width = ba + "%";

  b.innerHTML= bb + "%";
  b.style.width = bb + "%";

  c.innerHTML= bc + "%";
  c.style.width = bc + "%";

}





