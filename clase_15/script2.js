 // Haga un llamado a la API de Harry Potter
    // Separe los personajes, por casas (Gryffindor, Ravenclaw, Slytherin, Hufflepuff)
    // Cree un botón para cada casa
    // Cree un evento que liste los personajes, según la casa 
    // (Solo muestre personajes con foto)

    let url = 'http://hp-api.herokuapp.com/api/characters';
    
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        mostrarBotones(data);
    });


    function mostrarBotones(data){
        
        let g = data.filter(element=>element.house==='Gryffindor' && element.image!=="");
        let r = data.filter(element=>element.house==='Ravenclaw' && element.image!=="");
        let h = data.filter(element=>element.house==='Hufflepuff' && element.image!=="");
        let s = data.filter(element=>element.house==='Slytherin' && element.image!=="");

        let botonG = document.createElement("button") ;
        botonG.innerHTML="Griffindor";
        botonG.addEventListener("click", ()=>mostrarPersonajes(g));

        document.body.appendChild(botonG);

        let botonR = document.createElement("button") ;
        botonR.innerHTML="Ravenclaw";
        botonR.addEventListener("click", ()=>mostrarPersonajes(r));

        document.body.appendChild(botonR);

        let botonH = document.createElement("button") ;
        botonH.innerHTML="Hufflepuff";
        botonH.addEventListener("click", ()=>mostrarPersonajes(h));

        document.body.appendChild(botonH);

        let botonS = document.createElement("button") ;
        botonS.innerHTML="Slytherin";
        botonS.addEventListener("click", ()=>mostrarPersonajes(s));

        document.body.appendChild(botonS);

    }

    function mostrarPersonajes(personajes)
    {
        const nodo = document.querySelector("#personajes");
        nodo.innerHTML="";
        personajes.forEach(element=>{
            const li = document.createElement("li")
            li.innerHTML=`<img src=${element.image} width="100px" />
                            ${element.name}`;
            nodo.appendChild(li);
            
        })
    }