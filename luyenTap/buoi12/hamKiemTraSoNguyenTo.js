// Số nguyên tố chia hết cho 1 và chính nó


function kiemTraSoNguyenTo(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `Số ${n} không phải là số nguyên tố`
        }
    }
    return `Số ${n} là số nguyên tố`
}

console.log(kiemTraSoNguyenTo(7))