// if executa uma vez se a condição for true;

/*
WHILE = enquanto // 1 condição
x = 0;

while (x < 10) {

    document.write("<br> O valor do x é: " + x);

    // x = x + 1;
    x++;

}

x = 5
*/

// document.write("</br></br></br> O X está valendo: " + x + "</br></br>");

/*
FOR = para // 3 condições // para usar em loops
for (a = 0; a < x; a++) {
    document.write("<br> O valor do x é: " + a);
}
*/

document.write("</br> Escolhe seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca-Cola / 3 - Água gelada </br>");

// SWITCH = bem parecido com IF - não é um laço de repetição - não mt usado
function pedir() {
    x = prompt("O que deseja pedir?");

    switch (x) {

        case "0":
            alert("Você pediu: SORVETE");
            break;
        case "1":
            alert("Você pediu: SUCO");
            break;
        case "2":
            alert("Você pediu: COCA-COLA");
            break;
        case "3":
            alert("Você pediu: ÁGUA GELADA");
            break;
        default:
            alert("Ops, não temos essa opção no cardápio");
            break;

    }
}