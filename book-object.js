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

const goosebump = new book('Say Cheese and Die', 'RL Stein', '120', true);

console.log(goosebump.about())