/* Dinh nghia interface cha */
interface Master {
    id: number;
    name: string;
}
/* Dinh nghi cac interface con */
interface Person extends Master {
    // eat() {
    //     console.log('Xin chao')
    // }
    // Gia su 'eat' vao mot ham, khong truyen input, khong tra ve output -> kieu du lieu Output : void
    eat: () => void
    getName: () => string
    setName: (name: string) => void // -> this.name = name (Toan tu gan) -> nen khong tra ve gi
}

/* Ket hop voi Class */
class PersonEntity {
    //private: Pham vi truy cap (bao mat)
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

