/*
Crea un programa que cree un string que represente una cuadrícula de 8x8, usando el salto de línea como separador. En cada posición de la cuadrícula debe haber un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez.

Pasar ese string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa de tal manera que trabaje para cualquier tamaño, que sea proporcionado por un prompt() produciendo una cuadrícula del ancho y alto dado.

*/

var str = "";
var bool = false;
var size = parseInt(prompt("Ingrese el tamaño del tablero"));

for(var i = 0; i < size; i++){

	for(var j = 0; j < size; j++){

		if(bool = !bool){
			str += "#";
		}else{
		str += " ";
		}
	}

	if(size % 2 == 0 && i % 2 == 0){
		bool = true;
	}else{
		bool = false;
	}
	str += "\n";
}

console.log(str);