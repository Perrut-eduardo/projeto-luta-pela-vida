document.addEventListener("DOMContentLoaded", function () {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  const form = document.querySelector("form");

  // Função para aplicar máscaras
  function mascara(input, pattern) {
    input.addEventListener("input", () => {
      let value = input.value.replace(/\D/g, "");
      let i = 0;
      input.value = pattern.replace(/#/g, () => value[i++] || "");
    });
  }

  mascara(cpf, "###.###.###-##");
  mascara(telefone, "(##) #####-####");
  mascara(cep, "#####-###");

  // Validação simples e alerta de envio
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!cpf.value || !telefone.value || !cep.value) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    alert("✅ Cadastro enviado com sucesso!");
    form.reset();
  });
});
