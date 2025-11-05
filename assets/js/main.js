document.addEventListener("DOMContentLoaded", function () {
  // — Máscaras (se já existirem mantenha)
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  function mascara(input, pattern) {
    if (!input) return;
    input.addEventListener("input", () => {
      let value = input.value.replace(/\D/g, "");
      let i = 0;
      input.value = pattern.replace(/#/g, () => value[i++] || "");
    });
  }
  mascara(cpf, "###.###.###-##");
  mascara(telefone, "(##) #####-####");
  mascara(cep, "#####-###");

  // — Menu hambúrguer (mobile)
  const btnHamb = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (btnHamb && mobileNav) {
    btnHamb.addEventListener("click", () => {
      mobileNav.classList.toggle("show-mobile");
    });
    // fechar ao clicar fora
    mobileNav.addEventListener("click", (e) => {
      if (e.target === mobileNav) mobileNav.classList.remove("show-mobile");
    });
  }

  // — Modal simples
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalCloseBtn = document.querySelectorAll(".modal-close");
  function showModal(html) {
    if (!modalBackdrop) return;
    modalBackdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}<div style="text-align:right;margin-top:16px"><button class="btn btn-primary modal-close">Fechar</button></div></div>`;
    modalBackdrop.classList.add("show");
    document.querySelectorAll(".modal-close").forEach(b => b.addEventListener("click", () => modalBackdrop.classList.remove("show")));
  }

  // — Form submit com feedback
  const form = document.querySelector("form#form-cadastro");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Validacao nativa + visual
      if (!form.checkValidity()) {
        // faz foco no primeiro inválido
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        showModal(`<h3>Erro</h3><p>Por favor corrija os campos em destaque.</p>`);
        return;
      }
      // se tudo ok
      showModal(`<h3>Cadastro enviado</h3><p>Obrigado! Recebemos seu cadastro. Entraremos em contato.</p>`);
      form.reset();
    });
  }
});
