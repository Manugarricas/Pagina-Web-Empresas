const tel = document.getElementById("tel");
let mostrarTelef = false;
tel.addEventListener("click", mostrarTel)

function mostrarTel() {
    if (!mostrarTelef) {
        tel.innerText = "666-777-888-1";
        mostrarTelef = true;
    }
    else if (mostrarTelef) {
        tel.innerText = "Telefono";
        mostrarTelef = false;
    }
}