const students = [
    {id: 3, name: "Bình"},
    {id: 1, name: "An"},
    {id: 5, name: "Cường"}
];

const scores = [
    {studentId: 1, score: 8},
    {studentId: 2, score: 6},
    {studentId: 3, score: 7}
];


function mergeJoin2(arr1, arr2, key1 = "id", key2 = "studentId") {
    const result = [];

    // Bước 1: Sắp xếp 2 mảng
    arr1.sort((a, b) => a[key1] - b[key1]);
    arr2.sort((a, b) => a[key2] - b[key2]);

    // Duyệt từng cặp i, j
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][key1] === arr2[j][key2]) {
            result.push({...arr1[i], ...arr2[j]});
            i++;
            j++;
        } else if (arr1[i][key1] < arr2[j][key2]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}


console.log(mergeJoin2(students, scores));


