/*
Đề bài:
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
 */

// BƯỚC 1: Tạo một mảng bất kỳ và mảng kết quả, gắn cờ lọc
const array = [1, 2, 3, 1, 3, 4, 5]
const result = []

// Tạo hàm
function getOverLap(array) {
    //Bước 1.1: Kiểm tra mảng array xem có rỗng hay không
    if (array.length === 0) return `Mảng rỗng`

    // BƯỚC 2: Duyệt từng phần tử trong mảng array
    for (const itemArray of array) {
        // Gắn cờ -> Giả sử mặc định ban đầu sẽ là không trùng lặp. Ta có:
        let overlap = false;

        //BƯỚC 3: Duyệt từng phần tử trong mảng result
        for (const itemResult of result) {
            // Kiểm tra điều kiện trùng
            if (itemArray === itemResult) {
                overlap = true;
                break;
            }
        }

        //BƯỚC 4: Push phần tử từ mảng array sang result nếu không trùng
        if (!overlap) {
            result.push(itemArray);
        }
    }
    // BƯỚC 5: Return result
    return result
}

console.log(getOverLap(array))