/*
    Lớp Reader (Người đọc) gồm các thuộc tính:
        - id: mã người đọc (kiểu int)
        - name: tên người đọc (kiểu string)
        - borrowed_books: danh sách các sách đang được mượn (danh sách các đối tượng Book)
*/
import {BaseI, Base} from "./base";

// Interface: ReaderI
interface ReaderI extends BaseI {
    getBorrowedBooks(): number[];
    setBorrowedBooks(borrowedBooks: number[]): void;
}


//Class: Reader
class Reader extends Base implements ReaderI {
    private borrowedBooks: number[];    // Mảng chứa danh sách ID của sách

    // Khởi tạo đối tượng Reader
    constructor(id: number, name: string, borrowedBooks: number[]) {
        super(id, name);
        this.borrowedBooks = borrowedBooks;
    }

    //Getter
    getBorrowedBooks(): number[] {
        return this.borrowedBooks;
    }

    //Getter
    setBorrowedBooks(borrowedBooks: number[]): void {
        this.borrowedBooks = borrowedBooks;
    }

    toString() {
        return `Reader {
            id = ${this.getId()}
            name = ${this.name}
            borrowedBooks = ${this.getBorrowedBooks()}
        }`;
    }
}

const reader = new Reader(1, 'Viet', [1, 2, 3])


