function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (
    obj.hasOwnProperty(key) === false ||
    obj[key].length === 0 ||
    obj[key] instanceof Array === false
  ) {
    return 0;
  }

  return obj[key].reduce(function(itemA, itemB) {
    return itemA + itemB;
  });
}
