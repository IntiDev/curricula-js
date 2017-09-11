/**

Escribe una función que tome un array como parámetro y retorne otro array pero sin elementos duplicados.

*/

function removeDuplicates(array) {

  var notDuplicates = [];

  for (var i = 0; i < array.length; i++) {

    if (notDuplicates.indexOf(array[i]) === -1) {
      notDuplicates.push(array[i]);
    }
  }

  return notDuplicates;
}
console.log(removeDuplicates([4, 4, 7, 6, 4, 3, 2, 1, 0, 2]));