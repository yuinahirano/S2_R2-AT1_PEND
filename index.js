let tarefa = document.getElementById("inputTarefa");
let mensagem = document.getElementById("mensagem");
let botaoAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");


botaoAdicionar.addEventListener("click", () => {

    //validação do valor inserido
    if (Number(tarefa.value) || !tarefa.value) {
        mensagem.className = "text-danger text-danger";
        mensagem.innerText = `Tarefa vazia!`;

    } else {

        mensagem.innerText = null;

        //cria a lista
        let item = document.createElement("li");
        item.className = "list-group-item";
        
        //cria novo item da lista
        let novaTarefa = document.createElement("p");
        novaTarefa.innerText = tarefa.value;
        item.appendChild(novaTarefa);
        listaTarefas.appendChild(item);
    }
})