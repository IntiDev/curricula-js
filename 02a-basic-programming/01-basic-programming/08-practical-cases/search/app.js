/**

Crea una funcion que busquen un elemento en un array, devolviendo su posición (index) e imprima el valor en la consola. Tip: utiliza el algoritmo de linear search

*/

function search(array, element) {

  for (var i = 0; i < array.length; i++) {

    if (array[i] === element) {
      return i;
    }
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));