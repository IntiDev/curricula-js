function contar(string) {

  string = string.toLowerCase();
  var contador = 0;

  for (var x = 0; x < string.length; x++) {

    if ((string.charAt(x) == 'a') || (string.charAt(x) == 'e') || (string.charAt(x) == 'i') || (string.charAt(x) == 'o') || (string.charAt(x) == 'u')) {
      contador++;
    }
  }

  return contador;
}
