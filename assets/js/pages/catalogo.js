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

const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");
const books = document.querySelectorAll(".book-item");

filterBtn.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase().trim();

  books.forEach(book => {
    const title = book.getAttribute("data-title").toLowerCase();
    const author = book.getAttribute("data-author").toLowerCase();

    if (title.includes(searchValue) || author.includes(searchValue)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
