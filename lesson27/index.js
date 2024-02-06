// let massive = [[1,2,3], [4,5,6], [7,8,9]]
// let mass1 = ['Hello', 'Hi']
// let mass2 = [mass1, mass1]

// console.log(mass2)

// let mass = [1,2,3]
// let newMass = [mass, mass, mass]
// console.log(newMass[1][1])






// let people = {
//     name: ' Visola',
//     age: 17,
// }

// let cat = {
//     name: 'Barsik',
//     age: 1,
//     poroda: 'Vislouxaya',
//     owner: 'Shahzoda'
// }

// // console.log(cat) // (получение всего объекта)

// let property = 'owner' // способ
// console.log(cat[property])

// console.log(cat['age']) // способ

// console.log(cat.name) // способ





// let dog = {
//     name: 'Reks',
//     age: 1
// }

// console.log(dog)

// dog.poroda = 'Chihuahua' // 1
// dog['poroda'] = 'Chihuahua' // 2

// dog.name = 'Mark'
// dog['poroda'] = 'Xaski'
// console.log(dog)




// let movie = {
//     name: 'The Walking Dead',
//     debut: 2010,
//     Scenarist:  "Robert Kirkman",
//     seasons: 11,
//     genre: 'apocalypse'
// }

// movie.debut = 2011
// console.log(movie)




// let student = {
//     name: 'David',
//     age: 19,
//     faculty: "biologic",
//     year: 2

// }
// console.log(student.name)
// console.log(student.faculty)

// console.log(student['age'])
// console.log(student['year'])


// let propertyAccess = 'name'
// console.log(student[propertyAccess])

// student.year = 3
// student['year'] = 3

// student['grades'] = 10

// console.log(student)












// let school = {
//     name: '110',
//     phone_num: '998 71 333 33 33',
//     studentCount: 2000,
//     teachers: 30,
//     address: {
//          street: 'Oybek'
//     }
// }


// let school_keys = Object.keys(school)

// console.log(school_keys)



// console.log(school['address']['street'])

// let library = {
//     books: [
//         {
//             name: 'Book 1'
//         },
//         {
//             name: 'Book 2'
//         }
//     ]
// }
// library.books.pop()
// let book4 = {
//     name: 'Book 4'
// }
// library.books.push({name: 'Book 3'}, book4)
// console.log(library.books)




// let people = {
//     friends: [],

// }

// let fr1 = {
//     name: 'Max',
//     surname:'Addis',
//     Id: 111
// }

// let fr2 = {
//     name:'Mike',
//     surname:'Potter',
//     Id: 222
// }

// let fr3 = {
//     name:'Ellie',
//     surname: 'Williams',
//     Id: 333
// }


// people.friends.push(fr1,fr2,fr3)
// console.log(people)







// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
//     {
//         test: 'one',
//         score: 55
//     }, 
//     ['one', 'two']]

// theList.shift();
// theList.pop();

// theList.unshift("FIRST")
// theList[3] = "hello World"

// theList[2] = "MIDDLE"

// theList.push("LAST")

// console.log(theList)




// const products = []

// const prod1 = {
//     name: 'Dyson',
//     model: 'Multistyler',
//     price: 900,
//     quantity: 2
// }

// const prod2 = {
//     name: 'Playstation',
//     model: '4 pro',
//     price: 700,
//     quantity: 8

// }

// const prod3 = {
//     name: 'MacBook',
//     model: 'air',
//     price: 1200,
//     quantity: 10
// }

// products.push(prod1,prod2,prod3)
// console.log(products)

// console.log(prod3['quantity'])

// prod1.price = 700
// console.log(products)










// let user = {
//     firstname: 'Ivan',
//     lastname: 'Williams',
//     age: 18
// }

// for(let key in user){
//     console.log(user[key])
// }






// let animals = [{'0':'cat'}, 'dog', 'rabbit']
// for(let animal of animals){
//     console.log(animals[animal])


// }








// let mass = [1,2,3,4,5]
// let mass2 = mass.map((num, i) => `index: ${i}, num: ${num}`)

// console.log(mass2)





// class Book {
//     constructor(name, author, published) {
//         this.name = name
//         this.author = author
//         this.published = published
//     }
// }

// let book1 = new Book("Убийство в восточном экспрессе","Агата Кристи", '1933')


// console.log(book1)

catalog = []

// class Product {
//     constructor(name, model, price, quanity) {
//         this.name = name
//         this.model = model
//         this.price = price
//         this.quanity = quanity
//     }

//     info() {
//         console.log(`Name: ${this.name}, model: ${this.model}`)
//     }
// }

// let prod1 = new Product('Dyson', 'Mustistyler', 800, 2)
// prod1.info()








// let mass = [2,3,4,5,6,3,4,1]
// mass = mass.filter(e => e !== 3)
// console.log(mass)









// let alert = alert("Hello")
// let prompt = prompt("Whats ur name?")
// let confirm = confirm("aaaaaa")





// let a = +prompt("num 1")
// let b = +prompt("num 2")

// function sum(a, b) {
//     return a + b

// }
// console.log(sum(a,b))














// class Library {
//     constructor(id, name, books) {
//         this.id = id
//         this.name = name
//         this.books = books 
//     }
// }
// class Book {
//     constructor(name, author, published) {
//         this.name = name
//         this.author = author
//         this.published = published
//     }

//     info() {
//         console.log(`Name: ${this.name}, author: ${this.author}`)
//     }
// }

// const books = []

// const book1 = new Book("Убийство", "Агата", '1933')
// const book2 = new Book("Name 2", 'Author 2', '1999')

// book1.published(book1,book2)
// const library = new Library('1', 'Alisher Navoi', books)
// console.log(library.books)


