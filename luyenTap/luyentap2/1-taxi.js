/*
Tính tiền taxi:

Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
 */


// // Bước 1: Khởi tạo biến
// const km = 150 /* Giả sử chạy được 150km */
// let total = 0
//
// // Bước 2: Dùng if else để kiểm tra các điều kiện điều kiện
// if (km <= 1) {
//     total = km * 15000
// } else if (km <= 5) { /* 1 < số km ≤ 5 giá 13500đ */
//     total = 15000 + (km - 1) * 13500
// } else {
//     total = 15000 + 4 * 13500 + (km - 5) * 11000
// }
// /* Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền */
// if (km > 120) {
//     total = total * 0.9
// }
//
// console.log(total)

