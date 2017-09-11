/**
* Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: toddler, preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.
* Si la persona ingresa un dato que no es un número entero (por ejemplo: un string, un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error. Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.
*/


function agesAndStages(age) {
  
  if (age > 0) {
    
    if (age >= 1 && age <= 3) {
      alert('Toddler');
    } else if (age > 3 && age <= 5) {
      alert('Preschooler');
    } else if (age > 5 && age <= 12) {
      alertg('Gradeschooler');
    } else if (age > 12 && age <= 18) {
      alert('Teenager');
    } else if (age > 18 && age <= 21) {
      alert('Young Adult');
    } else {
      alert('Adult');
    }
  } else {
  
    alert('Debes ingresar una edad válida');
  }
}

var age = parseInt(prompt('¿Cuál es tu edad?'));
agesAndStages(age);