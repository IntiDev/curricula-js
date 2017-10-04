function getElementsGreaterThan10AtProperty(obj, key) {
  // your code here
  var result = [];

  if (obj[key] instanceof Array !== true) {
    return result;
  }

  for (var i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > 10) {
      result.push(obj[key][i]);
    }
  }

  return result;
}
