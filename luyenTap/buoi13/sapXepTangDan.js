let numbers = [5, 1, 9, 8, 10];
let element

// Hàm sắp xếp  tăng dần
function tangDan(array, element) {
    // Bước 0: Kiểm tra xem mảng có rỗng không
    if (array.length === 0) {
        console.log("Mảng rỗng")
    } else {
        // Bước 1: Sắp xếp các phần tử trong mảng
        array.sort((a, b) => a - b);

// Bước 2: Lặp qua các phần tu trong mảng
        for (let i = 0; i < array.length - 1; i++) {
            // Nếu i < element < i + 1 -> Thêm phần tử đó vào sau i tức là tại vị trí i + 1
            if (array[i] < element && array[i + 1] > element) {
                array.splice(i + 1, 0, element);
                break;
            } else if (element > array[array.length - 1]) {
                array.push(element);
                break;
            } else if (element < array[0]) {
                array.unshift(element);
                break;
            }
        }

        return array;
    }

}

console.log(tangDan(numbers, 6))
