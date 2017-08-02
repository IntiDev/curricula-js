/*
4. Contando caracteres y espacios
Crea una web que pida, por medio de un prompt(), una frase al usuario. La web debe presentar un mensaje que diga: el número de caracteres y de espacios que componen el string ingresado. En la consola, debe aparecer cada caracter impreso en una línea separada, en mayúscula. Si el usuario ingresa un campo vacío, la web debe dar un mensaje de error.
Arma tu archivo JavaScript para que tenga 3 funciones:
Una función que imprima todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
Una función que cuente el número de espacios de un string
*/

//valido con do while el ingreso de un string, en caso de estar el campo vacío devuelvo un alert de error
//en caso contrario ejecuta cada una de las funciones
do{
	var str = prompt("Ingresa tu frase");
		if (str != ""){
		countChar(str);
		print(str);
		countWhite(str);
	}else{
		alert("Error, debe ingresar una frase");
	}
}
while (str == "")

function print(a){
	for(var i = 0; i < str.length; i++){
		console.log(str[i].toUpperCase()); //recorre el string muestra por consola cada posición (letra) en mayúscula
	}
}

function countChar(a){
	var cont = 0;
		for(var i = 0; i < str.length; i++){
	cont++;
	}
	alert("El número de caracteres y de espacios que componen el string ingresado son " + cont); //recorre el string y a través de un contador me devuelve el total de caracteres
}

function countWhite(a){
	var cont2 = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] == " "){
		cont2++;
		}
	}
	console.log("El total de espacios en blanco son: " + cont2); //lo mismo que el anterior pero sólo con los espacios en blanco
}