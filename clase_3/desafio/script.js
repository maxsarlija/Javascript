let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("Ingrese su edad");
let contadormensaje = 0 ;

alert("Bienvenido" + " "+ nombre + " " + apellido);
alert("Tu edad es:" + " " + edad);
alert("Voy a mostrarte este mensaje la cantidad de veces que tu edad");

while( contadormensaje <= edad)
{
    
    alert("Cantidad de veces" + "" + contadormensaje);
    contadormensaje++;
    
}