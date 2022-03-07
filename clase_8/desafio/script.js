function cotizar(){
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let mail = document.getElementById("inputEmail").value;
    //validar input nombre y apellido
    if (nombre == "" || apellido == "") {
        alert("Debe ingresar su nombre y apellido");
        return;
    }
    //marca
    if (document.getElementById("marca").value == "1") {
        costoMarca = 10;
    }
    if (document.getElementById("marca").value == "2") {
        costoMarca = 20;
    }
    if (document.getElementById("marca").value == "3") {
        costoMarca = 30;
    }
    else{
        costoMarca = 0;
    }
    //año segirp
    if (document.getElementById("cobertura").value == "1") {
        costoCobertura = 10;
    }
    if (document.getElementById("cobertura").value == "2") {
        costoCobertura = 20;
    }
    if (document.getElementById("cobertura").value == "3") {
        costoCobertura = 30;
    }
    else{
        costoCobertura = 0;
    }

    if (document.getElementById("año").value >= "2000") {
        costoAño = 20;
    }
    if (document.getElementById("año").value < "2000") {
        costoAño = 30;
    }
    else{
        costoAño = 0;
    }

    let precio = document.getElementById("inputValor").value
    let cotizacion_final = costoMarca + costoCobertura + costoAño + precio;

    //Backup para check via consola 
    console.log(cotizacion);
    //Crea el Value en el input id cotiazcion
    const cotizadorManipulado = 
        document.getElementById("cotizacion");
        cotizacion.value = cotizacion_final;
        cotizacion.setAttribute("class", "active");
    //Show Text Cotizador
        const textCotizador = 
    document.getElementById("cotizadorText");
    cotizadorText.setAttribute("class", "active");

    //Completa el DIV datosEnvios con datos del cliente

    const datosEnviosVat = 
        document.getElementById("datosEnvio");
        const label = document.createElement("label");
        datosEnviosVat.appendChild(label);

        label.innerHTML= `
        Hola ${nombre} ${apellido}, <br> Enviamos tu cotizacion a: ${mail}, Muchas Gracias!`;

        
    }