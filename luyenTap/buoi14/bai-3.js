let students = [
    {name: "An", class: "12A1", score: 8.5},
    {name: "Bình", class: "12A1", score: 9.2},
    {name: "Cường", class: "12A2", score: 7.5},
    {name: "Dung", class: "12A2", score: 9.0},
    {name: "Em", class: "12A3", score: 8.0}
];

// Kết quả:
// [
//   { class: "12A1", averageScore: 8.85 },
//   { class: "12A2", averageScore: 8.25 },
//   { class: "12A3", averageScore: 8.0 }
// ]


// Viết hàm tính điểm trung bình của một lớp
// điểm trung bình = Tổng điểm/ Tổng số lượng điểm trong lớp đó
const getArg = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum / array.length;
}


// Tạo hashMap có key = class, value là phần còn lại
const hashMap = {};
for (const student of students) {
    const className = student.class;
    const studentName = student.name;
    const score = student.score;

    if (!hashMap[className]) {
        hashMap[className] = [];
    }

    hashMap[className].push({
        class: className,
        score: score,
    });
}
// hashMap:
// {
//     '12A1': [ { class: '12A1', score: 8.5 }, { class: '12A1', score: 9.2 } ],
//     '12A2': [ { class: '12A2', score: 7.5 }, { class: '12A2', score: 9 } ],
//     '12A3': [ { class: '12A3', score: 8 } ]
// }


const result = [];
Object.keys(hashMap).forEach((key) => {
    const value = hashMap[key];
    const scores = value.map((item) => item.score);
    const argScore = getArg(scores);

    result.push({
        class: key,
        averageScore: argScore,
    })
})

console.log(result)