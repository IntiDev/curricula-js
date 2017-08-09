/**

Vamos a crear un objeto que solo tenga la propiedad "grade", después personalizaremos el objeto preguntando por medio de prompts datos al usuario y luego añadiremos esos datos obtenidos al objeto

*/

// Creando el nuevo objeto
var student = {
  grade: 'Developer'
};

// Preguntando los datos que se añadirán al objeto
var name = prompt('¿Cuál es tu nombre?');
var age  = prompt('¿Cuál es tu edad?');

// Añadiendo propiedades y valores
student.name = name;
student.age  = parseInt(age);

console.log(student);