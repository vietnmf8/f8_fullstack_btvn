const students = [
    {name: "An", class: "12A1", score: 8.5},
    {name: "Bình", class: "12A1", score: 9.2},
    {name: "Cường", class: "12A2", score: 7.5},
    {name: "Dung", class: "12A2", score: 9.0},
    {name: "Em", class: "12A3", score: 8.0}
]

// Kết quả mong muốn:
// [
//   { class: "12A1", topStudent: "Bình", score: 9.2 },
//   { class: "12A2", topStudent: "Dung", score: 9.0 },
//   { class: "12A3", topStudent: "Em", score: 8.0 }
// ]


// Tạo hàm tìm số lớn nhất trong mảng
const getMaxNumber = (array) => {
    let max = array[0];
    // Bước 1: Lặp qua các item trong array, đặt lính canh max = item đầu tiên (array[0])
    for (const item of array) {
        // Bước 2: So sánh các item trong array với max, nếu lớn hơn thì cập nhật max
        if (item > max) {
            max = item;
        }
    }
    // Kết quả trả về max
    return max;
}


// Tạo hashMap, gom các học sinh (value) vào một lớp (key)
const hashMap = {};
// Bước 1: Lặp các item trong students
for (const student of students) {
    // Bước 2: Lấy ra các value để thêm vào hashMap
    const className = student.class;
    const studentName = student.name;
    const score = student.score;
    // Bước 3: Nếu trong hashmap chưa có key là class, thì thêm mới key, value
    if (!hashMap[className]) {
        hashMap[className] = [];    //-> value là một mảng, Không phải là {} vì có thể ghi đè, còn [] sẽ dùng lệnh push
    }
    // Bước 4: Push các value được lấy ở trên vào hashMap
    hashMap[className].push({
        name: studentName,
        score: score,
    });
}


//
// hashMap: {
//   '12A1': [ { name: 'An', score: 8.5 }, { name: 'Bình', score: 9.2 } ],
//   '12A2': [ { name: 'Cường', score: 7.5 }, { name: 'Dung', score: 9 } ],
//   '12A3': [ { name: 'Em', score: 8 } ]
// }


// Bước 5: Dựa vào hashmap, tìm ra học sinh có diem lớn nhất tại mỗi lớp
// Bước 5.1: Xét tại mỗi lớp 12A1, 12A2, 12A3 (key) -> Object.keys, và lặp qua các lớp

const result = []
// For chỉ được trong mảng thôi nên cần lấy ra mảng -> object.keys
Object.keys(hashMap).forEach((key) => {
    // Lấy ra value
    const value = hashMap[key];
    // Tạo một mảng mới chỉ chứa score từ value
    const scores = value.map((item) => item.score)
    // So sánh xem điểm số nào là lớn nhất
    const maxScore = getMaxNumber(scores);
    // Tìm ra học sinh tương ứng với maxScore
    const student = value.find((item) => item.score === maxScore);

    // Thêm vào mảng kết quả cuối cùng
    result.push({
        class: key,
        topStudent: student.name,
        score: student.score,
    })
})

console.log(result)




