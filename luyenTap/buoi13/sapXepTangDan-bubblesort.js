let numbers = [9, 1, 10, 8, 5];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // arr.length - 1 : không cần tính phần tử đầu tiên (sau khi đã nổi bọt)
        for (let j = 0; j < arr.length - 1 - i; j++) { // Sắp xếp và swap
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));