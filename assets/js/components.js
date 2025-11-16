export const Home = `
    <section class="pagina">
        <h2>Bem-vindo à Ulbra TECH</h2>
        <p>Seu portal de inovação e tecnologia.</p>
    </section>
`;

export const Projetos = `
    <section class="pagina">
        <h2>Projetos</h2>
        <ul>
            <li>Projeto Robótica</li>
            <li>Aplicativos Mobile</li>
            <li>Jogos Digitais</li>
        </ul>
    </section>
`;

export const Cadastro = `
    <section class="pagina">
        <h2>Cadastro de Aluno</h2>

        <form id="formCadastro">
            <label>Nome:</label>
            <input type="text" id="nome" required>

            <label>E-mail:</label>
            <input type="email" id="email" required>

            <label>Idade:</label>
            <input type="number" id="idade" required min="1">

            <button type="submit">Enviar</button>
        </form>

        <p id="mensagem"></p>
    </section>
`;
