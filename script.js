const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
const seccionTexto1 = document.querySelector(".texto1");
const seccionTexto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".copiar");

// Regular expression to validate only lowercase letters
const letrasInvalidas = /[A-Z]/;

function validar(texto) {
    if (letrasInvalidas.test(texto)) {
        alert("Texto inválido. Solo se permiten letras minúsculas.");
        return false;
    }
    return true;
}

const encriptarMap = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
const desencriptarMap = {
    ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u"
};

function encriptar() {
    const texto = entradaTexto.value;
    if (!validar(texto)) {
        return;
    }
    const salida = texto.replace(/[aeiou]/g, match => encriptarMap[match]);
    actualizarSalida(salida);
}

function desencriptar() {
    const texto = entradaTexto.value;
    if (!validar(texto)) {
        return;
    }
    const salida = texto.replace(/ai|enter|imes|ober|ufat/g, match => desencriptarMap[match]);
    actualizarSalida(salida);
}

function actualizarSalida(salida) {
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "inline";
}

function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
    btnCopiar.style.display = "none";
}

function copiar() {
    navigator.clipboard.writeText(salidaTexto.value);
    const anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
