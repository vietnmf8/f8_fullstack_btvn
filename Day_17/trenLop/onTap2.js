const arr = [1, 7, 3, 6, 5, 8, 2]

const hashMap = {}
for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = i;
}
/*

hashMap = {
   1: 0,
   2: 1,
   3: 2,
   5: 3,
   6: 4,
   7: 5,
   8: 6,
}

 */

const sum = 8;
// Lặp từng phần tử e trong arr
for (const e of arr) {
    // Gọi số hạng đầu tiên -> phần tử e trong mảng
    const soHang = e;
    const soHang2 = sum - e;
    // Tạo hashMap
    if (hashMap[soHang2]) {
        const indexA = hashMap[soHang];
        const indexB = hashMap[soHang2];
        console.log(`STT: ${indexA} + STT: ${indexB} = ${sum}`);
    }
}