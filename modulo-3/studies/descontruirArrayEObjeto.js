// ========~========~========~========~========~========~OBJETO~========~========~========~========~========~
// Declarar um objeto pessoas
// const pessoa = {
//     nome: "Yuri",
//     sobrenome: "Marim",
//     idade: 20,
//     cargo: "Desenvolvedor"
// };
// // Objeto declarado.

// // Descontruir um objeto.
// // No código abaixo ele está atribuindo o valor do pessoa.nome para uma variável com nome -> nome.
// let { nome } = pessoa;

// // Descontruir um objeto - setando uma varíavel
// // No código abaixo ele está atribuindo o valor do pessoa.nome para uma varíavel com nome -> funcionario.
// let { nome: funcionario } = pessoa;
// ========~========~========~========~========~========~========~========~========~========~========~========~




// ========~========~========~========~========~========~ARRAY~========~========~========~========~========~
// Declarar array
let nomes = ['Yuri', 'Marim', 20];
// Array declarado.

// No código abaixo ele está atribuindo o valor da posição [1] do array para a variável -> segundonome do array nomes.
let { 1: segundonome } = nomes;

// Outro exemplo: atribuindo mais de um;
let { 0: primeironome, 2: idade } = nomes;

// Outro método:
// Ele já declara a varíavel recebendo o valor de cada atributo tendo referência cada posição do array
// Por exemplo: no array nomes o valor yuri recebe a posição [0], então abaixo, a variável nome recebe o valor da posição [0].
let [nome, sobrenome, idade] = nomes;








// ========~========~========~========~========~========~========~========~========~========~========~========~