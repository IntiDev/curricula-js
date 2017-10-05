var word1 = prompt('Ingresa palabra 1');
var word2 = prompt('Ingresa palabra 2');
var word3 = prompt('Ingresa palabra 3');
function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  
  if(word1.length < word2.length && word1.length < word3.length) {
    return word1;
  } else if(word2.length < word1.length && word2.length < word3.lengt) {
    return word2;
  } else if(word3.length < word1.length && word3.length < word2.length)  {
    return word3;
  } else if(word1.length == word2.length || word1.length == word3.length) {
    return word1;
  } else if(word2.length == word3.length) {
    return word2;
  }
}

findShortestOfThreeWords(word1, word2, word3);