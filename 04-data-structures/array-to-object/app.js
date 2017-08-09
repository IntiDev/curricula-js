/**

Escribe una función que tome un array 2D y devuelva un objeto con cada par de elementos en el array como un par key-value.

Por ejemplo:

* Input
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

* Output
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

También escribe una función que haga lo contrario. Transforme los pares key-value de un object en un array 2D.

*/

function arrayToObject(array2d) {

  var newObject = {};

  for (var i = 0; i < array2d.length; i++) {

    newObject[array2d[i][0]] = array2d[i][1];
  }

  return newObject;
}

console.log(arrayToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));


function objectToArray(object) {

  var items    = Object.keys(object);
  var newArray = [];

  for (var i = 0; i < items.length; i++) {

    newArray.push([items[i], object[items[i]]]);
  }

  return newArray;
}

console.log(objectToArray({make: "Ford", model: "Mustang", year: 1964}));