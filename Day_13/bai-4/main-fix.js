// Giả sử đã có mảng numbers đã sắp xếp tăng dần
let numbers = [1, 5, 8, 9, 10];
let element = 7;

//Bước 1: Tăng độ dài mảng
numbers.length += 1;

// Bước 2: Dời phần tử thủ công
let inserted = false;
for (let i = numbers.length - 2; i >= 0;  i--) {
    if (numbers[i] > element) {
        numbers[i + 1] = numbers[i];
    } else {
        numbers[i + 1] = element;
        inserted = true;
        break;
    }
}

//Bước 3: Nếu element nhỏ nhất, chèn đầu
if (!inserted) {
    numbers[0] = element;
}

console.log(numbers);