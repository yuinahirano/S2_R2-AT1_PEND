let item = document.getElementById("item");
let botaoEnviar = document.getElementById("btnEnviar");
let mensagem = document.getElementById("mensagem");
let ul = document.getElementById("lista");

botaoEnviar.addEventListener("click", () => {

    //validação do valor inserido
    if (Number(item.value) || item.value == "") {
        mensagem.innerText = `Error`

    } else {

        //cria a lista
        let lista = document.createElement("li");
        ul.appendChild(lista);
        
        //cria novo item da lista
        let novoItem = document.createElement("p");
        novoItem.innerText = item.value;
        lista.appendChild(novoItem);
    }
})