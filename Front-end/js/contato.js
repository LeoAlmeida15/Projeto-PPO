document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contatoForm").onsubmit = async (e) => {
    e.preventDefault();
    const status = document.getElementById("mensagemStatus");
    try {
      await api("/contato", {
        method:"POST",
        body:{
          nome:document.getElementById("nome").value,
          email:document.getElementById("email").value,
          mensagem:document.getElementById("mensagem").value
        }
      });
      status.textContent = "Mensagem enviada com sucesso!";
      e.target.reset();
    } catch(err) { status.textContent = err.message; }
  };
});
