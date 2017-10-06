var obj = {
  a: 2,
  b: 3,
  c: 4,
};

function removeOddValues(obj) {
  // your code here
  for(var i in obj) {
    if(obj[i] % 2 != 0) {
      delete obj[i];
    }
  }
}