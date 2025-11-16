/* assets/js/components.js */
export const Home = `
  <section class="hero container">
    <div style="display:flex;align-items:center;gap:20px;">
      <img src="assets/images/logo.png" alt="Logo Projeto Luta Pela Vida" style="width:72px;height:72px;border-radius:8px;background:#fff;padding:6px;">
      <div>
        <h1>Bem-vindo ao Projeto Luta Pela Vida</h1>
        <p class="lead">Usamos o esporte como ferramenta de transformação, disciplina e esperança.</p>
      </div>
    </div>
  </section>
`;

export const Projetos = `
  <section class="container">
    <h2>Nossos Projetos</h2>
    <p>Conheça as iniciativas do Projeto Luta Pela Vida.</p>

    <div class="cards" style="margin-top:20px;">
      <article class="card">
        <img src="assets/images/projeto1.jpg" alt="Projeto 1">
        <div class="card-body">
          <h3>Faixa Preta</h3>
          <p>Treinos e formação avançada para jovens.</p>
          <div class="meta">
            <div class="badges"><span class="badge">Ativo</span></div>
            <button class="btn btn-outline">Saiba mais</button>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="assets/images/projeto2.jpg" alt="Projeto 2">
        <div class="card-body">
          <h3>Formação</h3>
          <p>Programa educacional e esportivo.</p>
          <div class="meta">
            <div class="badges"><span class="badge--sec">Novidade</span></div>
            <button class="btn btn-outline">Saiba mais</button>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="assets/images/projeto3.jpg" alt="Projeto 3">
        <div class="card-body">
          <h3>Camp</h3>
          <p>Acampamentos e atividades de imersão.</p>
          <div class="meta">
            <div class="badges"><span class="badge">Inscrições</span></div>
            <button class="btn btn-outline">Saiba mais</button>
          </div>
        </div>
      </article>
    </div>
  </section>
`;

export const Cadastro = `
  <section class="container">
    <h2>Cadastro</h2>
    <form id="formCadastro">
      <label>Nome</label>
      <input type="text" id="nome" name="nome" required>

      <label>Email</label>
      <input type="email" id="email" name="email" required>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    <p id="mensagem" style="margin-top:12px;"></p>
  </section>
`;
