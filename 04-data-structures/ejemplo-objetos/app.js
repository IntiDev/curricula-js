/**
* Vamos a crear un objeto que solo tenga la propiedad de "grade", después personalizaremos el objeto preguntando por medio de prompts datos al usuario y luego añadiremos esos datos obtenidos al objeto
*/
var student = {
    grade: "Developer"
};
var name = prompt("¿Cuál es tu nombre?");
var age = parseInt(prompt("¿Cuál es tu edad?"));
student.name = name;
student.age = age;
console.log(student);