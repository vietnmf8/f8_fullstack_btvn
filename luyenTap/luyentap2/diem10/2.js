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

const result = []

// Tạo hashmap tu student -> Gom nhóm lớp
const hashMap = {}
for (const student of students) {
    //Khởi tạo biến lớp, tên, điểm
    const studentClass = student.class;
    const studentName = student.name;
    const studentScore = student.score;

    // Gom tên, điểm của học sinh theo lớp
    if (!hashMap[studentClass]) {
        hashMap[studentClass] = [];
    }
    hashMap[studentClass].push({
        name: studentName,
        score: studentScore,
    });
}

// {
//     '12A1': [ { name: 'An', score: 8.5 }, { name: 'Bình', score: 9.2 } ],
//     '12A2': [ { name: 'Cường', score: 7.5 }, { name: 'Dung', score: 9 } ],
//     '12A3': [ { name: 'Em', score: 8 } ]
// }

// Tạo hàm tìm số lớn nhất trong mảng
function getMaxNumber(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return max;
}


Object.keys(hashMap).forEach(key => {
    const value = hashMap[key];
    const scores = value.map((element) => element.score)
    const maxNumber = getMaxNumber(scores)
    // Tìm ra object student từ điểm max
    const student = value.find((element) => element.score === maxNumber)


    result.push({
        class: key,
        name: student.name,
        score: student.score,
    })

})

console.log(result)

