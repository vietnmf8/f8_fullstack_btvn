//TypeScript -> la Javascript nhung ro rang, chat che ve kieu du lieu
const a = 1 // -> Javascript
const b: number = 1 // -> TypeScript
// const b: number = '1' -> bao loi vi dang la kieu number
//---------------------------------------------------------------

/* Number */
const numb: number | null = 1 // numb vua nhan kieu number, vua nhan kieu null

/* String */
const str: string = 'Viet'

/* Boolean */
const bool: boolean = false

/* Null */
const nul: null = null

/* Tong hop: synthetic */
const synthetic: any = 12 //Khong khuyen khich

//---------------------------------------------------------------

/* Array */ // Array cung la 1 object
// Number
const arrayNumber: number[] = [1, 2, 3, 4] // Cach 1
const arrayNumber2: Array<number> = [1, 2, 3, 4] // Cach 2
// const arrayNumber3: Object<number> = [1, 2, 3, 4] // Cach 3 - Thuong khong khuyen khich

// String
const arrayString: string[] = ['a', 'b', 'c']

// String or Number
const arraySynthetic: Array<number | string> = [1, 'a', 2, 'b']

/* Object (interface) */
// Buoc 1: Dinh nghia interface, kieu du lieu cho tung bien, doi tuong
interface Member {
    id: number;
    name: string;
}

// Buoc 2: Tao object
const obj: Member = {
    id: 1,
    name: 'Viet',
}


