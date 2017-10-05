function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  if(num2 % 2 == 0 || num1 % 2 == 0 && num1 < 9 && num2 < 9) {
    return true;
  } else {
    return false;
  }
  
}

var num1 = parseInt(prompt('Ingresa un numero menor a 9'));
var num2 = parseInt(prompt('Ingresa otro numero menor a 9 y que sea par'));
isEitherEvenAndLessThan9(num1, num2);