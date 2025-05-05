const input = [7, 9, 8, 5, 6]

/*
ĐỀ BÀI:
- Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
 + Input: Mảng số nguyên
 + Output: Min, max

-> Dùng for duyệt qua mảng -> dùng câu điều kiện để tìm ra min, max
-> Dùng phương pháp đặt lính canh, coi giá trị min = max ban đầu = index = 0 -> i sẽ chạy tù index = 1
-> Max:
    + Gọi các phần tử trong mảng là i, nếu numbers[i] > max -> numbers[i] = max

-> Min:
    + Gọi các phần tử trong mảng là i, nếu numbers[i] < min -> numbers[i] = min

 */


// Bước 1: Đặt lính canh min, max cho mảng
let min = input[0];
let max = input[0];
let minIndex = 0;
let maxIndex = 0;

// Bước 2: Kiểm tra mảng rỗng
function minMax(input) {
    if (input.length === 0) {
        console.log("Mảng rỗng!")
    } else {
        for (let i = 0; i < input.length - 1; i++) {
            // Điều kiện min
            if (input[i] < min) {
                min = input[i];
                minIndex = i;
            }

            //Điều kiện max
            if (input[i] > max) {
                max = input[i];
                maxIndex = i;
            }
        }

        console.log(min, max)
        console.log(minIndex, maxIndex)
    }
}

minMax(input);


