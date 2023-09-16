//user open the site
//user can click an 'add book' button
//when clicked an 'add book' button, users are shown an input form
//The form has title, author, pages, and 'have you read the book?' confirmation
//user fill the form, and press 'add book' to finisih it
//the form dissappear
//a card shows up. Shows the inputted book form data

const myLibrary = [];

//handle the form dialog
const bookDialog = document.getElementById('bookDialog'); 
const showForm = document.getElementById('showForm');
const addBook = document.getElementById('addBook');



showForm.addEventListener('click', () => {
  bookDialog.showModal()
});

function book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
};

addBook.addEventListener('click', (e) => {

  let bookTitle = document.getElementById('bookTitle').value;
  let author = document.getElementById('authors').value;
  let pages = document.getElementById('pages').value;
  e.preventDefault();

  let cards = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardAuthor = document.createElement('p');
  let cardPages = document.createElement('p');
  let cardReadBtn = document.createElement('button');
  let cardRemoveBtn = document.createElement('button');

  cardWrap.appendChild(cards);
cards.append(cardTitle, cardAuthor, cardPages, cardReadBtn, cardRemoveBtn);

cards.classList.add('cards');
cardTitle.classList.add('cd-title');
cardAuthor.classList.add('cd-author');
cardPages.classList.add('cd-pages');
cardReadBtn.classList.add('cd-read-btn');
cardRemoveBtn.classList.add('cd-remove');

  let newBook = new book(bookTitle, author, pages);
  for (const prop in newBook) {
    switch (prop) {
      case 'title':
        cardTitle.textContent = newBook[prop];
        break;
      case 'author':
        cardAuthor.textContent = newBook[prop];
        break;
      case 'pages':
        cardPages.textContent = newBook[prop];
        break;
      default:
        // Handle unknown properties if needed
        break;
    }
    }
  }
)

function addBookToLibrary() {
  
};

let cardWrap = document.getElementById('cards-wrapper');






