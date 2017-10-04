function removeStringValues(obj) {
  // your code here
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }

  return obj;
}
