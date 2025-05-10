/* Đề bài:
Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
 */

/*
Điều kiện của số nguyên tố:
- Số đó phải lớn hơn 1 (n >= 1)
- Số đó là số tự nhiên (1, 2, 3, 4...)
- Số đó chỉ chia hết cho 1 và chính nó
 */

function kiemTraSoNguyenTo(n) {

    // Bước 1: Kiểm tra điều kiện sai
    if (n <= 1 || !Number.isInteger(n)) return `Số ${n} không phải là số nguyên tố`

    // Bước 2: Lặp các số chia, bắt đầu từ 2 -> căn bậc 2 của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return `Số ${n} không phải là số nguyên tố`
    }

    // Bước 3: Return n
    return `Số ${n} là số nguyên tố`
}

console.log(kiemTraSoNguyenTo(7))

