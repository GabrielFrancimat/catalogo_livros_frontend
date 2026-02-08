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
const booksGrid = document.getElementById("booksGrid");

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        filterBtn.click();
    }
});

filterBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();

    if (!query) {
        mostrarMensagemInicial();
        return;
    }

    buscarLivros(query);
});

async function buscarLivros(query) {
    booksGrid.innerHTML = "<p>Buscando livros...</p>";

    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();

        booksGrid.innerHTML = "";

        if (data.docs.length === 0) {
            booksGrid.innerHTML = "<p>Nenhum livro encontrado.</p>";
            return;
        }

        data.docs.slice(0, 12).forEach(book => {
            criarCardLivro(book);
        });

    } catch (error) {
        booksGrid.innerHTML = "<p>Erro ao buscar livros.</p>";
        console.error(error);
    }
}

function criarCardLivro(book) {
    const div = document.createElement("div");
    div.classList.add("book-item");

    const title = book.title ?? "Título desconhecido";
    const author = book.author_name
        ? book.author_name.join(", ")
        : "Autor desconhecido";

    const coverId = book.cover_i;
    const image = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : "assets/img/covers/placeholder.png";

    const description =
        book.first_sentence?.value ||
        book.first_sentence ||
        (book.subject ? `Temas: ${book.subject.slice(0, 5).join(", ")}` : null) ||
        "Descrição não disponível para este livro.";

    div.setAttribute("data-title", title);
    div.setAttribute("data-author", author);
    div.setAttribute("data-image", image);
    div.setAttribute("data-desc", description);

    div.onclick = () => openModal(div);

    div.innerHTML = `
        <img src="${image}" class="book-cover" alt="${title}">
        <p class="book-title-card">${title}</p>
    `;

    booksGrid.appendChild(div);
}

mostrarMensagemInicial();

function mostrarMensagemInicial() {
    booksGrid.innerHTML = `
        <p class="empty-message">
            Digite o nome de um livro e clique no filtro para buscar 📚
        </p>
    `;
}


