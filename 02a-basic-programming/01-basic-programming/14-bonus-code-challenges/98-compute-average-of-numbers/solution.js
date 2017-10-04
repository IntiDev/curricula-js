function computeAverageOfNumbers(nums) {
  // your code here
  if (nums.length == 0) {
    return 0;
  }

  var counter = 0;
  for (var i = 0; i < nums.length; i++) {
    counter += nums[i];
  }

  return counter / nums.length;
}
