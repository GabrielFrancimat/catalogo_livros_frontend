// Seleciona os elementos
const loginArea = document.getElementById("loginArea");
const registerArea = document.getElementById("registerArea");

// Define o estado inicial (Login visível)
window.onload = () => {
  loginArea.classList.add("active");
  registerArea.classList.remove("active");
  // Move o registro para a direita (preparado para entrar)
  registerArea.style.transform = "translate(50%, -50%)";
};

function openRegister() {
  // Login sai para a esquerda
  loginArea.style.transform = "translate(-150%, -50%)";
  loginArea.style.opacity = "0";
  loginArea.style.pointerEvents = "none";

  // Registro entra vindo da direita
  registerArea.style.transform = "translate(-50%, -50%)";
  registerArea.style.opacity = "1";
  registerArea.style.pointerEvents = "all";
  registerArea.style.visibility = "visible";
}

function openLogin() {
  // Registro volta para a direita
  registerArea.style.transform = "translate(50%, -50%)";
  registerArea.style.opacity = "0";
  registerArea.style.pointerEvents = "none";

  // Login volta para o centro
  loginArea.style.transform = "translate(-50%, -50%)";
  loginArea.style.opacity = "1";
  loginArea.style.pointerEvents = "all";
  loginArea.style.visibility = "visible";
}
