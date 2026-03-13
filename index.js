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


        //cria div cada item na lista
        let itemLista = document.createElement("li");
        itemLista.className = "list-group-item d-flex align-items-center justify-content-between";
        
        //cria nova tarefa
        let novaTarefa = document.createElement("p");
        novaTarefa.innerText = tarefa.value;
        itemLista.appendChild(novaTarefa);
        
        //criar o botão remover junto com li e cada tarefa criada
        let botaoRemover = document.createElement("button")
        botaoRemover.innerText = "Remover";
        botaoRemover.className ="btn btn-danger btn-sm";
        itemLista.appendChild(botaoRemover);
        
        botaoRemover.addEventListener("click", () => {
            
            itemLista.remove();
            
        })
        
        listaTarefas.appendChild(itemLista);
        
    }
    

})

//remover tarefa