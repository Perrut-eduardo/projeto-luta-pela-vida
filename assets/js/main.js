import { loadPage } from "./router.js";

function atualizarRota() {
    let hash = window.location.hash.replace("#", "");

    if (hash === "") {
        hash = "home"; // página inicial
    }

    loadPage(hash);
}

window.addEventListener("hashchange", atualizarRota);
window.addEventListener("load", atualizarRota);
