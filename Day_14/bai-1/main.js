/*
Bài 1: Gom nhóm học sinh theo lớp:

const students = [
  { name: "An", class: "12A1" },
  { name: "Bình", class: "12A2" },
  { name: "Cường", class: "12A1" },
  { name: "Dung", class: "12A3" },
  { name: "Em", class: "12A2" }
];

// Kết quả mong muốn:
// {
//   "12A1": ["An", "Cường"],
//   "12A2": ["Bình", "Em"],
//   "12A3": ["Dung"]
// }


Phân tích đề bài:

1/ Khởi tạo mảng results{} mới để lưu trữ các nhóm học sinh theo lớp
2/ Duyệt từng học sinh trong mảng students
3/ Với mỗi học sinh, kiểm tra xem LỚP của học sinh đó đã tồn tại trong mảng results{}
- Nếu chưa tồn tại, tạo một mảng mới chứa tên học sinh và gán lớp tương ứng
- Nếu tồn tại, thêm tên học sinh vào mảng của lớp tương ứng

4/ Lặp lại cho đến khi duyệt hết
5/ Trả về mảng đối tượng




                               ┌─────────────────────────────────┐
                               │                                 │
                               │ Khoi tao mang doi tuong moi:    │
                               │                                 │
                               │ results = {}                    │
                               │                                 │
                               └───────────────┬─────────────────┘
                                               │
                                               │
                                               │
                                               ▼
                       ┌────────────────────────────────────────────────┐
                       │                                                │
                       │    Duyet qua moi hoc sinh trong mang students  │  ◄─────────────────────────────────┐
                       │                                                │                                    │
                       └───────────────────────┬────────────────────────┘                                    │
                                               │                                                             │
                                               │                                                             │
                                               │                                                             │
                                               ▼                                                             │
                              ┌─────────────────────────────────┐                                            │
                              │                                 │                                            │
                              │  Trong mang results da ton tai  │                                            │
                              │  lop cua hoc sinh?              │                                            │
                              │                                 │                                            │
                              └────────────────┬────────────────┘                                            │
                                               │                                                             │
                                               │                                                             │
                           true                │        false                                                │
                 ┌─────────────────────────────┴──────────────────────────┐                                  │
                 │                                                        │                                  │
                 │                                                        │                                  │
                 │                                                        │                                  │
                 │                                                        │                                  │
                 ▼                                                        ▼                                  │
  ┌──────────────────────────────┐                            ┌───────────────────────────────────┐          │
  │                              │                            │                                   │          │
  │ Them ten hoc sinh vao mang   │                            │  Tao mang moi voi ten hoc sinh    │          │
  │ cua lop tuong ung            │                            │  va lop tuong ung                 │          │
  │                              │                            │                                   │          │
  └─────────────┬────────────────┘                            └──────────────────┬────────────────┘          │
                │                                                                │                           │
                │                                                                │                           │
                │                                                                │                           │
                │                                                                │                           │
                │             ┌─────────────────────────────────┐                │                           │
                │             │                                 │                │                           │
                │             │  Con hoc sinh nao               │                │                           │
                └───────────► │  chua duoc duyet khong?         │ ◄──────────────┘                           │
                              │                                 │                                            │
                              └──────────┬───────┬──────────────┘                                            │
                                         │       │                 true                                      │
                               false     │       └───────────────────────────────────────────────────────────┘
                             ┌───────────┘
                             │
                             │
                             │
                             ▼
                  ┌────────────────────┐
                  │                    │
                  │       results      │
                  │                    │
                  └────────────────────┘




 */



const students = [
    { name: "An", class: "12A1" },      // students[0] = student
    { name: "Bình", class: "12A2" },    // student
    { name: "Cường", class: "12A1" },   // student
    { name: "Dung", class: "12A3" },    // student
    { name: "Em", class: "12A2" }       // student
]


const groupByClass = students.reduce((result, student) => {
    const studentName = student.name; // An,   Binh,  Cuong , Dung, Em
    const className = student.class;  // 12A1, 12A2,  12A1,   12A3, 12A2

   if (!result[className]) {
       result[className] = []; // Tao mang moi chua ten lop
   }
   result[className].push(studentName); // Them ten hoc sinh vao mang tuong ung
   return result;
    }, {});

console.log(groupByClass);


