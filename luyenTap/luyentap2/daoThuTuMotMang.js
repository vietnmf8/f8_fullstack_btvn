/*Đề bài
* Đảo thứ tự các phần tử trong mảng
*
*
* */

const arr = [1, 4, 3, 4, 5];

// Tạo hàm đảo phần tử trong mảng

function reversedArray(arr) {
    // Bước 1: Tạo một mảng mới là mảng kết quả cần tìm
    const results = [];
    // Bước 2: Duyệt từng phần tử từ cuối về đầu
    for (let i = arr.length - 1; i >= 0; i--) {
        // Bước 3: Push ngược là xong
        results.push(arr[i])
    }
    // Bước 4: Return
    return results;
}

console.log(reversedArray(arr));