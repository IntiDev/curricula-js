function filterEvenLengthWords(words) {
  // your code here
  var result = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
      result.push(words[i]);
    }
  }
  return result;
}
