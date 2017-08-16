
// escribir aquí tu código

function potencia (b, e) {

    var rpta = 1;
    for (var i = 1; i <= e; i++) {
        rpta *= b;
    }
    return rpta;
}


for (var i = 1; ; i++) {
    var r = potencia (3, i);
    if ( r < 10000 )
        console.log (r);
    else
        break;
}