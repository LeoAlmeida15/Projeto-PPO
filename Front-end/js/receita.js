document.addEventListener("DOMContentLoaded", async () => {
  const id = new URLSearchParams(location.search).get("id");
  const area = document.getElementById("receita");
  if (!id) { area.innerHTML = "<p>Receita não informada.</p>"; return; }

  try {
    const r = await api(`/receitas/${id}`);
    area.innerHTML = `
      <article class="recipe-detail">
        <span class="tag">${escapeHtml(r.categoria)}</span>
        <h1>${escapeHtml(r.nome)}</h1>
        <p>${escapeHtml(r.descricao || "")}</p>
        ${r.tempo_preparo ? `<p><strong>Tempo:</strong> ${r.tempo_preparo} minutos</p>` : ""}
        <button class="btn favorite" id="favoritar">♡ Salvar nos favoritos</button>
        <div class="recipe-columns">
          <section><h2>Ingredientes</h2><p>${escapeHtml(r.ingredientes).replace(/\n/g,"<br>")}</p></section>
          <section><h2>Modo de preparo</h2><p>${escapeHtml(r.modo_preparo).replace(/\n/g,"<br>")}</p></section>
        </div>
        <section style="margin-top:30px">
          <h2>Comentários</h2>
          <div id="comentarios">${r.comentarios?.length ? r.comentarios.map(c =>
            `<div class="comment"><strong>${escapeHtml(c.nome)}</strong><span>${escapeHtml(c.comentario)}</span></div>`
          ).join("") : "<p>Nenhum comentário ainda.</p>"}</div>
          <form id="comentarioForm" class="form-card">
            <label>Seu comentário<textarea id="comentarioTexto" rows="4" required></textarea></label>
            <button class="btn">Comentar</button>
            <p id="comentarioStatus" class="status"></p>
          </form>
        </section>
      </article>`;

    document.getElementById("favoritar").onclick = async () => {
      if (!localStorage.getItem("token")) {
        alert("Faça login para salvar favoritos.");
        location.href = "login.html";
        return;
      }
      try {
        await api(`/favoritos/${id}`, { method:"POST" });
        document.getElementById("favoritar").textContent = "✓ Salvo nos favoritos";
      } catch (e) { alert(e.message); }
    };

    document.getElementById("comentarioForm").onsubmit = async (e) => {
      e.preventDefault();
      const status = document.getElementById("comentarioStatus");
      try {
        await api("/comentarios", {
          method:"POST",
          body:{ id_receita:Number(id), comentario:document.getElementById("comentarioTexto").value }
        });
        status.textContent = "Comentário enviado!";
        setTimeout(() => location.reload(), 500);
      } catch(e) { status.textContent = e.message; }
    };
  } catch (e) {
    area.innerHTML = `<p>${escapeHtml(e.message)}</p>`;
  }
});
