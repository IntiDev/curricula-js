//n = 100
// 3.1337874906281575
function phi (n) {

    var sum = 1;
    for (var i = 0; i < n; i++) {
        var par = 2 * (i+1) ;
        var impar = 2*i+1 ;

        sum *= par / impar;

        impar = 2*(i+1) + 1 ;
        sum *= par / impar;

    }
    return 2 * sum;

}


var n = prompt();
console.log ( phi (n));
