alert("hola")

function menuOnclick(){
    document.querySelector("#navigation-principal").style.display = "block";
}

var logoMenu = document.querySelector("#logo-menu");
logoMenu.addEventListener("click", () => {
    document.querySelector("#navigation").style.display = "block"
})

var logoMenu = document.querySelector("#logo-menu");
logoMenu.addEventListener("mouseleave", () => {
    document.querySelector("#navigation").style.display = "none"
})