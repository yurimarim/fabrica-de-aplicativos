// JS ES6
// tag script no final do body no index.html
// utilização de classes:

class Pessoa {
    constructor() {
        // dentro do constructor separa por virgula
        this.nome = '',
            this.sobrenome = ''
    }

    nomePessoa(primeironome) {
        this.nome = primeironome;
        console.log(`Meu nome é: ${this.nome}`);
        // console.log('Meu nome é: ' + this.nome);
    }

    // método segundoNome recebe o segundonome como parametro, chamando o metodo la em baixo 
    // pessoa1.segundoNome('Marim');
    // e realizao método abaixo.
    segundoNome(segundonome) {
        this.sobrenome = segundonome
        console.log(`Meu sobrenome é: ${this.sobrenome}`);
        // console.log('Meu sobrenome é: ' + this.sobrenome);
    }

    nomeCompleto() {
        let nomeCompleto = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompleto);
    }

};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Yuri');
pessoa1.segundoNome('Marim');
pessoa1.nomeCompleto();