// const numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach( (num) => {
//     console.log(num);
// });

// const cursos = [
//     {nombre: 'Javascript', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'React', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'Javascript', duracion: '2 semanas', valor: '$5'},
//     ];

// const resultado = cursos.find((el) => el.nombre === "Javascript");
// const resultado2 = cursos.find((el) => el.nombre === "React");
// const resultado3 = cursos.find((el) => el.valor === "$5");

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);


// const cursos = [
//     {nombre: 'Javascript', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'React', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'Javascript', duracion: '2 semanas', valor: '$5'},
//     {nombre: 'Caca', duracion: '2 semanas', valor: '$5'},
//     ];

// const resultado = cursos.filter((el) => el.nombre.includes('Java'));
// const resultado2 = cursos.filter((el) => el.nombre.endsWith('a'));
// const resultado3 = cursos.filter((el) => el.valor < 7);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

// const cursos = [
//     {nombre: 'Javascript', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'React', duracion: '4 semanas', valor: '$10'},
//     {nombre: 'Javascript', duracion: '2 semanas', valor: '$5'},
//     {nombre: 'Caca', duracion: '2 semanas', valor: '$5'},
//     ];

// const resultado = cursos.map((el) => el.nombre);
// const resultado2 = cursos.map((el) => el.duracion);
// const resultado3 = cursos.map((el) => el.valor);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);



// const cursos = [
//     {nombre: 'Javascript', duracion: '4 semanas', valor: '10'},
//     {nombre: 'React', duracion: '4 semanas', valor: '10'},
//     {nombre: 'Javascript', duracion: '2 semanas', valor: '5'},
//     {nombre: 'Caca', duracion: '2 semanas', valor: '5'},
//     ];

// const resultado = cursos.map((el) => el.nombre);
// const resultado2 = cursos.map((el) => el.duracion);
// const resultado3 = cursos.map((el) => {
//     return {
//         nombre: el.nombre,
//         valor: el.valor * 2
//     }
// });

// console.log(resultado3);

// const cursos = [
//     {nombre: 'Javascript', duracion: '4 semanas', valor: '10'},
//     {nombre: 'React', duracion: '4 semanas', valor: '10'},
//     {nombre: 'Javascript', duracion: '2 semanas', valor: '5'},
//     {nombre: 'Caca', duracion: '2 semanas', valor: '5'},
//     ];

// const resultado = cursos.reduce((acc, el) => acc + el.valor, 0);


// console.log(resultado);


// const productos = [{id: 1, nombre: 'Camisa', precio: 50},
//                    {id: 2, nombre: 'Pantalon', precio: 100},
//                    {id: 3, nombre: 'Billetera', precio: 1000},
//                     ];
// const buscando = productos.find(producto => producto.id === 2);
// console.log(buscando);

// const existe = productos.some(producto => producto.id === 2);
// console.log(existe);

// const baratos = productos.filter(producto => producto.precio <= 100);
// console.log(baratos);
// const listaNombre = productos.map(producto => producto.nombre);
// console.log(listaNombre);


// const generadorNumero = () => {
//     return Math.round(Math.random() * 101);
// }
// console.log( generadorNumero());

// console.log(new Date());

const hoy = new Date("December 17, 1995 03:24:00");

console.log(hoy.getFullYear());
console.log(hoy.getTime());