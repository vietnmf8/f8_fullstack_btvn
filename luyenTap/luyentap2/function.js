/*
Đề bài:
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
Bước 1: Sắp xếp mảng theo thứ tự tăng dần
Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */


// Cho trước một mảng số nguyên, và element cần thêm vào
const array = [1, 2, 4, 5, 8, 9, 5]

// Tạo hàm: Truyền mảng và truyền element cần thêm
function sortedArray(array, element) {
    // Bước 1: Kiểm tra mảng rỗng
    if (array.length === 0) {
        return "Mảng rỗng";
    }

    // Bước 2: Sắp xếp mảng đã cho
    const sortedArray = array.sort((a, b) => a - b);    /* [1, 2, 4, 5, 5, 8, 9] */

    // Bước 3: Chèn vào các vị trí trong mảng -> Duyệt từng phần tử trong mảng array
    for (let i = 0; i < sortedArray.length; i++) {
        //Đầu mảng
        if (element <= sortedArray[0]) {
            sortedArray.unshift(element);
            break;
        }
        // Cuối mảng
        else if (element >= sortedArray[sortedArray.length - 1]) {
            sortedArray.push(element);
            break;
        }
        // Giữa mảng
        else if (sortedArray[i] <= element && element <= sortedArray[i + 1]) {
            sortedArray.splice(i + 1, 0, element);
            break;
        }
    }

    // Bước 4: Return sortedArray
    return sortedArray;
}

//Gọi hàm
console.log(sortedArray(array, 2));
