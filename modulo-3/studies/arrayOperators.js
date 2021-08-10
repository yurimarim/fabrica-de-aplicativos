const lista = [1, 2, 3, 4, 5, 6];

// array.map -> vai passar por todos os elementos da array e vai fazer algo
// no caso abaixo, vai multiplar todos os valores por 5.
// index = posição de cada elemento no array.
const novaLista = lista.map(function (item, index) {
    return item * index;
});

console.log(novaLista);

// reduce - somar todos os elementos da lista
const soma = lista.reduce(function (total, proximo) {
    return total + proximo;
});
// explicação da soma:
// total = 0, proximo = 1,
// total = 1, proximo = 2,
// total = 3, proximo = 3,
// total = 6, proximo = 4,
// total = 10, proximo = 5,
// total = 15, proximo = 6,
// total = 21

console.log(soma);

// find achar um item que está dentro do array
const find = lista.find(function (item) {
    return item === 6;
});
console.log(find);
