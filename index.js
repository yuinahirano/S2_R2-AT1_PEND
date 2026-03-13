let texto = document.getElementById("texto");
let botaoMudar = document.getElementById("btnMudar");
let mensagem = document.getElementById("mensagem");

botaoMudar.addEventListener("click", () => {

    texto.innerText = `Texto alterado com JavaScript!`;

})