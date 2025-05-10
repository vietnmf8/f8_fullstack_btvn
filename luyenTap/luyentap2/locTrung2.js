const arr = [1, 2, 3, 4, 5, 1, 2, 3]
const results = []

// // Bước 1: Tạo hàm:
// function filterArr(arr) {
//     // Kiểm tra điều kiện mảng rỗng
//     if (arr.length === 0) return "Mảng rỗng"
//
//     // Duyệt từng phần tử trong arr
//     for (const arrItem of arr) {
//         // Gắn cờ -> Mặc định là khong trùng
//         let duplicate = false
//         // Duyệt từng phần tử trong results
//         for (const resultItem of results) {
//             if (arrItem === resultItem) {
//                 duplicate = true;
//                 break;
//             }
//         }
//         // Nếu không trùng thì push
//         if (!duplicate) {
//             results.push(arrItem);
//         }
//     }
//
//     return results;
// }
//
//
// console.log(filterArr(arr))


// Cách 2: -> Sử dụng: Include

for (const item of arr) {
    if (!results.includes(item)) {
        results.push(item)
    }
}

console.log(results)