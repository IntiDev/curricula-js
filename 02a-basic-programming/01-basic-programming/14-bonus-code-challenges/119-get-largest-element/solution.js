function getLargestElementAtProperty(obj, key) {
  // your code here

  if (
    obj.hasOwnProperty(key) === false ||
    obj[key].length === 0 ||
    obj[key] instanceof Array === false
  ) {
    return undefined;
  }

  var sorted = obj[key].sort(function(a, b) {
    return a - b;
  });
  console.log(sorted);

  return sorted[sorted.length - 1];
}
