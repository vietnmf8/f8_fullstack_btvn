const students = [
    {name: "An", class: "12A1"},
    {name: "Bình", class: "12A2"},
    {name: "Cường", class: "12A1"},
    {name: "Dung", class: "12A3"},
    {name: "Em", class: "12A2"}
];

// Kết quả mong muốn:
// {
//   "12A1": ["An", "Cường"],
//   "12A2": ["Bình", "Em"],
//   "12A3": ["Dung"]
// }


//Nhận thấy Output là một Object {} -> Bước 1: Khởi tạo Object { key: value }
const results = {};
for (const student of students) {
    // Bước 2: Lấy tên lớp | VD: "12A1"
    const className = student.class; //"12A1"
    const studentName = student.name; //"An"

    if (!results[className]) { //key
        results[className] = []; // key = []
    }
    results[className].push(student.name);
}

console.log(results);