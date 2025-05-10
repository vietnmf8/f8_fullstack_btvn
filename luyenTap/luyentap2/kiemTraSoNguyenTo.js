/*
Kiêm tra số nguyên tố:
+ Số lớn hơn 1
+ Chia hết cho 1 và chính nó
 */


function soNguyenTo(n) {
    //Kiểm tra điều kiện sai
    if (n <= 1 || !Number.isInteger(n)) {
        return "Không phải số nguyên tố"
    }
    // Duyệt từng phần tử từ 2 đến căn bậc hai của số đó
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Không phải số nguyên tố"
        }
    }
    //return
    return "Số nguyên tố"
}

console.log(soNguyenTo(1));