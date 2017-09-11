function espacios(n) {

  var s = '';

  for (var i = 0; i < n; i++) {
    s += ' ';
  }

  return s;
}

function imprimirDosTriangulos (n) {

  for (var i = 0; i < n; i++) {
    var s = '';

    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }

    console.log(s);
  }

  var e = espacios(n);

  for (var i = 0; i < n; i++) {
    var s = '';

    for (var j = n - i; j >= 1; j--) {
      s += j;
    }

    console.log(e + s);
  }
}


var n = prompt();
imprimirDosTriangulos (n);
