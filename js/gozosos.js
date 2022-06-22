var misterioGozosoPrimero= document.querySelector("#misteriogozosoprimero");
misterioGozosoPrimero.addEventListener("mouseenter", () => {
    document.querySelector(".titulomisterio").style.display = "block"
    document.querySelector(".titulomisterio").innerHTML = "Primer misterio: Anunciación del Arcángel San Gabriel a la Birgen María"
})

var btn = document.querySelector("#misteriogozosoprimero");
btn.addEventListener("mouseleave", () => {
    document.querySelector(".titulomisterio").innerHTML = "Dios nos ama"
})

var misterioGozosoSegundo= document.querySelector("#misteriogozososegundo");
misterioGozosoSegundo.addEventListener("mouseenter", () => {
    document.querySelector(".titulomisterio").style.display = "block"
    document.querySelector(".titulomisterio").innerHTML = "Segundo misterio: Visita de la Virgen María a su prima Santa Isabel"
})
var btn = document.querySelector("#misteriogozososegundo");
btn.addEventListener("mouseleave", () => {
    document.querySelector(".titulomisterio").innerHTML = "Dios perdona nuestros pecados"
})

var misterioGozosoTercero= document.querySelector("#misteriogozosotercero");
misterioGozosoTercero.addEventListener("mouseenter", () => {
    document.querySelector(".titulomisterio").style.display = "block"
    document.querySelector(".titulomisterio").innerHTML = "Tercer misterio: El nacimiento del niño Jesús en Belén"
})
var btn = document.querySelector("#misteriogozosotercero");
btn.addEventListener("mouseleave", () => {
    document.querySelector(".titulomisterio").innerHTML = "Eres perfecto no te critiques"
})

var misterioGozosoCuarto= document.querySelector("#misteriogozosocuarto");
misterioGozosoCuarto.addEventListener("mouseenter", () => {
    document.querySelector(".titulomisterio").style.display = "block"
    document.querySelector(".titulomisterio").innerHTML = "Cuarto misterio: Presentación del niño Jesús en el templo"
})
var btn = document.querySelector("#misteriogozosocuarto");
btn.addEventListener("mouseleave", () => {
    document.querySelector(".titulomisterio").innerHTML = "somos iguales ante Dioss"
})

var misterioGozosoQuinto= document.querySelector("#misteriogozosoquinto");
misterioGozosoQuinto.addEventListener("mouseenter", () => {
    document.querySelector(".titulomisterio").style.display = "block"
    document.querySelector(".titulomisterio").innerHTML = "Quinto misterio: Pérdida y hallazgo del niño en el templo"
})
var btn = document.querySelector("#misteriogozosoquinto");
btn.addEventListener("mouseleave", () => {
    document.querySelector(".titulomisterio").innerHTML = "perdona mis pecadosp"
})





var graficoCruz = document.querySelector("#circulo1");
graficoCruz.addEventListener("click", () => {
    document.querySelector("#circulo1").style.backgroundColor = "#FFCB76"
    document.querySelector("#tituloversiculo1").innerHTML = "Señal de la cruz"
    document.querySelector("#versiculo1").innerHTML = "En el nombre del padre del hijo y del espíritu santo.Amén"
    
    document.querySelector("#tituloversiculo2").innerHTML = "PADRE NUESTRO"
    document.querySelector("#versiculo2").innerHTML = "Padre nuestro que estás en el cielo santificado se ha tu nombre venga a nosotros tu reino y no nos dejes caer en tentación y libranos del mal. Amén"
})

var circulo2= document.querySelector("#circulo2");
circulo2.addEventListener("click", () => {
    document.querySelector("#circulo2").style.backgroundColor = "#FFCB76"
    document.querySelector("#tituloversiculo1").innerHTML = "PADRE NUESTRO"
    document.querySelector("#versiculo1").innerHTML = "Padre nuestro que estás en el cielo santificado se ha tu nombre venga a nosotros tu reino y no nos dejes caer en tentación y libranos del mal. Amén"
})