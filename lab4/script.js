// zad1
function Book(author, title, year) {
    this.author = author
    this.title = title
    this.year = year
}

function book_info(book){
    return `Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book['year']}`
}

let book1 = new Book("George Orwell", "1984", 1949)
console.log(book_info(book1))

// zad 2
const Student = {
    name: "Serhii",
    surname: "Chornii",
    nr_albumu: 'w72224',
    grades: {
        programming: 4.5,
        math: 4,
        algorythms: 4,
    },
    avarage: function() {
        sum = 0
        Object.values(this.grades).forEach( grade => {
            sum += grade;
    })
    return sum/Object.values(this.grades).length
    }
}

console.log(`Student: ${Student.name} ${Student.surname}, ${Student.nr_albumu}\nŚrednia z przedmiotów: ${Object.keys(Student.grades)} = ${Student.avarage()}`)

// zad 3
function Car(marka, model, year, color){
    this.marka = marka
    this.model = model
    this.year = year
    this.color = color
    this.speed = 100

    this.increaseSpeed = function(s = 10){
        this.speed += s
    }
    this.decreaseSpeed = function(s = 10){
        this.speed -= s
    }
    this.showInfo = function(){
        return `Marka: ${this.marka}\nModel: ${this.model}\nYear: ${this.year}\nColor: ${this.color}\nSpeed: ${this.speed}`
    }
    this.calculateAge = function(){
        const date = new Date()
        return date.getFullYear() - this.year
    }
}

porshe = new Car('porshe', 'asdfa', '2000', 'black')
console.log(porshe.showInfo())
porshe.increaseSpeed(50)
porshe.decreaseSpeed()
console.log(porshe.showInfo())

// zad4
console.log(`Age: ${porshe.calculateAge()}`)

// zad5
class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }
    getArea = () => {
        return this.length * this.width
    }
    getPerimeter = () => {
        return 2*(this.length + this.width)
    }
    isSquare = () => {
        return this.length == this.width
    }
}

r1 = new Rectangle(5, 10)
console.log(`area: ${r1.getArea()}\nperimeter: ${r1.getPerimeter()}\nis square: ${r1.isSquare()}`)
r2 = new Rectangle(5, 5)
console.log(`area: ${r2.getArea()}\nperimeter: ${r2.getPerimeter()}\nis square: ${r2.isSquare()}`)

// zad6
let length = document.getElementById("lenght")
let width = document.getElementById("width")

function createRect(){
    let a = length.value
    let b = width.value
    r = new  Rectangle(a, b)
    console.log(`area: ${r.getArea()}\nperimeter: ${r.getPerimeter()}\nis square: ${r.isSquare()}`)
}