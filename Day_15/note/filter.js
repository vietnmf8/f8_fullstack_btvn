const arr = [10, 12, 14, 16]
// Trung bình cộng: 13
// Viết hàm function tính điểm
const getArg = (arr) => { // arr là một tham số (có thể đặt tên bất kỳ)
    let sum = 0;
    for (const e of arr) { // e đại diện cho phần tử trong arr (có thể đổi tên bất kỳ). arr là mảng
        sum += e;
    }

    return sum / arr.length;
}
console.log(getArg(arr)); // truyền mảng //13

// Lấy ra những phần tử lớn 15 -> Lọc (Filter)
const results = arr.filter((e) => e > getArg(arr));
console.log(results) // [14, 16] -> mảng | 14: phần tử