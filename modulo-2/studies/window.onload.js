window.onload = function initPage() {
    let elemento = document.getElementById("contador");
    let contador = 0;

    setInterval(() => elemento.innerHTML = contador++, 1000);
}


