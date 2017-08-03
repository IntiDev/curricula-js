/**
 * Imagina que estás pidiendo comida en un restaurante. Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
 * Si no hay ceviche, elegirías tacos al pastor. Si eso no está, te irías por empanada chilena.
 * En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa.
 * Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decida qué ordenar.
 */

function orderFood() {
	var ceviche = true;
	var tacos = false;
	var empanada = false;

	if (ceviche) {
		return "Awesome! justo lo que necesitaba";
	} else if (tacos){
		return "Nada mal unos tacos al pastor";
	} else if (empanada) {
		return "Bueno, empanada del fin del mundo no está mal";
	} else {
		return "Whatever, con tal de comer, bienvenida hamburguesa";
	}
}
console.log(orderFood(true, false, false));


/**
* Esta es una segunda opción del desarrollo del ejericicio.
* La primera opción estaba basada en la explicación del video if...else
*

function orderFood(isCevicheAvailable, isTacoAvailable, isEmpanadaAvailable) {
	if (isCevicheAvailable) {
		return "Awesome! justo lo que necesitaba";
	} else if (isTacoAvailable){
		return "Nada mal unos tacos al pastor";
	} else if (isEmpanadaAvailable) {
		return "Bueno, empanada del fin del mundo no está mal";
	} else {
		return "Whatever, con tal de comer, bienvenida hamburguesa";
	}
}
console.log(orderFood(true, false, false));
*/