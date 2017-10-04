function removeNumbersLessThan(num, obj) {
  // your code here
  for (var key in obj) {
    if (obj[key] < num) {
      delete obj[key];
    }
  }

  return obj;
}
