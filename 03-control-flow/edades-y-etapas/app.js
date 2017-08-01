/**
* Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: toddler, preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.

Si la persona ingresa un dato que no es un número entero (por ejemplo: un string, un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error. Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.
* DUDAS:
*   Acá tengo una duda en cuanto a verificar si es un campo vacío ya que si lo pongo como una condicional más y el usuario pone un número correcto se va al else porque un número no tiene length
*/

var age = parseInt(prompt('¿Cuál es tu edad?'));

if (typeof age === 'number' && age % 1 == 0 && age !== 0) {
    if (age >= 1 && age <= 3) {
        console.log('Toddler');
    }
    else if (age > 3 && age <= 5) {
        console.log('Preschooler');
    }
    else if (age > 5 && age <= 12) {
        console.log('Gradeschooler');
    }
    else if (age > 12 && age <= 18) {
        console.log('Teenager');
    }
    else if (age > 18 && age <= 21) {
        console.log('Young Adult');
    }
    else {
        console.log('Adult');
    }
}
else {
    alert('Debes ingresar una edad válida');
}
