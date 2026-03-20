let nome = document.getElementById("nome");
let botaoEnviar = document.getElementById("btnEnviar");
let mensagem = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", ()=>{
    
    if (Number(nome.value) || nome.value == ""){
        mensagem.innerText = `Error`;
        mensagem.classList.add("text-danger");

    } else {
        mensagem.innerText = `Olá ${nome.value}!`;
        mensagem.classList.add("text-success");
    }
})