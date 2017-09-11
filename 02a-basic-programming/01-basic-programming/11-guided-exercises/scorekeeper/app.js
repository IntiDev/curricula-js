/**

Imagina que estás jugando con algunas amigas y quieres ir registrando el puntaje de cada una. Crea un objeto llamado scores donde los keys o propiedades son los nombres de tus amigas y los valores serán los puntajes (todos empiezan con 0).

Escribe una función que toma dos argumentos, el nombre de tu amiga y la cantidad de puntos nuevos que ha obtenido, y que actualice los puntos de la jugadora en el objeto scores. También escribe una función que imprima en la consola el total de los puntos.
*/

var scores = {
  ana: 0,
  ale: 0,
  maria: 0
};

function addPoints(name, points) {
  scores[name] += points;
}

console.log(addPoints("maria", 350));

function printAllPoints() {

  var names = Object.keys(scores); //propiedades == keys, porque los objetos son key => value
  var points = 0;

  for (var i=0; i < names.length; i++) {
    points += scores[names[i]];  
  }

  return points;
}

console.log(printAllPoints())