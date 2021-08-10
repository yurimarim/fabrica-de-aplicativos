
const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];


console.log('Listando todos Produtos: ' + produtos);


// Mostrando quantos produtos tem na lista
console.log('Quantidade Produtos: ' + produtos.length);


// Tirando produto Mouse da lista e retornando apenas os que sobraram.
/*
o filter vai percorrer toda sua lista de ARRAY passando em item por item para satisfazer a condiçao que passar no caso eu chamei de p mas poderia ter chamado de item

 produtos.filter(item => item  !== 'Mouse')
Ou seja vai passar e método array verificando se o item ali dentro é diferente de Mouse, e vai retornar nesse console todos os itens que sao diferentes de mouse. 
( "item", ou até mesmo "p" é apenas o nome do parâmetro que chamei para ter acesso ao array enquanto ele está passando pelo array de produtos )
Syntax de funçao anonima, exemplo () => {} Ou seja como recebe o p nessa funçao entao pode ser dessa forma (p) => p !== 'Mouse'   mas com é apenas 1 parametro entao podemos tirar os () ficando: p => p !== 'Mouse'
*/
console.log('Tirando produto Mouse: ' + produtos.filter(p => p !== 'Mouse'));



// Procurando algum determinado produto na lista:
const findProduto = produtos.find(p => p === 'Computador');

if (findProduto) {
	console.log(`Correto!! existe ${findProduto} na sua lista!`)
} else {
	console.log('Parece que esse produto não existe');
}

// Removendo o segundo item da lista
produtos.splice(1, 1)
console.log('Meus Produtos: ' + produtos)

// Ordenando os numeros
const numeros = [1, 3, 5, 7, 0, 9];

console.log('Numeros Ordenados: ' + numeros.sort());

// Removendo primeiro item desta lista
console.log('Item removido: ' + numeros.shift());

// Invertendo ordem da lista
console.log('Nova ordem: ' + numeros.reverse())

// Adicionando um novo numero na lista
numeros.push(8);
console.log(numeros);

// Dia de hoje
let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);