/* Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
*  */

/*
* Số nguyên tố
* - Chia hết cho 1 và chính nó
* - Xét từ khoảng 2 đến căn bậc hai của số đó
*
* */

// Cho trước mảng số nguyên
const numbers = [1, 2, 3, 4, 5];
const soNguyenToNumbers = [];

//Viết hàm
// Hàm kiểm tra số đó có phải số nguyên tố không
function kiemTraSoNguyenTo(n) {

    // Bước 1: Kiểm tra điều kiện sai
    if (n <= 1 || !Number.isInteger(n)) return false

    // Bước 2: Lặp các số chia, bắt đầu từ 2 -> căn bậc 2 của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }

    // Bước 3: Return n
    return true
}

// Hàm tính trung bình các phần tử trong mảng
function getArgNumber(array) {
    let totalNumber = 0
    let argNumber = 0
    for (let i = 0; i < array.length; i++) {
        totalNumber += array[i]
    }
    return argNumber = totalNumber / array.length
}


/*--------------------------------------------------------------------------------------------*/

// Duyệt từng phần tử trong numbers -> Nếu là số nguyên tố thì thêm vào mảng soNguyenToNumbers
for (const item of numbers) {
    if (kiemTraSoNguyenTo(item)) {
        soNguyenToNumbers.push(item);
    }
}

// Nếu mảng soNguyenToNumbers rỗng -> tức là mảng gốc không có số nguyên tố
if (soNguyenToNumbers.length === 0) {
    console.log("Không có số nguyên tố")
}

console.log(getArgNumber(soNguyenToNumbers))

