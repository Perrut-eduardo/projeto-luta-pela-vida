export function validarFormulario() {
    const form = document.querySelector("#cadastro-form");
    const alertBox = document.querySelector("#form-alert");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();

        if (nome.length < 3) {
            alertBox.innerHTML = `<p style="color:red;">Nome precisa ter 3 letras ou mais.</p>`;
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alertBox.innerHTML = `<p style="color:red;">Digite um e-mail válido.</p>`;
            return;
        }

        alertBox.innerHTML = `<p style="color:green;">Cadastro enviado com sucesso!</p>`;
    });
}
