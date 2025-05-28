/* Dinh nghia interface cha */
interface Master {
    // id: number;
    // name: string;
}
/* Dinh nghi cac interface con */
interface Person extends Master {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    setId: (id: number) => void
}

/* Tao class PersonEntity */
// Luu y : conflict khi dung private
class PersonEntity implements Person {
    //private: Pham vi truy cap (bao mat)
    private id: number
    private name: string
    // id: number
    // name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    // Class trien khai tu Interface -> Dua het phuong thuc tu Interface xuong Class
    //Trong Class: Phuong thuc tra ve mot number -> Kieu du lieu cua Output: number
    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setId(id: number): void {
        this.id = id
    }

    setName(name: string): void {
        this.name = name
    }

    toMyString() {
        return `PersonEntity (id: ${this.getId()}, name: ${this.getName()})`
    }
}


/* Khai bao */
// Class
const personEntity: PersonEntity = new PersonEntity(1, 'Viet')
// const personEntity: Person -> Sai vi Person khong co toMyString
console.log(personEntity.toMyString())


