import {BaseI, Base} from "./base";
/*
    Lớp Book (Sách) gồm các thuộc tính:
        - id: mã sách (kiểu int)
        - name: tên sách (kiểu string)
        - author: tác giả (kiểu string)
        - available: trạng thái còn hay đã được mượn (kiểu bool)
*/
// Interface: BookI
interface BookI extends BaseI {
    getAuthor: () => string;
    getAvailable: () => boolean;
    setAuthor: (author: string) => void;
    setAvailable: (available: boolean) => void;
}



// Class: Book
class Book extends Base implements BookI {
    private author: string;     // Tên tác giả
    private available: boolean; // Sách đã được mượn hay chưa

    // Khởi tạo đối tượng Book
    constructor(id: number, name: string, author: string, available: boolean) {
        super(id, name);
        this.author = author;
        this.available = available;
    }

    //Getter
    getAuthor(): string {
        return this.author;
    }
    getAvailable(): boolean {
        return this.available;
    }

    //Setter
    // Không thay đổi Id -> không có setId
    setAuthor(author: string): void {
        this.author = author;
    }
    setAvailable(available: boolean): void {
        this.available = available;
    }

    toString() {
        return `Reader {
            id = ${this.getId()}
            name = ${this.getName()}
            author = ${this.getAuthor()}
            available = ${this.getAvailable()}
        }`;
    }
}