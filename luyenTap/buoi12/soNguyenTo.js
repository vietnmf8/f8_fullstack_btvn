// Đề bài: Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
// -> Số nguyên tố là số chia hết cho 1 và chính nó

/*
Ta có Ước của 36 = {1, 2, 3, 4, 6, 9, 18, 36}
Ta chỉ cần xét từ 2 -> 6 (Căn bậc 2 của 36) (Tìm một nửa)
- Không xét từ 1 vì  tất cả các số đều chia hết cho 1
 */


// Bước 1: Gọi số cần kiểm tra, và cắm cờ true/false
const soCanKiemTra = 7
let soNguyenTo = true


// Bước 2: Gọi i là khoảng có thể là ước của số cần kiểm tra -> Lặp qua i -> xem số đó có chia hết cho i không)
for (let i = 2; i <= Math.sqrt(soCanKiemTra); i++) {
    // Đặt cờ
    if (soCanKiemTra % i === 0) {
        soNguyenTo = false
        break;
    }
}

// Bước 3: Nếu true thì đó chính là số nguyên tố
if (soNguyenTo) console.log(`${soCanKiemTra} là số nguyên tố`)
else console.log(`${soCanKiemTra} không phải số nguyên tố`)

