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

showForm.addEventListener('click', () => {
  bookDialog.showModal()
});

function book() {
  function book(title, author, pages, isRead) {
    this.title = title
    this.name = author
    this.pages = pages
    this.isRead = isRead
    this.about = function() {
      if (this.isRead !== true)
      {return `${title} is written by ${author}, it has ${pages} pages. You have not read this book`} else return `${title} is written by ${author}, it has ${pages} pages. You have read this book`
    }
}
};

function addBookToLibrary() {

};

function createCards() {

}
