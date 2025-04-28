const students = [
    {name: "An", class: "12A1", score: 8.5},
    {name: "Bình", class: "12A1", score: 9.2},
    {name: "Cường", class: "12A2", score: 7.5},
    {name: "Dung", class: "12A2", score: 9.0},
    {name: "Em", class: "12A3", score: 8.0}
];

// Kết quả mong muốn:
// [
//   { class: "12A1", topStudent: "Bình", score: 9.2 },
//   { class: "12A2", topStudent: "Dung", score: 9.0 },
//   { class: "12A3", topStudent: "Em", score: 8.0 }
// ]


// Bài toán tìm số lớn nhất trong một mảng Array
// const arr = [3, 4, 1, 2, 5, 2] // Có thể là const vì có thể thay đổi phần tử trong mảng, mảng vẫn thế


const getMaxNumber = (arr) => {
    let max = arr[0]; // Không phải const vì đây là số
    for (const number of arr) {
        if (number > max) max = number
    }
    return max;
}

const results = {}; // key: value
for (const student of students) {
    // Bước 2: Lấy tên lớp | VD: "12A1"
    const className = student.class; //"12A1"
    const studentName = student.name; //"An"
    const score = student.score; // 8.5

    if (!results[className]) {
        results[className] = [];
    }
    results[className].push({ //Object
        name: studentName, score: score
    })
}

console.log(results);

const finalResults = []
// Lặp results

Object.keys(results).forEach(key => {
    const value = results[key];
    //Lấy score
    const scores = value.map((e) => e.score);
    const maxScore = getMaxNumber(scores);
    const student = value.find((e) => e.score === maxScore);
    console.log(student);


    finalResults.push({
        class: "12A1",
        topStudent: student.name,
        score: student.score
    });
})


console.log(finalResults);

