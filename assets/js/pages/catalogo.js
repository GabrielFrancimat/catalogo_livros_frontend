const modal = document.getElementById("bookModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDesc = document.getElementById("modalDesc");

function openModal(element) {
  const title = element.getAttribute("data-title");
  const author = element.getAttribute("data-author");
  const image = element.getAttribute("data-image");
  const desc = element.getAttribute("data-desc");

  modalTitle.textContent = title;
  modalAuthor.textContent = author;
  modalImg.src = image;
  modalDesc.textContent = desc;

  modal.classList.add("active");
}

function closeModalBtn() {
  modal.classList.remove("active");
}

function closeModal(event) {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
}
