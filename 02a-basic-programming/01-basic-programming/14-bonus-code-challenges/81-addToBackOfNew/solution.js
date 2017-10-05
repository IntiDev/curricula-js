var arr = [1, 2];
var element = 3;

function addToBackOfNew(arr, element) {
  var newArr = [];
  // your code here
  arr.map(function(i) {
    newArr.push(i)
  });
  newArr.push(element);
  return newArr;
}

addToBackOfNew(arr, element);