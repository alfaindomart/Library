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

function book() {
  function book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.about = function() {
      if (this.isRead !== true)
      {return `${title} is written by ${author}, it has ${pages} pages. You have not read this book`} else return `${title} is written by ${author}, it has ${pages} pages. You have read this book`
    }
}
};

addBook.addEventListener('click', (e) => {
  let bookTitle = document.getElementById('bookTitle');
let author = document.getElementById('bookTitle');
let pages = document.getElementById('pages');
let haveRead = document.getElementById('haveRead');
  e.preventDefault()
  console.log(bookTitle.value, author.value, pages.value, haveRead.value);
})

function addBookToLibrary() {

};

const cards = 

function createCards() {
  let cards = document.createElement('div');
  let cardTitle = 
  cards.className = 'cards'

  
  
}
