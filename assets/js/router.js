import { Home, Projetos, Cadastro } from "./components.js";
import { validarFormulario } from "./forms.js";

function navegar() {
    const rota = location.hash || "#home";
    const app = document.querySelector("#app");

    switch (rota) {
        case "#home":
            app.innerHTML = Home;
            break;

        case "#projetos":
            app.innerHTML = Projetos;
            break;

        case "#cadastro":
            app.innerHTML = Cadastro;
            validarFormulario();
            break;
    }
}

window.addEventListener("hashchange", navegar);
window.addEventListener("load", navegar);
