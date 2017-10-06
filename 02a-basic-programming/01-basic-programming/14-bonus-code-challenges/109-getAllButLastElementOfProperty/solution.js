var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if(obj.hasOwnProperty('key') && obj[key] instanceof Array && obj[key].length > 0)  {
   obj[key].pop(); 
   return obj[key];
  } else {
    return [];
  }
 
}
getAllButLastElementOfProperty(obj, 'key');