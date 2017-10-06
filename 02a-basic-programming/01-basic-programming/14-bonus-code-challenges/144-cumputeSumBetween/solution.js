var num1 = parseInt(prompt('Ingresa primer numero entero'));
var num2 = parseInt(prompt('Ingresa el segundo numero entero'));
function computeSumBetween(num1, num2) {
  // your code here
  var sum = 0;
  for(var i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

computeSumBetween(num1, num2);