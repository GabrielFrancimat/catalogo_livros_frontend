// Seleciona elementos do DOM
const modal = document.getElementById("bookModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDesc = document.getElementById("modalDesc");

function openModal(element) {
  // 1. Pega os dados dos atributos data- da div clicada
  const title = element.getAttribute("data-title");
  const author = element.getAttribute("data-author");
  const image = element.getAttribute("data-image");
  const desc = element.getAttribute("data-desc");

  // 2. Preenche o modal com esses dados
  modalTitle.textContent = title;
  modalAuthor.textContent = author;
  modalImg.src = image;
  modalDesc.textContent = desc;

  // 3. Mostra o modal (adiciona a classe active)
  modal.classList.add("active");
}

function closeModalBtn() {
  modal.classList.remove("active");
}

// Fecha o modal se clicar fora da caixinha cinza (no fundo desfocado)
function closeModal(event) {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
}
