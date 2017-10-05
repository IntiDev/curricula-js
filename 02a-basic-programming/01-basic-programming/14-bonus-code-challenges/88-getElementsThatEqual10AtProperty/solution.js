
var obj = {
   key : [29, 4, 2, 10]
};


function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var newArray = [];
  if(obj.hasOwnProperty('key') && obj[key] instanceof Array && obj[key].length > 0) {
    for(var i = 0; i < obj[key].length; i++) {
      if(obj[key][i] === 10) {
         newArray.push(obj[key][i]);
      }
    }
    return newArray;
  } else {
    return [];
  }
  
}
getElementsThatEqual10AtProperty(obj, 'key');