var fondoImagen1 = document.querySelector("#fondoimagen1");
fondoImagen1.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage = "url(../imagenes/fondo/fondoarbolesrojos.jpg)";
    document.querySelector("body").style.backgroundPosition= "center";
})

var fondoImagen2 = document.querySelector("#fondoimagen2");
fondoImagen2.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage = "url(../imagenes/fondo/fondobancojuntoarbol.jpg)";
})

var fondoImagen3 = document.querySelector("#fondoimagen3");
fondoImagen3.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage = "url(../imagenes/fondo/fondocaptusnoche.jpg)";
})

var fondoImagen4 = document.querySelector("#fondoimagen4");
fondoImagen4.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage = "url(../imagenes/fondo/fondomarazul.jpg)";
})

var fondoColor1 = document.querySelector("#fondocolor1");
fondoColor1.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#102C54";
    document.querySelector("body").style.backgroundImage = "none";
    document.querySelector(".descripcion").style.backgroundImage = "linear-gradient(white, #FFCB76)";
})

var fondoColor2 = document.querySelector("#fondocolor2");
fondoColor2.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#FFCB76";
    document.querySelector("body").style.backgroundImage = "none";
})

var fondoColor3 = document.querySelector("#fondocolor3");
fondoColor3.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.backgroundImage = "none";
    document.querySelector(".descripcion").style.backgroundImage = "linear-gradient(white, #102C54)";
})

var fondoColor4 = document.querySelector("#fondocolor4");
fondoColor4.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.backgroundImage = "none";
    document.querySelector(".descripcion").style.backgroundImage = "linear-gradient(#51d1f6, #FFCB76, #FFCB76)";
    document.querySelector(".descripcion").style.boxShadow = "-20px 0px 30px #51d1f6";
})

var fondoColor5 = document.querySelector("#fondocolor5");
fondoColor5.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#51d1f6";
    document.querySelector("body").style.backgroundImage = "none";
    document.querySelector(".descripcion").style.backgroundImage = "linear-gradient(white, #FFCB76)";
    document.querySelector(".descripcion").style.boxShadow = "-20px 0px 30px #FFCB76";
})

var letraColor1 = document.querySelector("#letracolor1");
letraColor1.addEventListener("click", () => {
    document.querySelector(".oracion-versiculo").style.color = "#102C54";
})

var letraColor2 = document.querySelector("#letracolor2");
letraColor2.addEventListener("click", () => {
    document.querySelector(".oracion-versiculo").style.color = "#FFCB76";
})

var letraColor3 = document.querySelector("#letracolor3");
letraColor3.addEventListener("click", () => {
    document.querySelector(".oracion-versiculo").style.color = "black";
})

var letraColor4 = document.querySelector("#letracolor4");
letraColor4.addEventListener("click", () => {
    document.querySelector(".oracion-versiculo").style.color = "white";
})

var letraColor5 = document.querySelector("#letracolor5");
letraColor5.addEventListener("click", () => {
    document.querySelector(".oracion-versiculo").style.color = "#51d1f6";
})

var menu = document.querySelector("#menu");
menu.addEventListener("click", function (){
    var abrirMenu = 0;
    var cerrarMenu= 0;
    switch(abrirMenu){
        case 0:
        cerrarMenu = 1;
        document.querySelector("#ajustes").style.display = "block";
        break;
    }
     switch(cerrarMenu){
        case 2:
        abrirMenu= 0;
        document.querySelector("#ajustes").style.display = "none";
        break;
    }
})

var crucifico = document.querySelector("#crucifico");
crucifico.addEventListener("mouseenter", () => {
    document.querySelector("#descripcion1").style.display = "block";
})

var padreNuestro= document.querySelector("#angeljesusorando");
padreNuestro.addEventListener("mouseenter", () => {
    document.querySelector("#descripcion2").style.display = "block";
})