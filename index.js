let input = document.querySelector("#input");
let botaoEnviar = document.getElementById("btnEnviar");
let mensagem = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", ()=>{
    
    let nome = input.value;

    if (Number(nome) || nome == ""){
        mensagem.innerText = `Error`

    } else {
        mensagem.innerText = `Olá ${nome}`;
        
    }
})