var obj = {
  key: [2, 1, 5]
}

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  var newArray = [];
  if(obj.hasOwnProperty('key') && obj[key] instanceof Array && obj[key].length > 0) {
    for(var i = 0; i < obj[key].length; i++) {
      newArray.push(obj[key][i] * obj[key][i]);
    }
    return newArray;
  } else {
    return [];
  }
}
getSquaredElementsAtProperty(obj, 'key');