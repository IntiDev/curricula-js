/*

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el Cifrado César con con el parámetro de desplazamiento de ** 33 espacios hacia la derecha**

Por ejemplo:

* Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
* Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

*/

var word = prompt('¿Qué frase quieres cifrar?');
var cipherWord = '';

for (var i = 0; i < word.length; i++) {

  var temp = word.charAt(i);
  var asciiTemp = temp.charCodeAt();

  if(asciiTemp !== 32){

    var cipherLetter = String.fromCharCode((asciiTemp - 65 + 33) % 26 + 65);
    cipherWord += cipherLetter;

  }else{

    cipherWord += ' ';
  }
}

console.log(cipherWord);
