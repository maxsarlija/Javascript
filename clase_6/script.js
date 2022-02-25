let numeros = ["Hola","Esto",1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Array completo
console.log(numeros)

//Array con el primer elemento
console.log("Indice 0",numeros[0])


// for(let i=0;i<numeros.length;i++){
//     console.log(numeros[i])
// }


// const cantidad = prompt("Ingrese la cantidad de elementos que desea ver");
// for(let i=0; i<cantidad; i++){
//     numeros.push(i+1);
// }

// console.log(numeros);


// const perros=["bartola","pitbull","labrador","pastor aleman","pitbull"];

// const perroBuscado = prompt("Ingrese el nombre del perro que desea buscar");

// if (perros.indexOf(perroBuscado) != -1){
//     console.log("El perro esta con nosotros");
// }else{
//     console.log("El perro no esta con nosotros");
// }

// console.log(perros);

//Array con elementos
const perros = [
    {nombre:"bartola",dueno: "Ines"},
    {nombre:"pitbull",dueno: "Juan"},
    {nombre:"labrador",dueno: "Maria"},
    {nombre:"pastor aleman",dueno: "Juan"},
    {nombre:"pitbull" ,dueno: "Maria"}];

for(var i=0; i<perros.length; i++){
    console.log(perros[i]);
}

// for(cost perro of perros)
// {
//     console.log(perro.nombre);
// }