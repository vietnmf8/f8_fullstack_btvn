/* Arrow Function */
const getMaxNumber = (numbers: number[]): number => {
    return Math.max(...numbers)
}

// (numbers: number[]): number:
// Input (Tham so): Danh sach number -> kieu: number[] (Array)
// Output: return tra ve 1 number -> kieu: number


/* Function truyen thong */
// Nhung co mot vai truong hop se su dung
const getMinNumber: (numbers: number[]) => number = (numbers: number[]): number => {
    return Math.min(...numbers)
}

// Khai bao kieu du lieu: Function
//getMinNumber: (numbers: number[]) => number
//    function: (input: typeData) => output


// Kieu du lieu cua bien nay -> tra ve 1 so vi function tra ve 1 so
const maxNumb: number = getMaxNumber([1, 2, 3 ,4])
