let originalOutputValue = document.getElementById("output-text").innerHTML;

function isValidInput(input) {
  if (/[^a-z\n\s]/.test(input)) {
    alert(
      "Por favor, ingresa solo letras minúsculas sin acentos, números ni símbolos."
    );
    return false;
  }
  return true;
}

function encrypt() {
  let text = document.getElementById("input-text").value;
  if (text == "") {
    alert("Por favor, encripta o desencripta un texto");
    return;
  }

  if (!isValidInput(text)) {
    return;
  }

  let encryptedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("output-text").innerHTML = encryptedText;
}

function decrypt() {
  let text = document.getElementById("input-text").value;
  if (text == "") {
    alert("Por favor, encripta o desencripta un texto");
    return;
  }
  if (!isValidInput(text)) {
    return;
  }

  let decryptedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("output-text").innerHTML = decryptedText;
}

function copyText() {
  let text = document.getElementById("output-text").innerHTML;
  if (text == originalOutputValue) {
    alert("Por favor, encripta o desencripta un texto");
  } else {
    navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles");
  }
}

function clearText() {
  document.getElementById("input-text").value = "";
  document.getElementById("output-text").innerHTML = originalOutputValue;
}
