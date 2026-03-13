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

        //cria a lista
        let lista = document.createElement("li");
        listaTarefas.appendChild(lista);
        
        //cria novo item da lista
        let novaTarefa = document.createElement("p");
        novaTarefa.innerText = tarefa.value;
        lista.appendChild(novaTarefa);
    }
})