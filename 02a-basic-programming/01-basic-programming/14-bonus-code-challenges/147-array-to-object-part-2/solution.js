function fromListToObject(array) {
  var finalObject = {};
  // your code here
  for (var i = 0; i < array.length; i++) {
    var key = array[i][0];
    var value = array[i][1];
    finalObject[key] = value;
  }
  return finalObject;
}
