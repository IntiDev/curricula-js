/*2. Ordenando comida
Imagina que estás pidiendo comida en un restaurante. Tu plato favorito es ceviche, así que lo elegirías si está en el menú. Si no hay ceviche, elegirías tacos al pastor. Si eso no está, te irías por empanada chilena. En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. Escribe una función, que de acuerdo a la disponibilida de los platos en el menú, decida qué ordenar.*/

//aquí Iván no se si es así de básico o algo un poco más elaborado, ahí me das tu opinión

function food(){
  var ceviche = true;
  var tacos = false;
  var empanada = false;
  
  if (ceviche){
    console.log("Awesome! justo lo que necesitaba");
  }else if (tacos){
    console.log("Nada mal unos tacos al pastor");
  }else if (empanada){
    console.log("Bueno, empanada del fin del mundo no está mal");
  }else{
    console.log("Whatever, con tal de comer, bienvenida hamburguesa")
  }
}

food();