
function esMayor (A, B, C) {

    var maximo = A;
    if(A > B)
    {
        if(A > C)
        {
            maximo = A;
        }
        else
        {
            maximo = C;
        }
    }
    else
    {
        if(B > C)
        {
            maximo = B;

        }
        else
        {
            maximo = C;
        }

    }
    return maximo;
}
 