var arr = [3,'word', 5,'up', 1, 3, 11];

function getLargestNumberAmongMixedElements(arr) { 
  // your code here
  var minIndex = 0;
  var newArr = [];
  if(arr.length === 0) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
   if(typeof arr[i] == 'number') {
     newArr.push(arr[i]);
   }    
  }
 if(newArr.length === 0) {
   return 0;
 } else {
  for(var i = 1; i < newArr.length; i++) {
    if(newArr[minIndex] < newArr[i]) {
      minIndex = i;
    }
  }
  
 return newArr[minIndex];
 }
}
getLargestNumberAmongMixedElements(arr); 
