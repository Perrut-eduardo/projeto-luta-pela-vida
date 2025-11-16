export function validarFormulario() {
    const form = document.querySelector("#formCadastro");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const idade = document.querySelector("#idade").value;
        const msg = document.querySelector("#mensagem");

        if (nome.length < 3) {
            msg.textContent = "Nome deve ter pelo menos 3 letras.";
            msg.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            msg.textContent = "E-mail inválido!";
            msg.style.color = "red";
            return;
        }

        if (idade < 10) {
            msg.textContent = "Idade mínima é 10 anos.";
            msg.style.color = "red";
            return;
        }

        msg.textContent = "Cadastro enviado com sucesso!";
        msg.style.color = "green";

        form.reset();
    });
}
