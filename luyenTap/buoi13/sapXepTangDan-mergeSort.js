// let numbers = [5, 1, 9, 8, 10];
let numbers = [5, 1, 9, 8, 10];

//Thuật toán Merge Sort là thuật toán gộp 2 mảng ĐÃ ĐƯỢC SẮP XẾP


// Tạo hàm để nối 2 mảng đã được sắp xếp
function merge(sortedArray1, sortedArray2) {
    const results = [];
    let i = 0; //index của sortedArray1
    let j = 0;  //index của sortedArray2
    while (i < sortedArray1.length && j < sortedArray2.length) {
        if (sortedArray1[i] < sortedArray2[j]) {
            results.push(sortedArray1[i]);
            i++;
        } else {
            results.push(sortedArray2[j]);
            j++;
        }
    }
    while (i < sortedArray1.length) {
        results.push(sortedArray1[i]);
        i++;
    }
    while (j < sortedArray2.length) {
        results.push(sortedArray2[j]);
        j++;
    }
    return results;
}


// Tạo hàm để phân tách mảng thành 1 array
function mergeSort(array) {
    // Bước 1: Dựng base case -> Nếu mảng có 1 phần tử được sắp xếp -> return
    if (array.length === 1) {
        return array;
    }

    // Bước 2: Thực hiện chia đôi mảng
    // Lấy phần ở giữa
    let mid = Math.floor((array.length / 2));
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort(numbers))