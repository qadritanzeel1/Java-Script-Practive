class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book)
    }
    listAllBooks(){
        this.books.forEach(function(book){
            console.log(book)
        })
    }
}

let ANlibrary = new Library();
ANlibrary.addBook("Health");
ANlibrary.addBook("Wealth");
ANlibrary.addBook("Code");
ANlibrary.addBook("Physics");
ANlibrary.addBook("ANI");
ANlibrary.listAllBooks();
console.log(ANlibrary);
