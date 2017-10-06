function isEvenAndGreaterThanTen(num) {
  // your code here
  if(num % 2 == 0 && num > 10) {
    return true;
  } else {
    return false;
  }
}
var num = parseInt(prompt('Ingresa un numero par mayor a 10'));
isEvenAndGreaterThanTen(num);