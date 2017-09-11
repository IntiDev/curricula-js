/**

Crea un programa que un cajero automático pueda utilizar para determinar el número mínimo de billetes a entregar dado un monto solicitado. El cajero empieza con:

* 100 billetes de 100
* 50 billetes de 20
* 200 billetes de 20
* 300 billetes de 10
* 500 billetes de 5
* 800 billetes de 1

*/

var cajero = {
  1: 800,
  5: 500,
  10: 300,
  20: 200,
  50: 50,
  100: 100
}

var cantidad = parseInt(prompt('¿Cuál es tu número?'));
var value = 0;
var residuo = 0;
var billetes = Object.keys(cajero).reverse();

var billetesUsados = 0;

while (cantidad > 0) {

  if (value === 5) {

    break;
  } 

  if (cantidad >= billetes[value]) {

    residuo = cantidad % billetes[value];
    billetesUsados = (cantidad - residuo) / billetes[value];
    cantidad = residuo;

  }

  cajero[billetes[value]] = cajero[billetes[value]] - billetesUsados;
  billetesUsados = 0;
  value++;
}

console.log(cantidad);
console.log(cajero); 