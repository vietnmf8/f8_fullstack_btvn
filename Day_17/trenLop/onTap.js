/* Log ra những phép tính "+" có kết quả bằng 4 */
const arr = [1, 7, 3, 6, 5, 8, 2]
// // Gọi tổng là 4
// const sum = 4;
// // Lặp từng phần tử e trong arr
// for (const e of arr) {
//     // Gọi số hạng đầu tiên -> phần tử e trong mảng
//     const soHang = e;
//     const soHang2 = sum - e;
//
//     // // Dùng findIndex -> để tìm ra index của soHang2 tồn tại trong arr
//     // const i = arr.findIndex(e => e === soHang2);
//     // console.log(soHang2, i) // i trả về -1 -> khong tồn tại
//
//     // Dùng include
//     if (arr.includes(soHang2)) {
//         console.log(`${soHang} + ${soHang2} = 4`);
//     }
// }


/* Lấy ra vị trí các số cộng lại = 4  */
// Gọi tổng là 4
const sum = 8;
// Lặp từng phần tử e trong arr
for (const e of arr) {
    // Gọi số hạng đầu tiên -> phần tử e trong mảng
    const soHang = e;
    const soHang2 = sum - e;

    // // Dùng findIndex -> để tìm ra index của soHang2 tồn tại trong arr
    // const i = arr.findIndex(e => e === soHang2);
    // console.log(soHang2, i) // i trả về -1 -> khong tồn tại

    // Dùng include
    if (arr.includes(soHang2)) {
        // Dùng findIndex để tìm index
        const indexA = arr.findIndex(e => e === soHang);
        const indexB = arr.findIndex(e => e === soHang2);
        console.log(`STT: ${indexA} + STT: ${indexB} = ${sum}`);
    }
}