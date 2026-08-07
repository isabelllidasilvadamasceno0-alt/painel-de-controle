function enviarMensagem() {

    const campo = document.getElementById("mensagem");
    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma mensagem.");
        return;
    }

    const mensagens = document.getElementById("mensagens");

    const novaMensagem = document.createElement("div");
    novaMensagem.className = "mensagem grupo";

    novaMensagem.innerHTML = `
        <strong>Você:</strong><br>
        ${texto}
    `;

    mensagens.appendChild(novaMensagem);

    campo.value = "";

    mensagens.scrollTop = mensagens.scrollHeight;
}
