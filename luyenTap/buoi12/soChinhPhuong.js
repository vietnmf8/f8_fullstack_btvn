/*
Kiểm tra một số xem có phải là số chính phương hay không?

Số chính phương là gì?
Là số tự nhiên được biểu diễn bằng bình phương của một số khác -> Vì vậy số chính phương luôn phải >= 0
Ví dụ: 16 = 4 x 4 = 4^2    -> 16 là số chính phương
       25 = 5 x 5 = 5^2    -> 25 là số chính phương

 */


function soChinhPhuong(n) {
    if (Math.sqrt(n) % 1 === 0) return `Số ${n} là số chính phương`
    return `Số ${n} không là số chính phương`
}

console.log(soChinhPhuong(17))