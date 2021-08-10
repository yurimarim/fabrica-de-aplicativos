// descontruir objetos, arrays

// SEM DESCONSTRUIR 
// const cliente = {
//     nome: 'Yuri',
//     idade: 20,
//     cidade: 'Maringá'
// }

// const nome = cliente.nome;
// const cidade = cliente.cidade;

// console.log(nome, cidade);

// ____________________________________________________________________________________________________________________________________________

// ____________________________________________________________________________________________________________________________________________

// ____________________________________________________________________________________________________________________________________________

// // DESCONTRUINDO 
// const cliente = {
//     nome: 'Yuri',
//     idade: 20,
//     cidade: 'Maringá'
// }

// // cria constante do objeto, e puxa os valores das propriedades do objeto dentro das chaves
// const { nome, cidade } = cliente;

// console.log(nome, cidade);

// ____________________________________________________________________________________________________________________________________________

// ____________________________________________________________________________________________________________________________________________

// ____________________________________________________________________________________________________________________________________________

// DESCONSTRUINDO array
const cliente = ['Yuri', 20, 'Maringá'];

// no caso da array, o código abaixo, cada valor dentro da colchete irá se referir ao elemento da array
// exemplo: nome, como primeira variavel, ela vai puxar o elemento zero = 'Yuri'
// exemplo: como não queremos o primeiro elemento da array, a idade, colocar ', ,' para o js entender que nao queremos o primeiro elemento
// exemplo: cidade irá puxar o segundo elemento = 'Maringá'
const [nome, , cidade] = cidade;

console.log(nome, cidade);