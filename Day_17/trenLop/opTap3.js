const arr = [1, 7, 3, 6, 5, 8, 2]

/* Tìm số tự nhiên lớn hơn 0, không nằm trong array */
// Gọi số tự nhiên đó bắt đầu  = 1
let result = 1;

while (arr.includes(result)) {
    result++
}

console.log(result)