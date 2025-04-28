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


//Function -------------------------------------------------------------------------------------------

const getMaxNumber = (arr) => {
    let max = arr[0]; // Không phải const vì đây là số
    for (const number of arr) {
        if (number > max) max = number
    }
    return max;
}

const getArg = (arr) => { // arr là một tham số (có thể đặt tên bất kỳ)
    let sum = 0;
    for (const e of arr) { // e đại diện cho phần tử trong arr (có thể đổi tên bất kỳ). arr là mảng
        sum += e;
    }

    return sum / arr.length;
}

//End Function -------------------------------------------------------------------------------------------

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


// Lặp results

Object.keys(results).forEach(key => {
    const value = results[key];
    console.log(key, value)
    //Lấy score
    const scores = value.map((e) => e.score);
    const scoreArg = getArg(scores);
    console.log(scoreArg);
    // const student = value.find((e) => e.score === maxScore);
    // console.log(student);

})

