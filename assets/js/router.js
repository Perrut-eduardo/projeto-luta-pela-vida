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

        default:
            app.innerHTML = "<h2>Página não encontrada</h2>";
            break;
    }
}

window.addEventListener("load", navegar);
window.addEventListener("hashchange", navegar);
