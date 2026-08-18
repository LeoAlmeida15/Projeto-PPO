document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (localStorage.getItem("token")) {
    if (loginLink) loginLink.classList.add("hidden");
    if (logoutBtn) logoutBtn.classList.remove("hidden");
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      window.location.href = "index.html";
    });
  }

  const destaques = document.getElementById("destaques");
  if (destaques) {
    api("/receitas?limite=6")
      .then(data => {
        destaques.innerHTML = data.receitas.length
          ? data.receitas.map(receitaCard).join("")
          : "<p>Nenhuma receita cadastrada ainda.</p>";
      })
      .catch(err => destaques.innerHTML = `<p>${escapeHtml(err.message)}</p>`);
  }
});
