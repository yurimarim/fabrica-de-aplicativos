// // Spread Operator
// // ======~======~======~======~======~======~TEORIA~======~======~=======~======~======~======~
// // Utilizando array
// let primeiros = [1, 2, 3];

// // console.log(primeiros);
// //Retorno da array -> (3) [1, 2, 3]


// // ...
// let numeros = [...primeiros, 4, 5, 6];
// // console.log(numeros);
// // Retorno da array -> (6) [1, 2, 3, 4, 5, 6]

// // Caso não utliza o spread operator 
// // O retorno seria:

// let numeros_teste = [primeiros, 4, 5, 6];
// // console.log(numeros);
// // Retorno da array -> (6) [Array(3), 4, 5, 6]


// // ======~======~======~======~======~======~======~======~======~=======~======~======~======~
// // Utilizando objeto
// let pessoa = {
//     nome: 'Yuri',
//     idade: 20,
//     cargo: 'Programador'
// };

// // console.log(pessoa);
// // Retorno do objeto -> {nome: "Yuri", idade: 20, cargo: "Programador"}

// // ...
// let novapessoa = {
//     ...pessoa,
//     anoAtual: 2021,
//     cidade: 'Curitiba'
// };

// // console.log(novapessoa);
// // Retorno do novo objeto -> {nome: "Yuri", idade: 20, cargo: "Programador", anoAtual: 2021, cidade: "Curitiba"}

// // ======~======~======~======~======~======~======~======~======~=======~======~======~======~
// // ======~======~======~======~======~======~FIM TEORIA~======~======~=======~======~======~======~


function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '6542317/89426379'
    };
    return novosDados;
}


console.log(cadastroPessoa({ nome: 'Yuri', sobrenome: 'Marim', anoInicio: '2019' }));
