/*
Đề bài: Kiểm tra một số xem có phải số chính phương không?
- Điều kiện để là số chính phương
    : Số nguyên dương (Bao gồm cả số )
    : là số  = bình phương của một số tự nhiên khác
 */

function kiemTraSoChinhPhuong(n) {
    // Bước 1: Kiểm tra điều kiện sai
    if (n < 0 || !Number.isInteger(n)) return `Số ${n} không phải là số chính phương`

    // // Bước 2: Kiểm tra điều kiện hợp lệ
    // if (Math.sqrt(n) % 1 === 0) return `Số ${n} là số chính phương`
    // return `Số ${n} không phải là số chính phương`

    //Bước 2: Lặp i sao cho thoả mãn i x i = n
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (i * i === n) return `Số ${n} là số chính phương`
    }
    return `Số ${n} không phải là số chính phương`
}

console.log(kiemTraSoChinhPhuong(4))

