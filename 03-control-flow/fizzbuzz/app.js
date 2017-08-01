/**
Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones:
* Para números divisibles por 3, imprime "Fizz" en vez del número
* Para números divisibles por 5 (pero no por 3), imprime "Buzz".
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que sean divisibles tanto por 3 como por 5 (y que siga imprimiendo "Fizz" o "Buzz" para números divisibles por sólo uno de ellos).
*/

/**
* Primera parte
var number = 1;
while (number <= 100) {
 if (number % 3 === 0) {
     console.log("Fizz");
 }
 else if (number % 5 === 0) {
     console.log("Buzz");
 }
 else {
     console.log(number)
 }
 number++
}
*/

/**
* Segunda parte
var number = 1;
while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0 ) {
        console.log("FizzBuzz")
    }
    else {
        if (number % 3 === 0) {
            console.log("Fizz");
        }
        else if (number % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(number)
        }
    }
    number++
}
*/