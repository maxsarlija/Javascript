/*

    1. Pedirle al usuario que ingrese un numero
    2. Si el numero es mayor a 0:
        2.1. Mosrar un comentario que diga 'Numero Positivo'
    3 Si el numero es menor a 0:
        3.1 Mostrar un comentario que diga 'Numero Negativo'
    4 Si el numero es igual a 0:
        4.1 Mostrar un comentario que diga 'Numero Cero'

*/

// const numero = prompt("Ingresa un numero");
// if ( parseInt(numero) > 0) {
//     alert("Numero Positivo");
// }
// else if (numero < 0) {
//     alert("Numero Negativo");
// }
// else {
//     alert("No es un numero es: $numero");
// }
    

/*
Calculadora
 */
// OPCION 1
// const numero1 = parseInt(prompt("Ingresa el primer numero"));
// const operacion = prompt("Ingresa la operacion: SUMAR, RESTAR, MULTIPLICAR, DIVIDIR");
// const numero2 = parseInt(prompt("Ingresa el segundo numero"));

// const resultado = 0;

// if (operacion === "SUMAR") {
//     alert(numero1 + numero2);
// }
// else if (operacion === "RESTAR") {
//     alert(numero1 - numero2);
// }
// else if (operacion === "MULTIPLICAR") {
//     alert(numero1 * numero2);
// }
// else if (operacion === "DIVIDIR") {
//     alert(numero1 / numero2);
// }

// OPCION 2
const numero1 = parseInt(prompt("Ingresa el primer numero"));
const operacion = prompt("Ingresa la operacion: SUMAR, RESTAR, MULTIPLICAR, DIVIDIR");
const numero2 = parseInt(prompt("Ingresa el segundo numero"))

if(!isNaN(numero1) && !isNaN(numero2)) {
    if (operacion === "SUMAR") {
        alert(numero1 + numero2);
    }
    else if (operacion === "RESTAR") {
        alert(numero1 - numero2);
    }
    else if (operacion === "MULTIPLICAR") {
        alert(numero1 * numero2);
    }
    else if (operacion === "DIVIDIR") {
        alert(numero1 / numero2);
    }
}