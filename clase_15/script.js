callAPI();
mostrarInfo(data);
function callAPI (){

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url).
    then((response) => response.json ()).
    then((json)=> {
        mostrarInfo(json);
    })};

function mostrarInfo(data)
{
    const nodo = document.querySelector("#resultados");

    data.forEach((element) => {
        let li = document.createElement("li");
        li.innerHTML = `id: ${element.id} - title: ${element.title} - ${element.body}`;
        nodo.appendChild(li);
    })};