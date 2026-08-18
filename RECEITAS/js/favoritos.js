document.addEventListener("DOMContentLoaded", async () => {
  const area = document.getElementById("favoritos");
  if (!localStorage.getItem("token")) {
    area.innerHTML = '<p>Faça login para ver seus favoritos. <a href="login.html">Entrar</a></p>';
    return;
  }
  try {
    const data = await api("/favoritos");
    area.innerHTML = data.length ? data.map(receitaCard).join("") : "<p>Você ainda não salvou receitas.</p>";
  } catch(e) { area.innerHTML = `<p>${escapeHtml(e.message)}</p>`; }
});
