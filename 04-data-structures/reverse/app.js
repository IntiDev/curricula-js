/**
* Crea una función que invierta el orden de los elementos de un array. Completa este reto de dos maneras: en una, el array invertido es un nuevo array; en la segunda, modifica el mismo array que se proporciona como argumento.
* Comentarios para el video
* Hacer un for que recorra el arreglo y haga console.log de cada elemento.
* Haremos console.log para ver qué pasa si ponemos "menor igual"
* qué pasa si no ponemos el "-1" al momento de llamar a los elemetos
*/

var arr = [1,2,3,4,5,6,7,8,9,10];
/**
* Primera parte
var newArr = [];
for (var i = arr.length -1; i >= 0 ; i--) {
    newArr.push(arr[i]);
}
console.log(newArr);
*/

/**
* Segunda parte
for (var i = 0; i < arr.length; i++) {
    var item = arr.pop();
    arr.splice(i,0,item);
}
console.log(arr);
*/