// using object declaration
const createBook = (title, author, isbn) => {
  return {
    createdAt: Date.now(),
    title,
    author,
    isbn,
  };
};

console.log({ book1 });
const book1 = new CreateBook("New Book 1", "Ali", 11111);
// using constructor function
function CreateBook(title, author, isbn) {
  this.createdAt = Date.now();
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

const book2 = new CreateBook("New Book 2", "Taha", 22222);

console.log({ book2 });
