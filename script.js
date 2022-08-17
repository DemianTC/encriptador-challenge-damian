
var remplazarPalabra = "";

var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var seccion2 = document.querySelector(".seccion2");

botonEncriptar.onclick = encriptarResultado;
botonDesencriptar.onclick = desencriptarResultado;
botonCopiar.onclick = copyToClipBoard;


function ocultarFrente() {
    containerDetective.classList.add("ocultar");
    containerTitulo.classList.add("ocultar");
    containerTexto.classList.add("ocultar");
}

function textoObtenido() {
    
    let areaTexto = document.querySelector(".area-texto");
    return areaTexto.value;
}


function encriptarTexto(mensaje) {
    
    let texto = mensaje;
   
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
             remplazarPalabra = remplazarPalabra + "ai"
        }
        else if (texto[i] == "e") {
            remplazarPalabra = remplazarPalabra + "enter"
        }
        else if (texto[i] == "i") {
            remplazarPalabra = remplazarPalabra + "imes"
        }
        else if (texto[i] == "o") {
            remplazarPalabra = remplazarPalabra + "ober"
        }
        else if (texto[i] == "u") {
            remplazarPalabra = remplazarPalabra + "ufat"
        }
        else {
            remplazarPalabra = remplazarPalabra + texto[i]; 
        }
    }

    return remplazarPalabra;
}


function desencriptarTexto(mensaje) {
    
    titulo3.classList.add("ocultar");
    let texto = mensaje;
   
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            remplazarPalabra = remplazarPalabra + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            remplazarPalabra = remplazarPalabra + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            remplazarPalabra = remplazarPalabra + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            remplazarPalabra = remplazarPalabra + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            remplazarPalabra = remplazarPalabra + "u"
            i = i + 3;
        }
        else {
            remplazarPalabra = remplazarPalabra + texto[i]; 
        }
    }

    return remplazarPalabra;
   
}



function encriptarResultado() {
    ocultarFrente();
    let remplazarPalabra = textoObtenido();
    resultadoFinal.textContent = encriptarTexto(remplazarPalabra); 
}


function desencriptarResultado() {
    ocultarFrente();
    let remplazarPalabra = textoObtenido();
    resultadoFinal.textContent = desencriptarTexto(remplazarPalabra);

}

function copyToClipBoard() {

    let content = document.getElementById('textArea');
    
    content.select();
    document.execCommand('copy');

    
    location.reload();
}

var titulo3 = document.querySelector(".msj-3")
var containerDetective = document.querySelector(".container-detective");
var containerTitulo = document.querySelector(".container-titulo");
var containerTexto = document.querySelector(".container-texto")
var resultadoFinal = document.querySelector(".texto-resultado");

