//saludar();
promesa();


function saludar(){
       
        const nombre = prompt("Introduce tu nombre");
        const nodo = document.querySelector("#bienvenido");
       
        setTimeout(() => {
        nodo.innerHTML = `<h1>Bienvenido, ${nombre}</h1>`;
   }, 1000);
}

function pedirprecio(){
    
    var precio = prompt("Introduce el precio del producto");
    return precio;    

}

function calcularPrecio(){
    var precio = pedirprecio();
    var iva = precio * 0.21;
    var precioFinal = precio + iva;
    return precioFinal;
}

function mostrarPrecio(){
    var precioFinal = calcularPrecio();
    alert("El precio final es de: " + precioFinal);
}


function promesa(){

    const usuarios = [
    {
        
        id:1,
        nombre:"Juan"
    },
    {
        
        id:2,
        nombre:"Pedro"
    },
    {
        
        id:3,
        nombre:"Gomez"
    }
]
    const evento = (res) => new Promise((resolve, reject) => {

        if(res===true)
        {
            resolve("LA PROMESA SE RESOLVIO")
            alert(usuarios[0].nombre);
            alert("LA PROMESA SE RESOLVIO");
        }
        else
        {
            reject("LA PROMESA FALLO")
            alert(usuarios[1].nombre);
            alert("LA PROMESA NO SE RESOLVIO");
        }
    });
    const resuelve = prompt("¿Resuelve la promesa?");

    evento(resuelve)
    .then((res) => console.log(result))
    .catch((err) => console.log(err))
    .finally(() => console.log("FIN DE LA PROMESA"));

}