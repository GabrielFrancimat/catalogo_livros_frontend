const loginArea = document.getElementById("loginArea");
const registerArea = document.getElementById("registerArea");


window.onload = () => {
  loginArea.classList.add("active");
  registerArea.classList.remove("active");
  
  registerArea.style.transform = "translate(50%, -50%)";
};

function openRegister() {
  loginArea.style.transform = "translate(-150%, -50%)";
  loginArea.style.opacity = "0";
  loginArea.style.pointerEvents = "none";

  registerArea.style.transform = "translate(-50%, -50%)";
  registerArea.style.opacity = "1";
  registerArea.style.pointerEvents = "all";
  registerArea.style.visibility = "visible";
}

function openLogin() {
  registerArea.style.transform = "translate(50%, -50%)";
  registerArea.style.opacity = "0";
  registerArea.style.pointerEvents = "none";

  loginArea.style.transform = "translate(-50%, -50%)";
  loginArea.style.opacity = "1";
  loginArea.style.pointerEvents = "all";
  loginArea.style.visibility = "visible";
}

