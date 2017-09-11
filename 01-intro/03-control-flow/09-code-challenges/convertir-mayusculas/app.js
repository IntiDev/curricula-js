function convertir(cadena) {

  var firstLetter = cadena.charAt(0).toUpperCase();
  var length = cadena.length - 1;
  var lastletter = cadena.charAt(length).toUpperCase();
  var result = firstLetter + cadena.slice(1, length ) + lastletter;

  return result;
}

console.log (convertir ("Alexander") );