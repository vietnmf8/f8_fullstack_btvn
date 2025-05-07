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


“gom nhóm theo …”

“đếm số lượng mỗi …”

“tìm kiếm theo …”

“kiểm tra trùng lặp …”

“tính tổng theo từng …”

“lưu lại thông tin … để tra sau”
-> hashmap


 */
// Bài toán: Gom nhóm học sinh theo lớp


// Bước 1: Tạo đối tượng kết quả:
const results = {};
// Bước 2: Lặp các đối tượng con trong mảng students
for (const student of students) {
    // Lấy ra name trong students
    const studentName = student.name;
    // Lấy ra lớp trong students
    const className = student.class;

    //Bước 3: Kiểm tra xem key "12A1" có trong đối tượng results chưa
    if (!results[className]) {
        results[className] = [];
    }

    results[className].push(studentName);
}

console.log(results);


