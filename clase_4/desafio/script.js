let interes  = 10;

const nombre = prompt.("Ingrese su nombre");
alert("Bienvenido a la calculadora de Cuotas" + " " + nombre);
const deuda = prompt("Ingrese su deuda");
let numcuotas = prompt("Su saldo es de" + " " +  deuda +" " +  "Ingrese el numero de cuotas a utilizar hasta 6 sin interes");

if (numcuotas>6){

    let calculado = numcuotas/deuda;
    calculado = deuda*interes
    alert("Su deuda es de" + " " + deuda);
    alert("Se abona en" + numcuotas + " " + "por cada cuota");
    alert("El interes a pagar es de" + " " + calculado + " " + "en total");
}
else{

    let calculado = numcuotas/deuda;
    
    alert("Su deuda es de" + " " + deuda);
    alert("Se abona en" + " "+ numcuotas + " " + "sin interes de" + " " + deuda/numcuotas + " " + "por cada cuota");
}

