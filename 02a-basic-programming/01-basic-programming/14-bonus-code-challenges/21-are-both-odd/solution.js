function areBothOdd(num1, num2) {
  // your code here
  if (isOdd(num1) === true && isOdd(num2) === true) {
    return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  return num % 2 !== 0 ? true : false;
}
