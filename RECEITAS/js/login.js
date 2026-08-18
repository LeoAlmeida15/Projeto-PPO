document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("loginForm");
  const cadastro = document.getElementById("cadastroForm");
  const btnLogin = document.getElementById("mostrarLogin");
  const btnCadastro = document.getElementById("mostrarCadastro");

  function alternar(isLogin) {
    login.classList.toggle("hidden", !isLogin);
    cadastro.classList.toggle("hidden", isLogin);
    btnLogin.classList.toggle("active", isLogin);
    btnCadastro.classList.toggle("active", !isLogin);
  }

  btnLogin.onclick = () => alternar(true);
  btnCadastro.onclick = () => alternar(false);

  login.onsubmit = async e => {
    e.preventDefault();
    const status = document.getElementById("loginStatus");
    try {
      const data = await api("/auth/login", {
        method:"POST",
        body:{
          email:document.getElementById("loginEmail").value,
          senha:document.getElementById("loginSenha").value
        }
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      location.href = "index.html";
    } catch(err) { status.textContent = err.message; }
  };

  cadastro.onsubmit = async e => {
    e.preventDefault();
    const status = document.getElementById("cadStatus");
    try {
      await api("/auth/cadastro", {
        method:"POST",
        body:{
          nome:document.getElementById("cadNome").value,
          email:document.getElementById("cadEmail").value,
          senha:document.getElementById("cadSenha").value
        }
      });
      status.textContent = "Cadastro realizado. Agora faça login.";
      setTimeout(() => alternar(true), 700);
    } catch(err) { status.textContent = err.message; }
  };
});
