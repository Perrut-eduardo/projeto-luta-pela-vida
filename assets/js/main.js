/* main.js — Menu hamburger, modal e máscaras + pequenos efeitos */
document.addEventListener("DOMContentLoaded", function () {
  // --- Máscaras simples
  function mascara(input, pattern) {
    if (!input) return;
    input.addEventListener("input", () => {
      const only = input.value.replace(/\D/g, "");
      let i = 0;
      input.value = pattern.replace(/#/g, () => only[i++] || "");
    });
  }
  mascara(document.getElementById("cpf"), "###.###.###-##");
  mascara(document.getElementById("telefone"), "(##) #####-####");
  mascara(document.getElementById("cep"), "#####-###");

  // --- Menu hambúrguer (mobile)
  const btnHamb = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (btnHamb && mobileNav) {
    btnHamb.addEventListener("click", () => {
      mobileNav.classList.toggle("show-mobile");
    });
    mobileNav.addEventListener("click", (e) => {
      if (e.target === mobileNav) mobileNav.classList.remove("show-mobile");
    });
  }

  // --- Dropdown accessible keyboard (esc closes)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".mobile-nav.show-mobile").forEach(el => el.classList.remove("show-mobile"));
      document.querySelectorAll(".modal-backdrop.show").forEach(el => el.classList.remove("show"));
    }
  });

  // --- Modal / feedback
  const modalBackdrop = document.querySelector(".modal-backdrop");
  function showModal(title, message, type = "info") {
    if (!modalBackdrop) return;
    modalBackdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${title}">
        <h3 style="margin-top:0">${title}</h3>
        <p style="color:var(--clr-muted);">${message}</p>
        <div style="text-align:right;margin-top:16px">
          <button class="btn btn-outline modal-close">Fechar</button>
        </div>
      </div>`;
    modalBackdrop.classList.add("show");
    Array.from(document.querySelectorAll(".modal-close")).forEach(b => b.addEventListener("click", () => modalBackdrop.classList.remove("show")));
  }

  // --- Form submit handler
  const form = document.querySelector("#form-cadastro");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        showModal("Erro no envio", "Por favor preencha os campos obrigatórios corretamente.", "error");
        return;
      }
      // Simulação de envio
      showModal("Cadastro enviado", "Obrigado! Recebemos seu cadastro e entraremos em contato.", "success");
      form.reset();
    });
  }

  // small animation: reveal cards on scroll
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });
  cards.forEach(c => observer.observe(c));
});
