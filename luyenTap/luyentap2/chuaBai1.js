/* Đề bài : Kiểm tra một tham số có phải một số hay không
- Xét typeof của nó
* */

// Tạo hàm
// function isInteger(n) {
//     if (!Number.isInteger(n)) {
//         return "Không phải số nguyên"
//     }
//     return "Là số nguyên"
// }

// Cách 2:
function isInteger(n) {
    // Kiểm tra kiểu xem có phải là number
    if (typeof n !== "number") {
        return "Không phải số"
    }
    // Nếu là số, nhưng là số thập phân
    if (n % 1 !== 0) {
        return "Khong phải là số nguyên"
    }

    //Còn lại là số nguyên
    else {
        return "Là số nguyên"
    }
}









