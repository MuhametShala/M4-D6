const endpoint= "https://jsonplaceholder.typicode.com/users";

const HTMLbody= document.querySelector("#main");//collego il mio body a js
const tableBody= document.querySelector("#tableBody");//catturo il corpo della mia tabella
const dropDownBtn= document.querySelector("#dropdown");//catturo il dropdown button
const searchInput= document.querySelector("#input");//catturo la search input

const originalJson= [];// il mio json originale array vuoto da pushare dentro con i valori ricercati


//funzione per agganciare l'endpoint async/await
async function getUsersJson() {
    try {
        const response= await fetch(endpoint);
        let data= await response.json();
        showUsersInfo(data);//in un secondo momento richiamo qui la funzione che mi fa apparire tutto a schermo
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

//funzione che cattura pezzo x pezzo i componenti della tabella che verrà richiamato sopra a riga 16
function showUsersInfo(data) {
    data.forEach((user) => {//ciclo il mio array per far si che trovi ciò che richiamerò sotto
        originalJson.push(user);
        
        //creo delle variabili che mi inglobino i pezzi che comporranno la tabella
        const userId= user.id;
        const userName= user.name;
        const userEmail= user.email;
        const userUsername= user.username;
        const userPhone= user.phone;
        const userWebsite= user.website;
        // queste variabili richiamano pezzi specifici dell'array li trovo guardando in console con ispeziona


        //traccio la mia row dove costruirò la tabella dove appenderò gli elementi sotto
        let tBodyRow= document.createElement("tr");

        let tBodyId= document.createElement("th");//la head della tabella secondo bootstrap
        tBodyId.setAttribute("scope", "row");
        tBodyId.innerHTML= userId;

        let tBodyName= document.createElement("td");
        tBodyName.classList.add("tBodyName");
        tBodyName.innerHTML= userName;

        let tBodyEmail = document.createElement("td");
        tBodyEmail.classList.add("tBodyEmail");
        tBodyEmail.innerHTML= `<a href="#">${userEmail}</a>`;

        let tBodyUsername = document.createElement("td");
        tBodyUsername.classList.add("tBodyUsername");
        tBodyUsername.innerHTML= userUsername;

        let tBodyPhone = document.createElement("td");
        tBodyPhone.classList.add("tBodyPhone");
        tBodyPhone.innerHTML= userPhone;

        let tBodyWebsite = document.createElement("td");
        tBodyWebsite.classList.add("tBodyWebsite");
        tBodyWebsite.innerHTML= `<a href="#">${userWebsite}</a>`;

        //appendo alla row così si mette tutto in fila 
        tBodyRow.append(
            tBodyId,
            tBodyName,
            tBodyEmail,
            tBodyUsername,
            tBodyPhone,
            tBodyWebsite
        );
            //appendo infine il tutto al body della mia tabella 
        tableBody.append(tBodyRow);
    });
}

getUsersJson();

//devo collegare il dropdown menu alle specifiche sezioni e la ricerca che filtra 

