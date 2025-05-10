/*
Đề bài: Viết hàm tìm số lớn nhâ và index của nó

 */
// Bước 1: Cho trước 1 mảng số nguyên bất ky
const array = [1, 5, 7, 4, 8, 2]

// Tạo hàm
function getMaxNumber(array) {
    // Đặt lính canh:
    let max = array[0];
    let index = 0

    // Bước 2: Lặp các phần tử trong mảng -> So sánh với max
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            index = i;
        }
    }

    // Bước 3: Trả về đáp án
    return {
        maxNumber: max,
        maxIndex: index,
    }
}

//Gọi hàm
console.log(getMaxNumber(array))







