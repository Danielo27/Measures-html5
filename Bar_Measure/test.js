/* 
            __Tester Medidor v.1__
   Este archivo generara numeros aleatorios
   y los Enviara a la funcion medidor que sera  
   la encargada de graficar los porcentajes recibidos

*/

var count = 0;
var interval;
var cycles = 20;
var seconds = 1000;

function interval() {
  interval = setInterval(values,seconds);
}

function values() {

  var percentage = parseInt(Math.random()*100);
  measurer(percentage);

  count++;

  if (count >= cycles){
      clearInterval(interval);
  }
}



