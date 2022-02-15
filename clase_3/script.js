// let numerousuario = prompt("Ingrese su numero de diente preferido");
// let nombre = prompt("Ingrese su Nombre");
// alert("Bienvenido a la calculadora de Dientes" + " "+ nombre);
// console.log("Agarrar el cepillo");
// console.log("Ponerle crema de dientes");
// console.log("Abrir la boca");

// for(let i=0; i<numerousuario; i++)
// {
//     console.log( "Diente"+" " +  i+ " " + "Cepillado");
// }

//Metodo Tradicional
// if(!isNaN(numerousuario))
// {
//     for(let i=0; i<numerousuario; i++)
//     {
//         console.log( "Diente"+" " +  i+ " " + "Cepillado");
//     }
// }
// else{
//     alert("Ingrese un numero valido, no podemos continuar");
// }


//Metodo Do While
// if(!isNaN(numerousuario))
// {
//     let contador = 0;
//     do
//     {
//         console.log(contador);
//         contador++;
//     }
//     while(contador<numerousuario);

// }

// While con ciclo de escape
// let cad = prompt("Ingresa algo");

// while(cad !== "ESC")
// {
//     cad = prompt("Ingresa algo");
    
// }

//DESAFIO FIBONACCIO

let num = prompt("Ingrese un numero");
let n0 = 1;
let n1 = 1;
if(num===0)
{
    console.log(1);
}
else if (num===1)
{ 
console.log(1);
}
else
{
    for (let i=2; i<=5num; i++)
    {
        let ni = n0 + n1;
        n0 = n1;
        n1 = ni;

    }
        console.log(n1);
    }

    Crear desefio con un algoritmo.