alert("Hola, Dios")

var windowLoader = document.querySelector(".window-loader");
var header = document.querySelector(".header");
var valorLoader = 0;

var card = document.querySelector(".imagenfondo");
var versiculobiblico = document.querySelector(".versiculobiblico");
var valorFondo = 0;
var imagenCard = document.querySelector(".imagencard");
var titulocard = document.querySelector(".titulocard");

    window.addEventListener("load", () => {
        setInterval(() => {
            valorLoader++;
           switch(valorLoader){
                case 7:    
                windowLoader.style.animation = "mover 5s linear 1"
                header.style.display = "block";
            break;
                case 9:
                windowLoader.style.display = "none";
            breack;
            }
        }, 1000);
})

fondoCard()
function fondoCard(){
    
    setInterval(() => {
        valorFondo++;
        switch(valorFondo){
            case 5:
                card.src = "../imagenes/fondo/iglesias/santuariolaslajas.jpg";
                versiculobiblico.innerHTML = "Santuario De Las Lajas";
                card.style.animationName = "moverfondo"
            break;
            case 10:
                card.src = "../imagenes/fondo/iglesias/catedraldemilan.jpg";
                versiculobiblico.innerHTML = "Catedral De Milán";
                card.style.animationName = "moverfondo";
            break;
            case 15:
                card.src = "../imagenes/fondo/iglesias/vasilicaguadalupana.jpg";
                versiculobiblico.innerHTML = "Vasílica De Guadalupe";
            break;
            case 20:
                card.src = "../imagenes/fondo/iglesias/catedraldesevilla.jpg";
                versiculobiblico.innerHTML = "Catedral De Sevilla";
            break;
            case 25:
                card.src = "../imagenes/fondo/iglesias/catedralliverpool.jpg";
                versiculobiblico.innerHTML = "Catedral De Liverpool";
            break;
            case 30:
                card.src = "../imagenes/fondo/iglesias/vaticano.jpg";
                versiculobiblico.innerHTML = "Vasílica Del Baticano";
            break;
        }

        if(valorFondo == 30){
            valorFondo = 0;
        }
    }, 1000);
}

actualizarMisterio();
function actualizarMisterio(){
    
    setInterval(() => {
        var fecha = new Date();
        const dia = fecha.getDay();
        switch(dia){
            case 0:
                imagenCard.src = "../imagenes/resurrecion.jpg";
                imagenCard.alt = "asunción de jesús a los cielos";
                titulocard.innerHTML = "GLORIOSOS";
            break;
            case 1:
                imagenCard.src = "../imagenes/misterios/anunciacion.jpg";
                imagenCard.alt = "anunciación del arcángel san grabiel";
                titulocard.innerHTML = "GOZOSOS";
            break;
            case 2:
                imagenCard.src = "../imagenes/crucifico.jpg";
                imagenCard.alt = "crucifico";
                titulocard.innerHTML = "DOLOROZOS";
            break;
            case 3:
                imagenCard.src = "../imagenes/resurrecion.jpg";
                imagenCard.alt = "asunción de jesús a los cielos";
                titulocard.innerHTML = "GLORIOSOS";
            break;
            case 4:
                imagenCard.src = "../imagenes/bautismojesus.jpg";
                imagenCard.alt = "bautizmo de jesús";
                titulocard.innerHTML = "LUMINOZOS";
            break;
            case 5:
                imagenCard.src = "../imagenes/crucifico.jpg";
                imagenCard.alt = "crucifico";
                titulocard.innerHTML = "DOLOROZOS";
            break;
            case 6:
                imagenCard.src = "../imagenes/misterios/anunciacion.jpg";
                imagenCard.alt = "anunciación del arcángel san grabiel";
                titulocard.innerHTML = "GOZOSOS";
            break;
        }
    }, 500);
}

