//user open the site
//user can click an 'add book' button
//when clicked an 'add book' button, users are shown an input form
//The form has title, author, pages, and 'have you read the book?' confirmation
//user fill the form, and press 'add book' to finisih it
//the form dissappear
//a card shows up. Shows the inputted book form data

const myLibrary = [];
let bookIndex = 0

//handle the form dialog
const bookDialog = document.getElementById('bookDialog'); 
const showForm = document.getElementById('showForm');
const addBook = document.getElementById('addBook');



showForm.addEventListener('click', () => {
  bookDialog.showModal()
});


function book (title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.index = bookIndex
    bookIndex++
    // this.pushBook = function () {
    //   myLibrary.push(this)
    // }
    // this.pushBook();
};

function addBookToLibrary () {
  let bookTitle = document.getElementById('bookTitle').value;
  let author = document.getElementById('authors').value;
  let pages = document.getElementById('pages').value;
  let isRead = document.getElementById('haveRead').checked;

  let newBook = new book(bookTitle, author, pages, isRead);
  myLibrary.push(newBook);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}

function renderBook() {

  for (const obj of myLibrary) {

  let cards = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardAuthor = document.createElement('p');
  let cardPages = document.createElement('p');
  let cardReadStat = document.createElement('div');
  let cardRemoveBtn = document.createElement('button');

  cards.classList.add('cards');
  cardTitle.classList.add('cd-title');
  cardAuthor.classList.add('cd-author');
  cardPages.classList.add('cd-pages');
  cardReadStat.classList.add('cd-read-stat');
  cardRemoveBtn.classList.add('cd-remove');

  cardWrap.appendChild(cards);
  cards.append(cardTitle, cardAuthor, cardPages, cardReadStat, cardRemoveBtn);

  cardTitle.textContent = obj.title;
  cardAuthor.textContent = obj.author;
  cardPages.textContent = obj.pages;
  cardRemoveBtn.addEventListener('click', (e) => {
      removeBook(obj.index)
    })
  //   if (!isRead) {
  //     cardReadStat.textContent = "not read"
  //   } else {cardReadStat.textContent = "Read";};
  }
};

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  renderBook();
  bookDialog.close();
})


  




// addBook.addEventListener('click', (e) => {

//   let bookTitle = document.getElementById('bookTitle').value;
//   let author = document.getElementById('authors').value;
//   let pages = document.getElementById('pages').value;
//   let isRead = document.getElementById('haveRead').checked;

//   e.preventDefault();

//   let cards = document.createElement('div');
//   let cardTitle = document.createElement('h2');
//   let cardAuthor = document.createElement('p');
//   let cardPages = document.createElement('p');
//   let cardReadStat = document.createElement('div');
//   let cardRemoveBtn = document.createElement('button');

//   cardWrap.appendChild(cards);
// cards.append(cardTitle, cardAuthor, cardPages, cardReadStat, cardRemoveBtn);

// cards.classList.add('cards');
// cardTitle.classList.add('cd-title');
// cardAuthor.classList.add('cd-author');
// cardPages.classList.add('cd-pages');
// cardReadStat.classList.add('cd-read-stat');
// cardRemoveBtn.classList.add('cd-remove');

//   let newBook = new book(bookTitle, author, pages, isRead);
//   for (const prop in newBook) {
//     switch (prop) {
//       case 'title':
//         cardTitle.textContent = newBook[prop];
//         break;
//       case 'author':
//         cardAuthor.textContent = newBook[prop];
//         break;
//       case 'pages':
//         cardPages.textContent = newBook[prop];
//         break;
//       default:
//         // Handle unknown properties if needed
//         break;
//     }
//     if (!isRead) {
//       cardReadStat.textContent = "not read"
//     } else {cardReadStat.textContent = "Read";
//   };
//   cardRemoveBtn.innerHTML = "remove";
//   bookDialog.close();
//     }
//   }
// )

let cardWrap = document.getElementById('cards-wrapper');






