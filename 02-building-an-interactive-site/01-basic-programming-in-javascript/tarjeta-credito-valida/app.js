/*

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez, según el algoritmo de Luhn.

*/

var card = prompt('¿Cuál es el número de la tarjeta de crédito?');
var cardArray = [];

for (var i  = card.length -1; i >= 0 ; i--) {

  cardArray.push(parseInt(card[i]));
}

var total = 0;

for (var i = 0; i < cardArray.length; i++) {

  if (i % 2 !== 0) {

    var temp = cardArray[i]*2;

    if (temp >= 10) {

      temp = (temp % 10) + parseInt(temp/10);
    }
    
    total += temp;
    
  } else{
    
    total += cardArray[i];
  }

}
console.log(total);
console.log((total%10 === 0) ? 'Válido' : 'No válido')