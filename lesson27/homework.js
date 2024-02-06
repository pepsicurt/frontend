class Library {
    constructor(name, books) {
        this.name = name
        this.books = books 
    }
}
class Book {
    constructor(name, author) {
        this.name = name
        this.author = author
    }

}

const books = []

const book1 = new Book('Маленькие женщины','Олкотт')
const book2 = new Book('Цвет пурпурный', "Элис Уолкер")
books.push(book1,book2)
console.log(books)



