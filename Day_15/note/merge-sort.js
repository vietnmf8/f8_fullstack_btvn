const array = [38, 27, 43, 9, 82, 10]

// Hàm phân tách mảng lơớn thành các cặp mảng nhỏ
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(array))


// Hàm Merge này để ghép 2 mảng đã được sắp xếp
function merge(array1, array2) {
    let combinedArray = []; // Tạo hàm mới để gộp 2 hàm ban đầu
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < array1.length && rightIndex < array2.length) {
        if (array1[leftIndex] < array2[rightIndex]) {
            combinedArray.push(array1[leftIndex]);
            leftIndex++;
        } else {
            combinedArray.push(array2[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < array1.length) {
        combinedArray.push(array1[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < array2.length) {
        combinedArray.push(array2[rightIndex]);
        rightIndex++;
    }

    return combinedArray;
}



