// sem arrow function
function Soma(n1, n2) {
    return n1 + n2;
}

// com arrow function
// parametros n1 e n2 - arrow function => {return}
const Soma = (n1, n2) => {
    return n1 + n2;
}


// arrow function mais reduzido
// n1,n2 parametros arrow function => quando uma função retorna em uma linha só
// não precisa das chaves e do return, inserir o return na frente do =>
const Soma = (n1, n2) => n1 + n2;

// arrow function ainda mais reduzido (1 parametro só)
// parametro nome, quando é um parametro só nao precisa de ()
const nomeUsuario = nome => console.log(nome);