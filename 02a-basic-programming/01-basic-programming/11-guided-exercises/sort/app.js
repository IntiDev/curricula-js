/**

Crea una funcion que ordene un array de números, de menor a mayor. Tip: utiliza el algoritmo de selection sort

* Mencionar quicksort

*/

function sort(array) {  

  for (var i = 0; i < array.length; i++) {

    var index = i;

    for (var j = i + 1; j < array.length; j++) {

      if (array[j] < array[index]) {
        index = j;
      }
    }

    if (index !== i) {

      var temp     = array[index];
      array[index] = array[i];
      array[i]     = temp;
    }
  } 
  return array;
}

console.log(sort([7, 3, 9, 1, 8]));