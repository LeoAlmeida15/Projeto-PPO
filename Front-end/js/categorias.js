document.addEventListener("DOMContentLoaded", async () => {
  const area = document.getElementById("categorias");
  try {
    const categorias = await api("/categorias");
    area.innerHTML = categorias.map(c => `
      <a class="category-card" href="receitas.html?categoria=${c.id_categoria}">
        <h2>${escapeHtml(c.nome)}</h2>
        <p>${escapeHtml(c.descricao || "")}</p>
        <small>${c.quantidade_receitas} receita(s)</small>
      </a>`).join("");
  } catch(e) { area.innerHTML = `<p>${escapeHtml(e.message)}</p>`; }
});
