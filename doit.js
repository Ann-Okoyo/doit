// Create a function called getAvailable
// Books that
//  returns an array of all available
// books.
function getAvailableBooks(title){

 return title

}
let title=["Born a Crime","The great Gatsby","Blossoms of the Savannah"]
console.log(getAvailableBooks(title))


// Create a function getBooksByAuthor that takes 
// an author's name as an argument and
// returns an array of all books by that author.
function getBooksAuthor(name){

title.push(name)

}
let name =("Trevor Noah")
console.log(getBooksAuthor(name))

// Create a function addNewBook that takes a book 
// object as an argument and adds it
// to the library, ensuring that the new book
//  has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(book1){
    let book1 ={title:"The Merchants",author:"Louis Fletcher",publicationYear:2001}
    let book2={title:"Born a Crime",author:"Trevor Noah",publicationYear:2019}
    let book3={title:"The Great Gatsby",author:"F Scott FItzgerald",publicationYear:1925}
    let book4={title:"Blossoms of the Savannah",author:"Ole Karu",publicationYear:2017}
    
    addNewBook.push(book1)
}    
console.log(addNewBook())

// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkOut(booktitle){
   for(let i=0;i <getAvailableBooks.length; i++) {
    if  "Merchants at war" in getAvailableBooks{
        print("Book is available")
    }
    else{
        print("Book is not Available")
    }

   }

}
console.log(checkOut(booktitle))

console.log(checkOut("Merchants at war"))
// Create a function returnBook that takes a 
// book title as an argument and changes the
// book's isAvailable property to true. 
// If the book is not found in the library, 
// the function
// should return a message indicating 
// that the book does not belong to the library.
function returnBook(book3){
    if book3 ==getAvailableBooks{
        print(true)
    }
    else{
        print("Book doesnt belong in the library.")
    }
 
}
let book3={title:"The Great Gatsby",author:"F Scott FItzgerald",publicationYear:1925}
console.log(returnBook(book3))