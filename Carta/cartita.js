let contenidoCarta = document.getElementById("contenidoCarta")
let popupFinalizar = document.getElementById("popup")
let popupFinalizarContenido = document.getElementById("contenidoFinalizado")

retroceder.addEventListener("click", function() {
    window.location.href = "index.html";
    setTimeout(function() {
        transicion.style.animation = "desvanecer 0.5s ease-out forwards";
    }, 500);
    document.querySelectorAll(".corazon").forEach(elemento => {
        elemento.style.animation = "bcorazon 5s forwards";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let contenidoGuardado = sessionStorage.getItem("contenidoArchivo");
    contenidoCarta.innerHTML = contenidoGuardado;

    setTimeout(function() {
        document.body.style.transition = "500ms";
        document.body.style.opacity = "100%";
    }, 500);
});

document.getElementById("btnFinalizar").addEventListener("click", function() {
    popupFinalizarContenido.style.animation = "rebote 0.2s forwards";
    popupFinalizar.style.display = "flex";
});

document.getElementById("cerrarPopup").addEventListener("click", function() {
    popupFinalizarContenido.style.animation = "desaparecer 0.2s forwards";
    setTimeout(function() {
        popupFinalizar.style.display = "none";
    }, 200)
});