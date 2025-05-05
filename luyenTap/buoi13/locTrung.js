// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý


// -> Tạo mảng output rỗng [] -> So sánh với mảng gốc:
//     + Nếu mảng input không trùng giá trị với mảng output -> thêm giá trị từ input vào output
// + Ngược lại, nếu mảng input có giá trị trùng với output -> Không thêm vào
//     -> Gán cờ!!! tạo biến duplicate : true/false để xác định xem có bị trùng số không?


const input = [1, 1, 3, 2, 5]
// Kết quả: output = [1, 2, 3, 5]

let output = []


//Hàm để kiểm tra xem co trùng lặp không
function duplicate(input) {
    // Bước 1: Kiểm tra input xem có rỗng không
    if (input.length === 0) console.log("Rỗng")
    else {
        // Bước 2: Lặp các phần tử trong input (inItem)
        for (let inItem of input) {
            // Cắp cờ kiểm tra sự trùng lặp
            let isDuplicate = false //Chưa trùng lặp
            // Bước 3: Kiểm tra phần tử trong output có bị trùng lặp không
            for (let outItem of output) {
                if (inItem === outItem) {
                    isDuplicate = true //Trùng lặp
                    break;
                }
            }
            // Bước 4: Nếu không trùng, thì thêm phần tử inItem vào output
            if (!isDuplicate) {
                output.push(inItem);
            }
        }

        const result = output;
        return result;
    }

}

console.log(duplicate(input))




