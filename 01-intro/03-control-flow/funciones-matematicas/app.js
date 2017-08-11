/**
* Crea dos funciones, add y multiply. Cada una debe tomar dos argumentos. La función add debe sumar sus argumentos y devolver el resultado. La funcion multiply debe multiplicar sus argumentos. Usando solamente estas dos funciones, resuelva este simple problema matemático: 36325 * (9824 + 777).
*/

function add(num1, num2) {
	return num1 + num2;
}

function multiply(num1, num2) {
	return num1 * num2;	
}

console.log(multiply(36325, add(9824,777)));