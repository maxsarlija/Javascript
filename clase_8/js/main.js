function init()
{
    cargarTareas();
    validarCampoTarea();
}

function cargarTareas()
{
   ///console.log(data);
    const nodoTareas = 
        document.getElementById("listaTareas");
        const table = document.createElement("table");
        table.setAttribute("id", "listaTareas");
        table.setAttribute("class", "table table-hover table-bordered");
        nodoTareas.appendChild(table);

        table.innerHTML= `
        <thead>
            <tr>
                <th>N°</th>
                <th>Task</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>`;

       const tbody = document.createElement("tbody"); 

        data.forEach((tarea)=>{
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td>${tarea.fechaLimete}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${tarea.id})">
                    <i class="fa fa-trash"></i>Eliminar Tarea
                </button>

                <button class="btn btn-success btn-sm" onclick="finalizarTarea(${tarea.id})">
                Finalizar Tarea
                    <i class="fa fa-success"></i>
                </button>
            </td>`;
            tbody.appendChild(tr);
        })      
        table.appendChild(tbody);
        nodoTareas.appendChild(table);

}

function validarCampoTarea(){

    const input = document.getElementById("campoNuevaTarea");
}

function sayalert()
{
    const input = document.getElementById("campoNuevaTarea");

    alert(input.value);
}