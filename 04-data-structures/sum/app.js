/**

Crea una función range que tome dos argumentos: start (principio) y end (fin) y que devuelva un array que contenga los números desde el start hasta el end (incluyéndolo).

A continuación, escribe una función sum que tome una array de números y devuelva la suma de estos números.

* Confirma que al ejecutar console.log(sum(range(1,10))) se imprime el resultado 55.

Ahora modifique su función de rango para tomar un tercer argumento opcional que indique el valor de "step" utilizado para construir el array. Si no se da ningún step, los elementos del array suben por incrementos de uno, correspondientes al comportamiento anterior. La llamada range(1, 10, 2) debe devolver [1, 3, 5, 7, 9]. Asegúrate que también funciona con valores de step negativos, de modo que range(5, 2, -1) produce [5, 4, 3, 2].

*/



// Primera parte

// función que crea un array que contenga los números desde el start hasta el end
function range(start, end) {

  var array = [];

  for (var i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

console.log(range(1,10));

// Segunda parte

function range(start, end, step) {

  var array = [];

  for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
    array.push(i);
  }

  return array;
}

console.log(range(5, 2 , -1));


// función que suma los elementos de un array

function sum(array) {

  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

console.log(sum(range(1,10)));
