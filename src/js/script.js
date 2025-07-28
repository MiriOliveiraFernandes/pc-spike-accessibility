// script.js
document.getElementById("abrirModal").onclick = function () {
  document.getElementById("modal").style.display = "block";
};

document.querySelector(".fechar").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

// Fechar ao clicar fora do modal
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};