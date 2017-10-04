function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  var originalSentece = sentence.split(" ");
  sentence = sentence.toLowerCase();
  var arrayOfString = sentence.split(" ");
  var arrayWithLength = [];
  for (var i = 0; i < arrayOfString.length; i++) {
    var word = arrayOfString[i];
    if (isPalindrome(word)) {
      arrayWithLength.push(word.length);
    } else {
      arrayWithLength.push(-1);
    }
  }
  var indexResult = getLargestIntegerOfArrayBackwards(arrayWithLength);
  return originalSentece[indexResult];
}

function reverseString(string) {
  var reversedString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word == reverseString(word) ? true : false;
}

function getLargestIntegerOfArrayBackwards(array) {
  var longestNumberIndex = array.length - 1;
  for (var i = array.length - 2; i >= 0; i--) {
    if (array[i] > array[longestNumberIndex]) {
      longestNumberIndex = i;
    }
  }
  return longestNumberIndex;
}
