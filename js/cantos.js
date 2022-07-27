alert("hola")



var all = [
    {"titulo": "como no creer en dios",
    "src": "../audios/canciones/comonocreerendios.mp3"},
    {"titulo": "enciende una luz",
    "src": "../audios/canciones/enciendeunaluz.mp3"}
]



btnsearch.addEventListener("click", function() {
    var textsearch = document.querySelector("#textsearch");
    const texto = textsearch.value.toLowerCase();
    var btnsearch = document.querySelector("#btnsearch");

    for(let songs of all){
        let titulo = songs.titulo.toLowerCase();
        if(titulo.indexOf(texto) !== -1){
            document.querySelector("#seccionSearch").style.display = "block";
            document.querySelector("#respuesta").style.display = "block";
            document.querySelector("#seccionTodas").style.display = "none";
            document.querySelector("#seccionMasEscuchadas").style.display = "none";
            document.querySelector("#seccionAlavanzas").style.display = "none";
            document.querySelector("#seccionEucaristia").style.display = "none";
            document.querySelector("#seccionMelancolicas").style.display = "none";
        }else{
    document.querySelector("#seccionSearch").style.display = "block";
    document.querySelector("#norespuesta").style.display = "block";
    document.querySelector("#seccionTodas").style.display = "none";
    document.querySelector("#seccionMasEscuchadas").style.display = "none";
    document.querySelector("#seccionAlavanzas").style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";       
        }
    }
})



var seccionTodas = document.querySelector("#todas");

seccionTodas.addEventListener("click", () => {
    document.querySelector("#seccionTodas").style.display = "block";
    document.querySelector("#seccionMasEscuchadas").style.display = "none";
    document.querySelector("#seccionAlavanzas").style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#todas").style.backgroundColor = "salmon";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";

})

var boxtodas = document.querySelector("#seccionTodas");
todas()
function todas(){
    for(var i = 0; i < all.length; i++){
        var div = document.createElement("div");
        div.className = "boxaudio";
        boxtodas.appendChild(div)
 
        var cajaaudio = document.querySelector(".boxaudio");
cajaaudio.addEventListener("click", () => {
    document.querySelector("#seccionReproduciendose .titulo").innerHTML = "hola"
})

        var h2 = document.createElement("h2");
        h2.innerHTML = all[i].titulo;
    h2.style.color = "white";
        div.appendChild(h2);

    }
}


var seccionMasEscuchadas= document.querySelector("#masescuchadas");

seccionMasEscuchadas.addEventListener("click", () => {
    document.querySelector("#seccionMasEscuchadas").style.display = "block";
    document.querySelector("#seccionTodas").style.display = "none";
    document.querySelector("#seccionAlavanzas").style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#masescuchadas").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";
})

var seccionAlavanzas= document.querySelector("#alavanzas");

seccionAlavanzas.addEventListener("click", () => {
    document.querySelector("#seccionAlavanzas").style.display = "block";
    document.querySelector("#seccionTodas").style.display = "none";
    document.querySelector("#seccionMasEscuchadas").style.display = "none";
    document.querySelector("#seccionEucaristia").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";

    document.querySelector("#alavanzas").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#eucaristia").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";

})

var seccionEucaristia= document.querySelector("#eucaristia");

seccionEucaristia.addEventListener("click", () => {
    document.querySelector("#seccionEucaristia").style.display = "block";
    document.querySelector("#seccionTodas").style.display = "none";
    document.querySelector("#seccionMasEscuchadas").style.display = "none";
    document.querySelector("#seccionAlavanzas").style.display = "none";
    document.querySelector("#seccionMelancolicas").style.display = "none";
    document.querySelector("#seccionSearch").style.display = "none";
    
    document.querySelector("#eucaristia").style.backgroundColor = "salmon";
    document.querySelector("#todas").style.backgroundColor = "transparent";
    document.querySelector("#masescuchadas").style.backgroundColor = "transparent";
    document.querySelector("#alavanzas").style.backgroundColor = "transparent";
    document.querySelector("#melancolicas").style.backgroundColor = "transparent";

})

var seccionMelancolicas= document.querySelector("#melancolicas");

seccionMelancolicas.addEventListener("click", () => {
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


