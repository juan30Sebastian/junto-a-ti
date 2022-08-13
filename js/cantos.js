alert("hola")

var seccionTodas = document.querySelector("#seccionTodas");
var liTodas = document.querySelector("#todas");
var seccionMasEscuchadas = document.querySelector("#seccionMasEscuchadas");
var liMasEscuchadas = document.querySelector("#masescuchadas");
var seccionAlavanzas = document.querySelector("#seccionAlavanzas");
var liAlavanzas = document.querySelector("#alavanzas");
var seccionEucaristia = document.querySelector("#seccionEucaristia");
var liEucaristia = document.querySelector("#eucaristia");
var seccionMelancolicas = document.querySelector("#seccionMelancolicas");
var liMelancolicas = document.querySelector("#melancolicas");


var btnsearch = document.querySelector("#btnsearch");
var textsearch = document.querySelector("#textsearch");
const texto = textsearch.value.toLowerCase();

/**/

var all = [
    {"id": "0001",    
    "title": "como no creer en dios",
    "audio": "../audios/canciones/comonocreerendios.mp3"},
    {"id": "0002",
        "title": "enciende una luz",
    "audio": "../audios/canciones/enciendeunaluz.mp3"}
]

var tituloReproduciendose = document.querySelector(".tituloreproduciendose");
var audio = document.querySelector("#audioreproduciendose")
audio.src = all[1].audio




/* seccion todas del menu de navegacion */

liTodas.addEventListener("click", () => {
    seccionTodas.style.display = "block";
    seccionMasEscuchadas.style.display = "none";
    seccionAlavanzas.style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#todas").style.backgroundColor = "salmon";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";
});

/* canciones todas*/


actualizarTodas()
function actualizarTodas(){    

    for(let i = 0; i <all.length; i++){
        
        let boxAudioTodas = document.createElement("div");
        boxAudioTodas.setAttribute = all[i].id;
        boxAudioTodas.className = "boxaudio";
        seccionTodas.appendChild(boxAudioTodas);
        let tituloAudioTodas = document.createElement("h2");
        boxAudioTodas.appendChild(tituloAudioTodas);
        tituloAudioTodas.innerHTML = all[i].title;
    
    
    }
}


/* seccion mas escuchadas del menu de navegacion */

liMasEscuchadas.addEventListener("click", () => {
    seccionMasEscuchadas.style.display = "block";
    seccionTodas.style.display = "none";
    seccionAlavanzas.style.display = "none";
    seccionEucaristia.style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#masescuchadas").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";
})

/* seccion alavanzas del menu de navegacion */

liAlavanzas.addEventListener("click", () => {
    seccionAlavanzas.style.display = "block";
    seccionTodas.style.display = "none";
    seccionMasEscuchadas.style.display = "none";
    seccionEucaristia.style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#alavanzas").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";

})

/* seccion eucaristia del menu de navegacion */

liEucaristia.addEventListener("click", () => {
    seccionEucaristia.style.display = "block";
    seccionTodas.style.display = "none";
    seccionMasEscuchadas.style.display = "none";
    seccionAlavanzas.style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";
    
    document.querySelector("#eucaristia").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";

})

/* seccion melancolicas del menu de navegacion */

liMelancolicas.addEventListener("click", () => {
    document.querySelector("#seccionMelancolicas").style.display = "block";
    document.querySelector("#seccionTodas").style.display = "none";
    document.querySelector("#seccionMasEscuchadas").style.display = "none";
    document.querySelector("#seccionAlavanzas").style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";
    
    document.querySelector("#melancolicas").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
})


btnsearch.addEventListener("click", function() {

    for(let songs of all){
        let titulo = songs.titulo.toLowerCase();
        if(titulo.indexOf(texto) !== -1){
            alert("se hallo")

        }           
        }
})

