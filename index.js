let nome = document.getElementById("nome");
let botaoEnviar = document.getElementById("btnEnviar");
let mensagem = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", ()=>{
    
    if (Number(nome.value) || nome.value == ""){
        mensagem.innerText = `Error`

    } else {
        mensagem.innerText = `Olá ${nome.value}`;
        
    }
})