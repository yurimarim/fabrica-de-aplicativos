// DESAFIO JAVASCRIPT

// 1. Lista de Produtos
let produtos = [
    "Computador",
    "Telefone",
    "Mouse",
    "Teclado"
];

// 2. Exibindo produtos E quantidade de produtos na Lista.
console.log(`Existe ${produtos.length} produtos na lista.`);
console.log(produtos);

// 3. Retirar o produto Mouse da lista e retorne no console a lista com os produtos restantes.

// console.log(produtos.indexOf("Mouse")); // produtos[2] = "Mouse"
function removerElementoArray(posicaoArray) {

    if (produtos.indexOf(produtos[posicaoArray]) >= 0) {
        // console.log(`O produto ${produtos[posicaoArray]} está na lista.`);
        produtos.splice(posicaoArray, 1);
        console.log(`Existe ${produtos.length} produtos na lista.`);
        return console.log(produtos);
    } else {
        console.log('Produto não foi encontrado na lista!');
    }

};
removerElementoArray(2);

// 4. Faça uma busca na lista, busque Computador, caso exista, exiba um console falando que o produto
// existe e mostre tambem o nome do produto, caos não exista mostre uma mensagem avisando que o produto
// não foi encontrado 
// console.log(produtos.indexOf('Computador')); // 0

function verificarProduto(posicaoArray) {

    if (produtos.indexOf(produtos[posicaoArray]) >= 0) {
        console.log(`Produto: ${produtos[posicaoArray]}, encontrado na lista.`);
    } else {
        console.log(`Produto: ${produtos[posicaoArray]}, não encontrado na lista. Por favor, verifique outro produto.`);
    }
};
verificarProduto(0);

removerElementoArray(2);

let listaNumeros = [1, 3, 5, 7, 0, 9];
// Ordenar números
console.log('Números ordenados: ' + listaNumeros.sort());

// Retire o primeiro número da lista:
listaNumeros.shift();
console.log('Números ordenados: ' + listaNumeros.sort());
// Inverter toda a ordem da lista - reverse
console.log(listaNumeros.reverse());

// seperar - split
let data = '14/06/2021';
const [dia, mes, ano] = data.split('/');

console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);