// JS ES6
// tag script no final do body no index.html
// utilização de classes:

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}



class ListaTarefas extends List {
    constructor() {
        super();

        this.nome = "Yuri";
    }


    // Método
    mostrarNome() {
        console.log(this.nome);
    }

};

// Instanciar 
const minhasTarefas = new ListaTarefas();



document.getElementById('novo').onclick = function () {
    minhasTarefas.add("Minha Tarefa");
}

minhasTarefas.mostrarNome();