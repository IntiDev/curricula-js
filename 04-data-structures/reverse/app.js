/**

Crea una función que invierta el orden de los elementos de un array. Completa este reto de dos maneras: 

* Crear un nuevo array 
* Modifica el array proporcionado como parametro.

* Comentarios para el video

* Hacer un for que recorra el arreglo y haga console.log de cada elemento.
* Haremos console.log para ver qué pasa si ponemos "menor igual"
* qué pasa si no ponemos el "-1" al momento de llamar a los elemetos

*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Primera forma

var newArray = [];

for (var i = array.length -1; i >= 0 ; i--) {
  newArray.push(array[i]);
}

console.log(newArray);


//Segunda forma

for (var i = 0; i < array.length; i++) {

  var item = array.pop();
  array.splice(i,0,item);
}

console.log(array);
