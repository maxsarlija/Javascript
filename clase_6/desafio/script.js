//Tenemos array de objetos con precio y cantidad
//Queremos saber el total de la compra
//Queremos saber la cantidad de productos que se compran por marca
//Queremos saber la cantidad de productos comprados

class Auto {
    constructor(marca, modelo, precio, cantidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cantidad = cantidad;
    }


}


let autos = [];
let estadoCarga = "si";
function agregarAuto() {
    while ( estadoCarga !== "no"){
    let marca = prompt("Ingrese la marca");
    let modelo = prompt("Ingrese el modelo");
    let precio = prompt("Ingrese el precio");
    let cantidad = prompt("Ingrese la cantidad");

    let auto = new Auto(marca, modelo, precio, cantidad);
    autos.push(auto);
    estadoCarga = prompt("Desea agregar otro auto? (si/no)");
}
alert("Se han agregado los autos");
}


function listarAutos(){
    for(let i=0;i<autos.length;i++){
        console.log(
                    autos[i].marca,
                    autos[i].modelo,
                    autos[i].precio,
                    autos[i].cantidad,
            );
    }
}

function cotizar(){
    let costoSeguro = 0;
    for(let i=0;i<autos.length;i++){
        // costoSeguro += autos[i].precio * autos[i].cantidad;
        if(autos[i].precio <= 1000){
            costoSeguro = autos[i].cantidad * autos[i].precio * 10;
        }
        if(autos[i].precio >= 1000){
            costoSeguro = autos[i].cantidad * autos[i].precio * 100;
        }
        if(autos.length === 0){
            alert("No hay autos para cotizar");
        }
        console.log(
            "Marca:" + " "+ autos[i].marca,
            "Cantidad:"+ " " + autos[i].cantidad,
            "Costo De Seguro:" + costoSeguro*autos[i].cantidad,
        );}
    }
    
agregarAuto();
listarAutos();
cotizar();