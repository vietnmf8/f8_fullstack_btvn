/* Dinh nghia interface cha */
interface Master {
    id: number;
    name: string;
}
/* Dinh nghi cac interface con */
interface Person extends Master {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    setId: (id: number) => void
}

/* Tao class PersonEntity */
class PersonEntity {
    //private: Pham vi truy cap (bao mat)
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
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


}

