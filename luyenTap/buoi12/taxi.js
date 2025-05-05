// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền


// Bước 1: Gọi tổng số tiền , km
let totalTaxiFare = 0;  // Tổng tiền cước taxi
const kilometer = 150;  //Số km

// Bước 2: Xét điều kiện của số km tương ứng với số tiền

// Điều kiện 1: Nếu số km <= 1 -> giá: 15.000đ
if (kilometer <= 1) {
    totalTaxiFare = 15000 * kilometer;
    // Điều kiện 2: Nếu số 1 < số km <= 5 -> giá: 13.500đ
} else if (kilometer <= 5) {
    totalTaxiFare = 15000 + (kilometer - 1) * 13500;
    // Điều kiện 3: Nếu Số km > 5 -> giá: 11.000đ
} else {
    totalTaxiFare = 15000 + 4 * 13500 + (kilometer - 5) * 11000;
}

//Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
if (kilometer > 120) {
    totalTaxiFare = totalTaxiFare * 0.9
}

console.log(totalTaxiFare)



