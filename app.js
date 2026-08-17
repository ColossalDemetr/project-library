const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {

    const container = document.querySelector('#library-container');
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not read"}</p>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", () => {
            myLibrary.splice(myLibrary.findIndex(b => b.id === book.id), 1);
            displayBooks();
        });

        container.appendChild(card);

    });
}

// Dialog window

const dialog = document.querySelector("#book-dialog");
const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("#book-form");

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    dialog.close();
    form.reset();
});