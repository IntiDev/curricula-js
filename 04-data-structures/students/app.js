/**
* A continuación Michelle te explica cómo utilizar funciones, estructuras repetitivas y estructuras
* condicionales para imprimir en la consola:
* Los nombres de todas las estudiantes activas
* Los puntos totales de la clase
* Los nombres de las estudiantes que han llevado el curso de "JS avanzado"
*/
var michelle = {
  name: "Michelle",
  points: 2000,
  isActive: true,
  courses: ["Intro JS", "JS avanzado", "JS master"]
}

var alexandra = {
  name: "Alexandra",
  points: 4100,
  isActive: true,
  courses: ["Intro JS", "Intro UX", "UX master"]
}

var andrea = {
  name: "Andrea",
  points: 800,
  isActive: false,
  courses: ["Intro JS", "JS avanzado"]
}

var students = [michelle, alexandra, andrea];

// Estudiantes activas
for (var i = 0; i < students.length; i++) {
    if (students[i].isActive) {
     console.log(students[i].name);   
    }
}

// Puntos totales de la clase
var total = 0;
for (var i = 0; i < students.length; i++) {
    total += students[i].points;
}
console.log(total);

// Estudiantes que han llevado "JS avanzado"
for (var i = 0; i < students.length; i++) {
    var coursesStudent = students[i].courses;
    for(var y = 0; y < coursesStudent.length; y++){
        if (coursesStudent[y] == "JS avanzado") {
            console.log(students[i].name)
        }
    }
}
