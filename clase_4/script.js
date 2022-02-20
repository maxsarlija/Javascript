// const numero1 =  parseInt(prompt("Ingrese el primer numero"));
// const numero2 =  parseInt(prompt("Ingrese el segundo numero"));
// const operacion = prompt("Ingrese la operacion a realizar: SUMA RESTA MULTIPLICACION DIVISION");
// const nombre = prompt("Ingrese su nombre");
// const apellido = prompt("Ingrese su nombre");

// saludar(nombre+" " +apellido);
// switch(operacion)
// {

//     case "SUMA":
//         {
//         alert(numero1 + numero2);
//         break;
//     }

//     case "RESTA":
//         {
//         alert(numero1 - numero2);
//         break;
//         }

//     case "MULTIPLICACION":
//         {
//         alert(numero1 * numero2);
//         }
//     case "DIVISION":
//         {
//         alert(numero1 / numero2);
//         }

// }

// function saludar(x)
// {
//     alert("Hola " + x);
// }

// function prepararEnsalada(ing1,ing2,ing3)
// {
//     let ensalada = `${ing1} ${ing2} ${ing3}`;
//     alert(ensalada);
// }
// const ingre1 = prompt("Ingrese el primer ingrediente");
// const ingre2 = prompt("Ingrese el segundo ingrediente");
// const ingre3 = prompt("Ingrese el tercer ingrediente");
// prepararEnsalada(ingre1,ingre2,ingre3);


const numero1 = parseInt(prompt("Ingrese el primer numero"));
const numero2 = parseInt(prompt("Ingrese el segundo numero"));
const numero3 = parseInt(prompt("Ingrese el tercer numero"));
const numero4 = parseInt(prompt("Ingrese el cuarto numero"));

function sumar(){
    return numero1 + numero2 + numero3 + numero4;
}
alert(sumar());
