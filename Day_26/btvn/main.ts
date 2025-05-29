/* Định nghĩa Interface Cha */
interface Master {
    id: number;
    name: string;
}

/* Định nghĩa các Interface con */


/* Đối tượng Book - Sách */
interface Ibook {
    // Getter -> Truy cập thuộc tính
    getId(): number;
    getName(): string;
    getAuthor(): string;
    // Kiểm tra trạng thái có còn hay đã được mượn
    isAvailable(): boolean;
    // Setter -> Thay đổi thuộc tính
    setAvailable(status: boolean): void;
    // Hiển thị thông tin
    getBookInfo(): string;
}

/* Đối tượng Reader - Người đọc */
interface IReader {
    // Getter -> Truy cập thuộc tính
    getId(): number;
    getName(): string;
    // Lấy danh sách đang mượn
    getBorrowedBooks(): Book[];
    // Thêm sách vào danh sách mượn
    addBorrowedBook(book: Book): void;
    // Xoá sách khỏi danh sách mượn
    removeBorrowedBook(bookId: number): boolean;
}

/* Class Book */
class Book implements Ibook{
    private id: number
    private name: string
    private author: string
    private available: boolean

    // Khởi tạo đối tượng Book
    constructor(id: number, name: string, author: string, available: boolean = true) {
        this.id = id
        this.name = name
        this.author = author
        this.available = available
    }


    // Getter
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getAuthor(): string {
        return this.author;
    }
    isAvailable(): boolean {
        return this.available;
    }
    setAvailable(status: boolean): void {
        this.available = status;
    }
    getBookInfo(): string {
        const status = this.available ? "Có sẵn" : "Đã được mượn"
        return `Sách [ID: ${this.id}] "${this.name}" của tác giả ${this.author} - Trạng thái: ${status}`;
    }
}

/* Class Reader */
class Reader implements IReader {
    private id: number
    private name: string
    // Danh sách mượn của Reader
    private borrowed_books: Book[] = [];

    // Khởi tạo đối tượng reader
    constructor(id: number, name: string, borrowedBooks: Book[]) {
        this.id = id;
        this.name = name;
        this.borrowed_books = [];
    }

    //Getter
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getBorrowedBooks(): Book[] {
        return this.borrowed_books
    }
    addBorrowedBook(book: Book): void {
        // Tìm xem: sách đã có  trong danh sách đó chưa
        let existingBook: Book | undefined = undefined;
        // Duyệt từng phần tử trong mảng borrowed_books
        for (const borrowedBook of this.borrowed_books ) {
            if (borrowedBook.getId() === book.getId()) {
                existingBook = borrowedBook;
                break
            }
        }

        // Nếu existingBook === undefined
        if (!existingBook) {
            this.borrowed_books.push(book);
            console.log(`Đã thêm sách: ${book.getName()} vào danh sách mượn của ${this.name}`)
        } else {
            console.log(`Sách ${book.getName()} đã có trong danh sách mượn`)
        }
    }

    removeBorrowedBook(bookId: number): boolean {
        // danh sách mượn ban đầu
        const initialLength = this.borrowed_books.length;
        // Tạo danh sách mới không chứa sách cần xoá
        const newBorrowedBooks: Book[] = [];
        for (const borrowedBook of this.borrowed_books) {
            if (borrowedBook.getId() !== bookId) {
                newBorrowedBooks.push(borrowedBook);
            }
        }
        // Cập nhật mảng: this.borrowed_books
        this.borrowed_books = newBorrowedBooks;
        // Kiểm tra xem sách đã trả chưa
        const removed = this.borrowed_books.length < initialLength;
        if (removed) {
            console.log(`Đã trả sách ID: ${bookId} từ danh sách mượn của ${this.name}`);
        }
        return removed;
    }
    getReaderInfo(): string {
        let borrowedInfo: string = 'Không có sách nào'
        if (this.borrowed_books.length > 0) {
            const bookNames: string[] = []
            for (const borrowedBook of this.borrowed_books) {
                bookNames.push(`${borrowedBook.getName()}`);
            }
            borrowedInfo = bookNames.join(', ');
        }
        return `Người đọc [ID: ${this.id}] - ${this.name} - Đang mượn (${borrowedInfo})`;
    }
}

/* Test 1 */
// Khởi tạo
// const book1 = new Book(1, 'Tam Cam', 'Viet')
// const book2 = new Book(2, 'Thanh Giong', 'Nam')
// const reader = new Reader(1, 'Minh Viet', [])

// // Thêm sách
// reader.addBorrowedBook(book1)
// reader.addBorrowedBook(book2)
// console.log(reader.getReaderInfo())

// // // Trả sách
// reader.removeBorrowedBook(1)
// console.log(reader)

/* Xử lý các yêu cầu */
class Library {
    private books: Book[] = []; // Tất cả sách trong thư viện
    private readers: Reader[] = []; // Danh sách người đọc

    constructor(books: Book[], readers: Reader[]) {
        this.books = books;
        this.readers = readers;
    }
    // Thêm sách vào thư viện
    addBook(book: Book): void {
        // Tìm xem đã có sách đó chưa?
        let existingBook: Book | undefined = undefined;
        for (const bookE of this.books) {
            if (bookE.getId() === book.getId()) {
                existingBook = bookE;
                break;
            }
        }

        // Chỉ thêm nếu chưa có
        if(!existingBook) {
            this.books.push(book);
            console.log(`Đã thêm sách: ${book.getBookInfo()}`);
        } else {
            console.log(`Sách: ID ${book.getId()} đã tồn tại`);
        }
    }

    // Thêm người đọc mới
    addReader(reader: Reader): void {
        // Tìm xem có người đọc với id này chưa
        let existingReader: Reader | undefined = undefined;
        for (const readerE of this.readers) {
            if (readerE.getId() === reader.getId()) {
                existingReader = readerE;
                break;
            }
        }

        // Chỉ thêm nếu chưa có id
        if(!existingReader) {
            this.readers.push(reader);
            console.log(`Đã thêm người đọc: ${reader.getReaderInfo()}`)
        } else {
            console.log(`Người đọc với ID: ${reader.getId()} đã tồn tại`);
        }
    }

    // Tìm người đọc theo Id
    private findReaderById(readerId: number):Reader | undefined {
        for (const readerE of this.readers) {
            if (readerE.getId() === readerId) {
                return readerE;
            }
        }
        return undefined;
    }
    // Tìm sách theo Id
    private findBookById(bookId: number):Book | undefined {
        for (const bookE of this.books) {
            if (bookE.getId() === bookId) {
                return bookE;
            }
        }
    }

    // Cho mượn sách
    borrowBook(readerId: number, bookId: number): boolean {
        // Tìm người đọc
        const reader = this.findReaderById(readerId);
        if (!reader) {
            console.log(`Không tìm thấy người đọc với ID: ${readerId}`)
            return false;
        }

        // Tìm sách
        const book = this.findBookById(bookId);
        if (!book) {
            console.log(`Không tìm thấy sách với Id: ${bookId}`)
            return false;
        }

        // Kiểm tra sách có sẵn không
        if (!book.isAvailable()) {
            console.log(`Sách ${book.getName()} khong có sẵn`);
            return false;
        }

        // Mượn sách
        book.setAvailable(false) //Đánh dấu sách đã mượn
        reader.addBorrowedBook(book);
        console.log(`${reader.getName()} đã mượn sách ${book.getName()} thành công`)
    }

    // Tra sách
    returnBook(readerId:number, bookId:number):boolean {
        // Tìm người đọc
        const reader = this.findReaderById(readerId);
        if (!reader) {
            console.log(`Không tìm thấy người đọc với ID: ${readerId}`)
            return false;
        }

        // Tìm sách
        const book = this.findBookById(bookId);
        if (!book) {
            console.log(`Không tìm thấy sách với Id: ${bookId}`)
            return false;
        }

        // Kiểm tra người đọc có mượn sách không
        let hasBorrowedBook = false;
        const borrowedBooks = reader.getBorrowedBooks()
        for (const borrowedBookE of borrowedBooks) {
            if (borrowedBookE.getId() === bookId) {
                hasBorrowedBook = true;
                break;
            }
        }

        if (!hasBorrowedBook) {
            console.log(`${reader.getName()} không mượn sách ${book.getName()}`);
            return false;
        }

        // Trả sách
        book.setAvailable(true);
        reader.removeBorrowedBook(bookId);
        console.log(`${reader.getName()} đã trả sách ${book.getName()} thành công`);
        return true;
    }
}
