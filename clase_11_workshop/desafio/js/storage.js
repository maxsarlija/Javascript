function store (){
 //Personal Data
 let nombre = document.getElementById("inputNombre").value;
 let apellido = document.getElementById("inputApellido").value;
 let mail = document.getElementById("inputEmail").value;
 let precio = document.getElementById("inputValor").value
 
 
 //Vehicle Data
 let marca = document.getElementById("marca").value
 let age = document.getElementById("año").value
 let cobertura = document.getElementById("cobertura").value
 
//Storage

    const cliente = {

        //Personal Data
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        precio: precio,
        
        //Vehicle Data
        marca: marca,
        age: age,
        cobertura: cobertura
    }
    window.localStorage.setItem("cliente", JSON.stringify(cliente));

}