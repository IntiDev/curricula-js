var word1 = prompt('Write word1');
var word2 = prompt('Write word2');

function getLengthOfTwoWords(word1, word2) {
  // your code here
  var lengthWord1 = word1.length;
  var lengthWord2 = word2.length;
  return lengthWord1 + lengthWord2;
}

getLengthOfTwoWords(word1, word2);