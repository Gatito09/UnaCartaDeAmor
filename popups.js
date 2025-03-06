let popupSalir = document.getElementById("popupSalir");
let popupSalirContenido = document.getElementById("contenidoSalir");
let btnPSalir = document.getElementById("ssalir");
let btnPContinuar = document.getElementById("scontinuar");

btnPContinuar.addEventListener("click", function() {
    popupSalirContenido.style.animation = "desaparecer 0.2s forwards";
    setTimeout(function() {
        popupSalir.style.display = "none";
    }, 300);
});

btnPSalir.addEventListener("click", function() {
    window.location.href = "https://www.google.com";
});

document.addEventListener("DOMContentLoaded", function () {
    const dropZone = document.getElementById("dropZone");
    const mensaje = document.getElementById("mensaje");
    const popCargarTexto = document.querySelector(".cargarTexto");

    let contenidoGuardado = sessionStorage.getItem("contenidoArchivo");
    if (!contenidoGuardado) {
        popCargarTexto.style.display = "flex";
    }

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.style.borderColor = "#2ecc71";
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.style.borderColor = "#3498db";
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.style.borderColor = "#3498db";

        const archivo = event.dataTransfer.files[0];

        if (archivo) {
            if (archivo.name.endsWith(".love")) {
                mensaje.textContent = `Cargando: ${archivo.name}`;

                const lector = new FileReader();
                lector.onload = function (e) {
                    contenidoArchivo = e.target.result;
                    console.log("Contenido del archivo:", contenidoArchivo);

                    sessionStorage.setItem("contenidoArchivo", contenidoArchivo);

                    mensaje.textContent = "Archivo cargado correctamente.";

                    setTimeout(function() {
                        popCargarTexto.style.animation = "desaparecer 0.2s forwards";
                        setTimeout(function() {
                            popCargarTexto.style.display = "none";
                        }, 200);
                    }, 2000);

                    contenidoCarta.innerHTML = contenidoArchivo;
                };
                lector.readAsText(archivo);
            } else {
                mensaje.textContent = "Solo se permiten archivos .love";
            }
        }
    });
});