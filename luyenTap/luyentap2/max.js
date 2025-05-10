/* Tìm số lớn nhất trong mảng */
const arr = [1, 2, 3, 4, 5]

function getMaxNumber(arr) {
    // Kiểm tra điều kiện sai
    if (arr.length === 0) {
        console.log("Mảng rỗng")
    }

    // Gắn cờ
    let max = arr[0];
    let maxIndex = 0;

    // Bước 1: Duyệt từng phần tử trong mang
    for (let i = 0; i < arr.length; i++) {


        // So sánh các phần tử với cờ
        if (max <= arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }

    // Bước 2: return max
    return max;
}

console.log(getMaxNumber(arr))