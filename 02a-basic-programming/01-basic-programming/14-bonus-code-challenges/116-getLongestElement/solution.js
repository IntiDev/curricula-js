var arr = ['one', 'two','three'];
function getLongestElement(arr) {
  // your code here
  var longest = 0;
  var res;
  if(arr.length == 0){   
    return '';     
  } else {            
    for(var i=0; i < arr.length; i ++){
       if(arr[i].length > longest){
       longest = arr[i].length;
       res = arr[i];
      } 
    }
    return res;
  }
}

getLongestElement(arr);