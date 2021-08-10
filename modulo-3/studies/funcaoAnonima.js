function adicionar(...numeros) {

    // função anônima
    // caso sua função não tenha muitos "comandos" não é necessario usar {},
    // porem como no caso abaixo foi declarada uma variável soma, precisa das {} e do return
    let total = numeros.reduce((total, proximo) => {
        let soma = total + proximo;

        return soma;
    });

    console.log(total);
}

adicionar(1, 2, 3, 4, 5, 8, 9);