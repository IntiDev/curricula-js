var num = parseInt(prompt('Ingresa un numero par'));
function isEven(num) {
  // your code here
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

isEven(num);
