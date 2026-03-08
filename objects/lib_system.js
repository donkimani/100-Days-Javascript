class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;      // Track availability
    }

    getDetails() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})` +
               (this.isAvailable ? ' [Available]' : ' [Borrowed]');
    }
}

class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];       // Stores Book objects
    }

    getDetails() {
        const borrowedTitles = this.borrowedBooks.map(b => b.title).join(', ');
        return `${this.name} (ID: ${this.memberId}) - Borrowed: ${borrowedTitles || 'None'}`;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Add a member to the library
    addMember(member) {
        this.members.push(member);
    }

    // Search books by title (case‑insensitive, partial match)
    searchBooks(titleQuery) {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(titleQuery.toLowerCase())
        );
    }

    // Find a member by ID
    findMemberById(memberId) {
        return this.members.find(member => member.memberId === memberId);
    }

    // Find a book by ISBN (unique identifier)
    findBookByIsbn(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    // Checkout a book to a member
    checkout(memberId, isbn) {
        const member = this.findMemberById(memberId);
        if (!member) {
            return `Member with ID ${memberId} not found.`;
        }

        const book = this.findBookByIsbn(isbn);
        if (!book) {
            return `Book with ISBN ${isbn} not found.`;
        }

        if (!book.isAvailable) {
            return `Book "${book.title}" is already borrowed.`;
        }

        // Mark book as unavailable and add to member's borrowed list
        book.isAvailable = false;
        member.borrowedBooks.push(book);

        return `Member ${member.name} borrowed "${book.title}". Return due in 14 days.`;
    }

    // Return a book
    returnBook(memberId, isbn) {
        const member = this.findMemberById(memberId);
        if (!member) {
            return `Member with ID ${memberId} not found.`;
        }

        const book = this.findBookByIsbn(isbn);
        if (!book) {
            return `Book with ISBN ${isbn} not found.`;
        }

        // Check if the member actually borrowed this book
        const index = member.borrowedBooks.findIndex(b => b.isbn === isbn);
        if (index === -1) {
            return `Member ${member.name} did not borrow "${book.title}".`;
        }

        // Remove from member's list and mark as available
        member.borrowedBooks.splice(index, 1);
        book.isAvailable = true;

        return `Member ${member.name} returned "${book.title}".`;
    }

    // List all books with their status
    listBooks() {
        return this.books.map(book => book.getDetails()).join('\n');
    }

    // List all members with their borrowed books
    listMembers() {
        return this.members.map(member => member.getDetails()).join('\n');
    }
}

// -------------------- Example Usage --------------------
const library = new Library();

// Create books
const book1 = new Book('Pirates of the Caribbean', 'Ted Elliott', '978-0-345-12345-6');
const book2 = new Book('Kim Jong: A Biography', 'Anna Fifield', '978-1-538-12345-7');
library.addBook(book1);
library.addBook(book2);

// Create members
const member1 = new Member('Don', 'M001');
const member2 = new Member('Raiya', 'M002');
library.addMember(member1);
library.addMember(member2);

// Search for books
console.log('Search for "pirates":');
console.log(library.searchBooks('pirates').map(b => b.getDetails()));

// Checkout
console.log('\n' + library.checkout('M001', '978-0-345-12345-6'));
console.log(library.checkout('M001', '978-0-345-12345-6')); // Try to borrow again

// List books after checkout
console.log('\nAll books:');
console.log(library.listBooks());

// Return the book
console.log('\n' + library.returnBook('M001', '978-0-345-12345-6'));
console.log(library.returnBook('M001', '978-0-345-12345-6')); // Return again

// List members with their borrowed books
console.log('\nAll members:');
console.log(library.listMembers());