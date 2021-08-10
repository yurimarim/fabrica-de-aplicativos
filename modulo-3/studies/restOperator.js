// // Rest operator
// // Garante que todos os números que o usuário colocou, ele recebe todos os números.
// function minhaLista(...numeros) {
//     console.log(numeros);
// }

// minhaLista(1, 2, 3, 4, 5);
// -----------------------------------------------------------------------------------
// EXERCÍCIO

function cadastrar(usuarios, ...novosUsuarios) {
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalusuarios);
}

let usuarios = ['Yuri', 'Lucas'];

let novosUsuarios = cadastrar(usuarios, 'Kayo', 'Eduarda');

