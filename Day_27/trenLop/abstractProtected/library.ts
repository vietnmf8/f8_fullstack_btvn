/*
    Lớp Library (Thư viện) gồm:
        - books: danh sách tất cả các sách trong thư viện
        - readers: danh sách tất cả các người đọc đã đăng ký
*/

// Interface: LibraryI
interface LibraryI {
    getBooks: () => number[];
    getReaders: () => number[];
    setBooks: (books: number[]) => void;
    setReaders: (readers: number[]) => void;
}


// Class: Library
class Library implements LibraryI {
    private books: number[];        // Lưu danh sách Id của sách
    private readers: number[];      // Lưu danh sách của reader


    constructor(books: number[], readers: number[]) {
        this.books = books;
        this.readers = readers;
    }

    //Getter
    getBooks(): number[] {
        return this.books;
    }
    getReaders(): number[] {
        return this.readers;
    }

    //Setter
    setBooks(books: number[]): void {
        this.books = books;
    }
    setReaders(readers: number[]): void {
        this.readers = readers;
    }

}