// Dữ liệu sinh viên
const students = [
    {studentId: 1, name: "Nguyễn Văn A"},
    {studentId: 2, name: "Trần Thị B"},
    {studentId: 3, name: "Lê Văn C"},
    {studentId: 5, name: "Phạm Thị D"}
];

// Dữ liệu điểm thi
const scores = [
    {examId: 101, studentId: 1, subject: "Toán", score: 8.5},
    {examId: 102, studentId: 2, subject: "Toán", score: 7.5},
    {examId: 103, studentId: 3, subject: "Toán", score: 9.0},
    {examId: 104, studentId: 1, subject: "Văn", score: 7.0},
    {examId: 105, studentId: 4, subject: "Toán", score: 8.0}
];

function mergeJoin(arr1, arr2, key1, key2) {
    // Đảm bảo mảng đã sắp xếp theo khoá kết hợp
    const sortedArr1 = [...arr1].sort((a, b) => a[key1] - b[key1]);
    const sortedArr2 = [...arr2].sort((a, b) => a[key2] - b[key2]);

    let results = [];
    let i = 0, j = 0;

    while (i < sortedArr1.length && j < sortedArr2.length) {
        const val1 = sortedArr1[i][key1];   //1
        const val2 = sortedArr2[j][key2];   //1

        if (val1 < val2) {
            // Giá trị trong arr1 nhỏ hơn, tăng con trỏ arr1
            i++;
        } else if (val2 < val1) {
            // Giá trị trong arr2 nhỏ hơn, tăng con trỏ arr2
            j++;
        } else {
            // Giá trị bằng nhau - tìm thấy kết quả khớp
            // Lưu lại vị trí hiện tại, vì có thể có nhiều kết quả khớp
            let tempJ = j; //1

            //Kết hợp với tất cả các mục trong arr2 có cùng giá trị khoá
            while (tempJ < sortedArr2.length && sortedArr2[tempJ][key2] === val1) {
                //Tạo đối tượng kết quả
                let resultItem = {}

                //Sao chép thuộc tính từ đối tượng đầu tiên
                for (let prop in sortedArr1[i]) {
                    resultItem[prop] = sortedArr1[i][prop];
                }

                //Sao chép thuộc tính từ đối tượng thứ hai (tránh ghi đè)
                for (let prop in sortedArr2[tempJ]) { //    examId, studentId, subject, score
                    if (prop !== key2 || prop === key2 && key2 !== key1) {
                        //Thêm tiền tố nếu các thuộc tính khác bị trùng tên
                        const propName = resultItem.hasOwnProperty(prop) ? `${key2}_${prop}` : prop;
                        resultItem[propName] = sortedArr2[tempJ][prop];
                    }
                }

                results.push(resultItem);
                tempJ++
            }
            // Tăng con trỏ arr1
            j = tempJ
            i++;
        }

    }
    return results;
}

const result = mergeJoin(students, scores, "studentId", "studentId");
console.log(result);