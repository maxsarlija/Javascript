callAPI();
mostrarInfo(data);

function callAPI (){

    let url = "data/basic.json";
    //const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url).
    then((response) => response.json ()).
    then((json)=> {
        mostrarInfo(json);
    })};

function mostrarInfo(data)
{
    const nodo = document.querySelector("#json");

    data.forEach((element) => {
        let li = document.createElement("h3");
        li.innerHTML = `
        <h3>Marca: ${element.title}</h3>
        ID: ${element.id} <br>
        Modelo: ${element.name} <br> 
        Detalle: ${element.description}<br>
        Precio: ${element.price}
         `;
        nodo.appendChild(li);
    })};
