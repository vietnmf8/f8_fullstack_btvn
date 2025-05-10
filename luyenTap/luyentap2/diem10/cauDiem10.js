const students = [
    {name: "An", class: "12A1"},
    {name: "Bình", class: "12A2"},
    {name: "Cường", class: "12A1"},
    {name: "Dung", class: "12A3"},
    {name: "Em", class: "12A2"}
];
/*
// Kết quả mong muốn:
// {
//   "12A1": ["An", "Cường"],
//   "12A2": ["Bình", "Em"],
//   "12A3": ["Dung"]
// }
 */

const result = {}
for (const student of students) {
    // Gọi tên class, name
    const studentClass = student.class;
    const studentName = student.name;

    // Kiểm tra điều kiện xem các key đã tồn tại chưa
    if (!result[studentClass]) {
        result[studentClass] = [];
    }

    // Nếu đã tồn tại key -> push value
    result[studentClass].push(studentName);
}

console.log(result)