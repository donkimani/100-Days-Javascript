/*Build a library system with books, members, borrowing logic using OOP.
Requirements: Classes for Book, Member, Library; methods for checkout, return, search.*/


class Member{
    constructor(name){
        this.name = name;
    }
    getDetails() {
    return `${this.name}`;}
}

class Books{
    constructor(title){
        this.title = title;
    }
    getDetails() {
    return `${this.title}`;
  }
}

class Library{
    constructor(){
        this.books = [];
        this.members = [];
    }

    addMember(member){
        this.members.push(member);
    }
    addBook(book){
        this.books.push(book);
    }

    listBooks(){
        
        return this.books.map((book) => book.getDetails()).join('\n');
    }

    searchBook(title) {
        const found = this.books.some(
            book => book.title.toLowerCase() === title.toLowerCase()
        );
        return found ? "book available" : "book not available";
    }
}

const book1 = new Books('PIRATES');
const book2 = new Books('pirates v2');
const libu = new Library();
libu.addBook(book1)
libu.addBook(book2)
console.log(libu.listBooks());
console.log(libu.searchBook('pirates'));
console.log(libu.searchBook('piratesv2'));
