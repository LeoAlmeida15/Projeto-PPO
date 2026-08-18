const API_URL = "http://localhost:3000/api";

async function api(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  if (options.body && typeof options.body !== "string") {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.body);
  }

  const token = localStorage.getItem("token");
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(API_URL + path, { ...options, headers });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.erro || "Não foi possível concluir a operação.");
  }
  return data;
}

function escapeHtml(text = "") {
  return String(text).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function receitaCard(r) {
  return `
    <article class="recipe-card">
      <div class="thumb">${r.imagem_url ? `<img src="${escapeHtml(r.imagem_url)}" alt="" style="width:100%;height:100%;object-fit:cover">` : "🍲"}</div>
      <div class="content">
        <span class="tag">${escapeHtml(r.categoria || "Receita")}</span>
        <h3><a href="receita.html?id=${r.id_receita}">${escapeHtml(r.nome)}</a></h3>
        <p>${escapeHtml(r.descricao || "Receita fácil e econômica.")}</p>
        ${r.tempo_preparo ? `<small>⏱ ${r.tempo_preparo} min</small>` : ""}
      </div>
    </article>`;
}
