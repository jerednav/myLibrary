const library = document.querySelector(".library");
const addBookButton = document.querySelector(".addBook");
const readBtn = document.createElement("button");
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
function createBook(book) {
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const deleteDiv = document.createElement("button");

  bookDiv.classList.add("book-div");
  titleDiv.classList.add("book-title");
  authorDiv.classList.add("book-author");
  pagesDiv.classList.add("book-pages");
  readBtn.classList.add("read-button");
  deleteDiv.classList.add("delete-book");

  titleDiv.textContent = `"${book.title}"`;
  authorDiv.textContent = `by ${book.author}`;
  pagesDiv.textContent = `Pages: ${book.pages}`;
  deleteDiv.textContent = "Delete";
  if (book.isRead) {
    readBtn.textContent = "Read";
    readBtn.classList.add("btn-light-green");
  } else {
    readBtn.textContent = "Unread";
    readBtn.classList.add("btn-light-red");
  }

  library.appendChild(bookDiv);
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readBtn);
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
  if (e.target && e.target.className === "delete-book") {
    deleteBook(e.target);
  }
  //   if (e.target && e.target.className === "status-button") {
  //     toggleRead(e.target);
  //   }
});

// function toggleRead(e) {
//   let index = readBtn.parentNode.parentNode.getAttribute("data");
//   if (library[index].isRead) {
//     library[index].isRead = false;
//     readBtn.textContext = "Read";
//     // readBtn.classList.add("btn-light-green");
//   } else {
//     library[index].isRead = true;
//     readBtn.textContext = "Not read";
//     readBtn.classList.add("btn-light-red");
//   }
// }
