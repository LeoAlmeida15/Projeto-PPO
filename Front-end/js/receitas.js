let pagina = 1;
const limite = 9;

async function carregarCategorias() {
  const select = document.getElementById("categoria");
  const categorias = await api("/categorias");
  select.innerHTML += categorias.map(c =>
    `<option value="${c.id_categoria}">${escapeHtml(c.nome)}</option>`
  ).join("");
}

async function carregarReceitas() {
  const busca = encodeURIComponent(document.getElementById("busca").value);
  const categoria = document.getElementById("categoria").value;
  const data = await api(`/receitas?busca=${busca}&categoria=${categoria}&pagina=${pagina}&limite=${limite}`);
  const lista = document.getElementById("listaReceitas");
  lista.innerHTML = data.receitas.length
    ? data.receitas.map(receitaCard).join("")
    : "<p>Nenhuma receita encontrada.</p>";
  document.getElementById("paginaAtual").textContent = `Página ${data.pagina}`;
  document.getElementById("anterior").disabled = pagina <= 1;
  document.getElementById("proxima").disabled = pagina * limite >= data.total;
}

document.addEventListener("DOMContentLoaded", async () => {
  await carregarCategorias();
  await carregarReceitas();
  document.getElementById("buscarBtn").onclick = () => { pagina = 1; carregarReceitas(); };
  document.getElementById("anterior").onclick = () => { if (pagina > 1) { pagina--; carregarReceitas(); } };
  document.getElementById("proxima").onclick = () => { pagina++; carregarReceitas(); };
});
