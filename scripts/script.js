//variables de la pagina
var textoOg = document.getElementById("textoOriginal");
var imprRes = document.getElementById("resultado");
var ejemplo = document.getElementById("ejemplo");
var vaciar = document.getElementById("resulta2");
var sacarImagen = document.getElementById("img");
var copyText = document.getElementById("copyText");
var copiado = [];

//Event listener que se asegura que si tocas enter mientras en el input se te encripta el texto
document
  .querySelector("#textoOriginal")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      return encriptar();
    }
  });

//Funcion que cambia la pagina para esconder las imagenes e imprimir el texto encriptado
function imprimir(contenido) {
  sacarImagen.style.display = "none";
  copyText.style.display = "block";
  ejemplo.style.display = "none";
  imprRes.innerHTML = contenido;
  vaciar.innerHTML = "";
}

//Funcion que copia el texto encriptado o desencriptado
function copiarTexto() {
  var modal = document.getElementById("modalCopia");
  var textoPegado = document.querySelector("#textoCopiado");

  navigator.clipboard.writeText(copiado);
  if (copiado.length > 0) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
  textoPegado.innerHTML =
    "El siguiente texto se copió en tu clipboard: " +
    "<strong>" +
    copiado +
    "</strong>";
}

function modalClose() {
  var modal = document.getElementById("modalCopia");
  modal.style.display = "none";
}

function encriptar() {
  var textoBase = textoOg.value;
  var nuevoTexto = [];

  for (i = 0; i < textoBase.length; i++) {
    if (textoBase[i] == "a" || textoBase[i] == "A") {
      nuevoTexto[i] = "ai";
    } else if (textoBase[i] == "e" || textoBase[i] == "E") {
      nuevoTexto[i] = "enter";
    } else if (textoBase[i] == "i" || textoBase[i] == "I") {
      nuevoTexto[i] = "imes";
    } else if (textoBase[i] == "o" || textoBase[i] == "O") {
      nuevoTexto[i] = "ober";
    } else if (textoBase[i] == "u" || textoBase[i] == "O") {
      nuevoTexto[i] = "ufat";
    } else {
      nuevoTexto[i] = textoBase[i];
    }
  }
  var nuevoStr = nuevoTexto.join("");
  imprimir(nuevoStr);

  if (copiado.length > 0) {
    copiado.length = 0;
    copiado.push(nuevoStr);
  } else {
    copiado.push(nuevoStr);
  }
}

function desencriptar() {
  var texto = textoOg.value;

  do {
    var texto = textoOg.value.replace(/ai/g, "a");
    var texto = textoOg.value.replace(/enter/g, "e");
    var texto = textoOg.value.replace(/imes/g, "i");
    var texto = textoOg.value.replace(/ober/g, "o");
    var texto = textoOg.value.replace(/ufat/g, "u");
  } while (
    texto.includes("ai") ||
    texto.includes("enter") ||
    texto.includes("imes") ||
    texto.includes("ober") ||
    texto.includes("ufat")
  );
  {
    imprimir(texto);
    if (copiado.length > 0) {
      copiado.length = 0;
      copiado.push(texto);
    } else {
      copiado.push(texto);
    }
  }
}
