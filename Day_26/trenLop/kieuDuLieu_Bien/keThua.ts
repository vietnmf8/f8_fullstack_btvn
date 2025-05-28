/* Object (interface) */

// Dinh nghia interface cha
interface Master {
    id: number;
    name: string;
}
// Dinh nghi cac interface con
interface Person extends Master {
    girlFriend: Master; //kieu Master la kieu obj {id, name}
    // Vi Person co girlFriend -> neu girlFriend: Person -> vo ly -> girlFriend khong the co girlFriend
}
interface Product extends Master {}


const obj: Person = {
    id: 1,
    name: 'Viet',
    girlFriend: {
        id: 2, name: 'Quynh'
    }
}

/* Object in Array */
const persons: Person[] = [
    {
        id: 1,
        name: 'Viet',
        girlFriend: {
            id: 2, name: 'Quynh'
        }
    }
]
// Tai sao lai la Person[]
// Number[] -> Tra ra mot mang, phan tu ben trong la kieu number
// Person[] -> Tra ra mot mang, phan tu ben trong la kieu person, ma person la kieu object duoc extend tu Master
// -> Person[] -> Trara mot mang, kieu object