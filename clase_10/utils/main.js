function init()
{
    cargarTareas();
    crearAccionGuardar();
    localStorage.setItem("coder", "valor de coder");
    sessionStorage.setItem("");
    
    
    
}

function cargarTareas()
{
    const nodoTareas = document.querySelector("#divListaTareas");
    nodoTareas.innerHTML="";
    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-hover");
    table.classList.add("table-bordered");
    
    const thr = document.createElement("tr");
    thr.innerHTML = `<thead>
                    <tr><th>No.</th><th>Tarea</th>
                    <th>Fecha LÃ­mite</th>
                    <th>Actions</th>
                    </tr>
                    </thead>`
    
    table.appendChild(thr);
    
    const tbody = document.createElement("tbody");
    
    data.forEach(element=>{
        
        const tr = document.createElement("tr");
        tr.innerHTML=`<td>${element.id}</td>
                      <td>${element.descripcion}</td>
                      <td>${element.fechaLimite}</td>
                      <td>
                        <button class="btn btn-danger">
                            Borrar
                        </button>
                        <button class="btn btn-success">
                            Marcar como Realizada
                        </button></td>`
                      
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    nodoTareas.appendChild(table);
    
}


function crearAccionGuardar()
{
    const btnGuardar = document.querySelector("#guardarTareaBtn");
    
    btnGuardar.addEventListener("click", ()=>{
        
        guardarTarea();
        
    })
}


function guardarTarea()
{
    const valorDescripcion = document.querySelector("#ingresarTareaInput").value;
    
    const valorFecha = document.querySelector("#fechaLimiteInput").value;
    
    if(valorDescripcion.trim()==="" || valorFecha.trim()==="")
        {
            alert("ERROR: Debes Ingresar los datos completos");
        }
    else{
        
        const today = new Date();
        const fechaFormateada = valorFecha.split("-");
        const fechaLimite =  new Date(fechaFormateada[0], fechaFormateada[1]-1, fechaFormateada[2]);
        
        const todayMils = today.getTime();
        const finalDateMiles = fechaLimite.getTime();
        
        if(finalDateMiles<today)
            {
                alert("ERROR: Debes poner una fecha posterior")
            }
        else{
            
            const tarea = {
                
                id:data.length+1,
                descripcion: valorDescripcion,
                fechaLimite: `${fechaFormateada[2]}/${fechaFormateada[1]}/${fechaFormateada[0]}`,
                realizada: false,     
            }   
            data.push(tarea);   
        }
    }
    cargarTareas();
    

}