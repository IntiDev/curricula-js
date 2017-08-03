/**
*
* Crea una web que pida, por medio de un prompt(), una frase al usuario.
* La web debe presentar un mensaje que diga: el número de caracteres y de espacios que componen el string ingresado.
* En la consola, debe aparecer cada caracter impreso en una línea separada, en mayúscula.
* Si el usuario ingresa un campo vacío, la web debe dar un mensaje de error.
* Arma tu archivo JavaScript para que tenga 3 funciones:
* Una función que imprima todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
* Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
* Una función que cuente el número de espacios de un string
*/

do {
	var phrase = prompt("Ingresa tu frase");
		if (phrase !== "") {
		countCharacters(phrase);
		printCharacters(phrase);
		countWhitespaces(phrase);
	} else {
		console.log("Error, debe ingresar una frase");
	}
} while (phrase === "")

function printCharacters(text) {
	for (var i = 0; i < text.length; i++) {
		console.log(text[i].toUpperCase());
	}
}

function countCharacters(phrase) {
	var counter = 0;
		for (var i = 0; i < phrase.length; i++) {
	counter++;
	}
	console.log("El número de caracteres y de espacios que componen el string ingresado son " + counter);
}

function countWhitespaces(sentence) {
	var counter = 0;
	for (var i = 0; i < sentence.length; i++) {
		if( sentence[i] == " " ) {
		counter++;
		}
	}
	console.log("El total de espacios en blanco son " + counter);
}