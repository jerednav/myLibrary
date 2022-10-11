const library = document.querySelector(".library");
const addBookButton = document.querySelector(".addBook");
const form = document.querySelector("form");

//create library array
let myLibrary = [];
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    isRead.checked
  );

  myLibrary.push(newBook);
  displayBooks();
}

//Gather library array
function getLibrary() {
  addBookToLibrary();
  resetDisplay();
  displayBooks();
}

//Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getLibrary();
});

//Display elements
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

//Reset display
function resetDisplay() {
  library.textContent = "";
}

//Create Book Card div
function createBook(obj) {
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readDiv = document.createElement("div");
  const deleteDiv = document.createElement("button");

  bookDiv.classList.add("book-div");
  library.appendChild(bookDiv);

  titleDiv.textContent = `Book title ${obj.title}`;
  titleDiv.classList.add("book-title");
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = `Author: ${obj.author}`;
  authorDiv.classList.add("book-author");
  bookDiv.appendChild(authorDiv);

  pagesDiv.textContent = `Pages: ${obj.pages}`;
  pagesDiv.classList.add("book-pages");
  bookDiv.appendChild(pagesDiv);

  bookDiv.appendChild(pagesDiv);
  readDiv.classList.add("book-isRead");
  if (obj.isRead) {
    ("Read");
  } else {
    ("Unread");
  }
  bookDiv.appendChild(readDiv);

  deleteDiv.textContent = "Delete";
  deleteDiv.classList.add("delete-book");
  bookDiv.appendChild(deleteDiv);
}

//Delete Book
function deleteBook(deleteButton) {
  let index = deleteButton.parentNode.parentNode.getAttribute("data");
  myLibrary.splice(index, 1);
  resetDisplay();
  displayBooks();
}

document.addEventListener("click", function (e) {
  console.log(e);
  if (e.target && e.target.className === "delete-book") {
    deleteBook(e.target);
  }
});
console.log(event);
