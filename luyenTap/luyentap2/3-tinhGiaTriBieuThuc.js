/* Đề bài:
Cho trước số nguyên n. Tính giá trị biểu thức
S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
 */

// Bước 1: Khởi tạo số nguyên n = 10, tổng S ban đầu = 0
const n = 4
let S = 0

// Bước 2: Lặp qua các phần tử trong trong S để tính tổng
for (let i = 1; i <= n; i++) {
    S += i * (i + 1)
}

