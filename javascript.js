let continuar = document.getElementById("continuar");
let salir = document.getElementById("salir");

let fnSelect = document.querySelector(".confirmacion");
let transicion = document.querySelector(".transicion");

continuar.addEventListener("click", function() {
    document.querySelectorAll(".corazon").forEach(elemento => {
        elemento.style.animation = "acorazon 5s forwards";
    });
    
    setTimeout(function() {
        transicion.style.animation = "aparecer 0.5s ease-out forwards"
        transicion.style.display = "flex";
    }, 3500);
    setTimeout(function() {
        window.location.href = "carta.html";
    }, 4000);
});

continuar.addEventListener("mouseover", function() {
    fnSelect.style.background = "#64ca67";
    fnSelect.style.transform = "translate(60px)";
});

continuar.addEventListener("mouseout", function() {
    fnSelect.style.background = "#ffffff";
    fnSelect.style.transform = "translate(0)";
});

salir.addEventListener("mouseover", function() {
    fnSelect.style.background = "#ff7272";
    fnSelect.style.transform = "translate(-60px)";
});

salir.addEventListener("mouseout", function() {
    fnSelect.style.background = "#ffffff";
    fnSelect.style.transform = "translate(0)";
});

salir.addEventListener("click", function() {
    popupSalirContenido.style.animation = "rebote 0.2s forwards";
    popupSalir.style.display = "flex";
});