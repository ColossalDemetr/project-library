const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
            <p>${book.title}<p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not read"}</p>
        `;
        container.appendChild(card);
    });
}