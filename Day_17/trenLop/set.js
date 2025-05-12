const a = [1, 1, 1, 2, 2, 3]
// Lọc trùng
const c = new Set(a)
// Ép kiểu từ Set -> Array
console.log(Array.from(c))