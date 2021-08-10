// Calcular o IMC
/*
Tabela IMC:
Abaixo de 17   --------> MUITO ABAIXO DO PESO
Entre 17 e 18.49 --------> ABAIXO DO PESO
Entre 18,5 e 24.99 --------> PESO NORMAL
Entre 25 e 29.99 --------> ACIMA DO PESO

FÓRMULA DO IMC:
 imc = peso / (altura*altura);
*/

var valorPeso;
var valorAltura;
var valorImc;
var resultado;

function calcular() {

    valorPeso = document.getElementById("peso").value;
    valorAltura = document.getElementById("altura").value;

    valorImc = valorPeso / (valorAltura * valorAltura);

    if (valorImc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '</br> Seu resultado foi: ' + valorImc.toFixed(3) + '<h3 style="color: #FF0000"> <br/>Cuidado: você está muito abaixo do peso</h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (valorImc > 17 && valorImc < 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '</br> Seu resultado foi: ' + valorImc.toFixed(3) + '<h3 style="color: #FF0000"> <br/>Cuidado: você está abaixo do peso</h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (valorImc > 18.5 && valorImc < 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '</br> Seu resultado foi: ' + valorImc.toFixed(3) + '<h3> <br/>Ótimo: você está no peso ideal!</h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else if (valorImc > 25 && valorImc < 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '</br> Seu resultado foi: ' + valorImc.toFixed(3) + '<h3> <br/>Atenção: você está acima do peso</h3> <br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    } else {
        return false;
    }

}