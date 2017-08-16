/**

Escribe una función llamada areArraysSame que tome dos arrays como argumentos. Debe devolver verdadero si los dos arrays son iguales (es decir, tienen los mismos números, en el mismo orden) y false si son diferentes.

*/

function areArraysSame(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (var i = 0; i < arrayOne.length; i++) {

    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysSame([1, 2, 3, 4],[1, 2, 3, 4]))
console.log(areArraysSame([3, 2, 5, 4],[3, 2, 6, 4]))