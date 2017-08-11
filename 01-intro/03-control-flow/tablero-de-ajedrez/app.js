/**

Crea un programa que cree un string que represente una cuadrícula de 8x8, usando el salto de línea como separador.

* En cada posición de la cuadrícula debe haber un espacio o un carácter "#".
* Los caracteres deberían formar un tablero de ajedrez.
* Pasar ese string a console.log debería mostrar algo como esto:

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

var result = '';
var size = parseInt(prompt('Ingrese el tamaño del tablero'));

for (var row = 0; row < size; row++) {
  
  for (var column = 0; column < size; column++) {
    
    if ((row + column) % 2 == 0) {
      result += ' ';
    } else {
      result += '#';
    }
  }
  
  result += '\n';
}
console.log(result);