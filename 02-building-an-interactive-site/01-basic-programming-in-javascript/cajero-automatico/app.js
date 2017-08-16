/**

Crea un programa que un cajero automático pueda utilizar para determinar el número mínimo de billetes a entregar dado un monto solicitado. El cajero empieza con:

* 100 billetes de 100
* 50 billetes de 20
* 200 billetes de 20
* 300 billetes de 10
* 500 billetes de 5
* 800 billetes de 1

*/

/*

* Prueba:

var cajero = {
  100: 100,
  50: 50,
  20: 200,
  10: 300,
  5: 500,
  1: 800
}

var cantidad = 250;
var billetes = Object.keys(cajero);
var value = 0;
while (cantidad > 0) {
  var residuo = cantidad % billetes[value];
  if (residuo < billetes[value]) {
    cajero[billetes[value]]-1;
    value++
  }
}

console.log(billetes)

var cajero = {
  100: 100,
  50: 50,
  20: 200,
  10: 300,
  5: 500,
  1: 800
}
var cantidad = 250;
var value = 0;
var residuo;
while (cantidad > 0) {
  residuo = cantidad % billetes[value];
  
  if (residuo < billetes[value]) {
    value++;
  }
	cajero[billetes[value]]--;
}
console.log(cantidad);
console.log(cajero);

*/