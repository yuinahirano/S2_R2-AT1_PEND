let tarefa = document.getElementById("inputTarefa");
let mensagem = document.getElementById("mensagem");
let botaoAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");

//adicionar tarefa
botaoAdicionar.addEventListener("click", () => {

    //validação do valor inserido
    if (Number(tarefa.value) || !tarefa.value) {
        mensagem.className = "text-danger text-danger";
        mensagem.innerText = `Tarefa vazia!`;

    } else {

        //sumir mensagem
        mensagem.innerText = "";

        //li
        let li = document.createElement("li");
        li.className = "d-flex justify-content-between align-items-center";
        listaTarefas.appendChild(li);
        
        //div do checkbox
        let itemLista = document.createElement("div");
        itemLista.className = "form-check";
        li.appendChild(itemLista);
        
        //cria item da lista
        let checkbox = document.createElement("input");
        checkbox.className = "form-check-input";
        checkbox.type = "checkbox";
        itemLista.appendChild(checkbox);

        //cria novo item da lista
        let novaTarefa = document.createElement("label");
        novaTarefa.className = "form-check-label";
        novaTarefa.innerText = tarefa.value;
        itemLista.appendChild(novaTarefa);

        //criar o botão remover junto com li e cada tarefa criada
        let botaoRemover = document.createElement("button")
        botaoRemover.className ="btn btn-outline-danger btn-sm m-3 ";
        botaoRemover.innerText = "🗑️Remover";
        li.appendChild(botaoRemover);

        botaoRemover.addEventListener("click", () => {
        
            itemLista.remove();
            novaTarefa.remove();
            botaoRemover.remove();
        
        })

        
    }
    

})

//remover tarefa