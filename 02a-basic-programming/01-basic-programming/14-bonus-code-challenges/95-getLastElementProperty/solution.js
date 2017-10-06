var obj = {
  key : [1, 2, 5]
};

function getLastElementOfProperty(obj, key) {
  // your code here
  
  if(obj.hasOwnProperty(key) && obj[key] instanceof Array && obj[key].length > 0)  {
    return obj.key.pop();
  } else {
    return undefined;
  }
}

getLastElementOfProperty(obj, 'key');