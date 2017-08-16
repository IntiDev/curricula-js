
// escribir aquí tu código


function convertir(cadena) {
    var first_letter = cadena.charAt(0).toUpperCase();
    var length =cadena.length-1;
    var last_letter=cadena.charAt(length).toUpperCase();
    var result=first_letter+cadena.slice(1, length )+last_letter;
    return result;
}


console.log (convertir ("Alexander") );