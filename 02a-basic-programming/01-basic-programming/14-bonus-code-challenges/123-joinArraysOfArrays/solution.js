var arr = [[1, 4], [true, false], ['x', 'y']];
function joinArrayOfArrays(arr) {
  // your code here
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}
joinArrayOfArrays(arr);