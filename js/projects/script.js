const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;
    booksContainer.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
  document.getElementById('book-form').style.display = 'block';
});

document.getElementById('new-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();

  // Reset form
  document.getElementById('new-book-form').reset();
  document.getElementById('book-form').style.display = 'none';
});

// Ejemplo de libros iniciales
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, false);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();
