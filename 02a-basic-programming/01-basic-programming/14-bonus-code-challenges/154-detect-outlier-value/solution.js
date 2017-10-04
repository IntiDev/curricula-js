function detectOutlierValue(string) {
  var arrayOfString = string.split(" ");
  var arrayType = detectIfArrayHasMostOddsOrEvens(arrayOfString);

  if (arrayType == "odds") {
    for (var i = 0; i < arrayOfString.length; i++) {
      var number = arrayOfString[i];
      if (isEven(number)) {
        return i + 1;
      }
    }
  } else if (arrayType == "evens") {
    for (var i = 0; i < arrayOfString.length; i++) {
      var number = arrayOfString[i];
      if (isOdd(number)) {
        return i + 1;
      }
    }
  }
}

function detectIfArrayHasMostOddsOrEvens(array) {
  var oddsCounter = 0;
  var evenCounter = 0;

  for (var i = 0; i < 3; i++) {
    if (isEven(array[i])) {
      evenCounter++;
    } else {
      oddsCounter++;
    }
  }

  return oddsCounter > evenCounter ? "odds" : "evens";
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isOdd(number) {
  return !isEven(number);
}
