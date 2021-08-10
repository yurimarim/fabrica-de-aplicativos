// 1 - Criar o Balão
// 2 - Estourar o Balão
// 3 - Carregar o jogo
var total = 0;

function criarBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    // Math.floor - numero inteiro - math.random * 5
    // o * 5 siginifica q é de 0 até 5
    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    // <div class ="balao" style="left:30px; top:60px;"></div>
    balao.setAttribute("style", "left:" + x + "px;top:" + y + "px");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);

}

function estourar(objeto) {
    document.body.removeChild(objeto);

    total++;  // total = total + 1;

    var score = document.getElementById('total');
    score.innerHTML = "Balões estourados: " + total;

}

function carregarJogo() {
    setInterval(criarBalao, 1000); // 1000 ms = 1 s
}