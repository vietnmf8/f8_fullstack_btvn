/*
Đề bài:
const students = [
  { name: "An", class: "12A1", score: 8.5 },
  { name: "Bình", class: "12A1", score: 9.2 },
  { name: "Cường", class: "12A2", score: 7.5 },
  { name: "Dung", class: "12A2", score: 9.0 },
  { name: "Em", class: "12A3", score: 8.0 }
];

Phân tích đề bài:
- Nhóm học sinh theo lớp (reduce)
- Dùng sort để sắp xếp điểm xem thứ tự giảm dần trong mỗi nhóm lớp
- Lấy điểm cao nhất làm kết qu


Sơ đồ:



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

                                                                                         │
                                                                                         │
                                                                                         │
                                                                                         │
                                                                                         ▼
                                                                         ┌───────────────────────────────┐
                                                                         │                               │                                   true
                                ┌─────────────────────────────────────►  │     lap qua tung lop hoc      │ ◄─────────────────────────────────────────────────────────────────────────────────┐
                                │                                        │                               │                                                                                   │
                                │                                        └───────────────────────────────┘                                                                                   │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                │                                                                                                                                                            │
                                                             ┌────────────────────────────────────────────────────┐                                                                          │
      ┌────────────────────────────────────────┐             │                                                    │               ┌───────────────────────────────────┐                      │
      │                                        │    false    │   So sanh diem cua hoc sinh1, diem cua hoc sinh2   │      true     │                                   │                      │
      │    Giu nguyen diem va ten hoc sinh     │ ◄────────── │   trong mang class                                 │  ──────────►  │  Cap nhat diem va ten hoc sinh    │                      │
      │                                        │             │                                                    │               │                                   │                      │
      └────────────────────────────────────────┘             └────────────────────────────────────────────────────┘               └───────────────────────────────────┘                      │
                                                                                                                                                                                             │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   │                                         │
                               │                                                                                                                   ▼                                         │
                               │                                                                                                  ┌─────────────────────────────────┐                        │
                               │                                                                                                  │                                 │                        │
                               │                                                                                                  │  Con hoc sinh nao               │                        │
                               └─────────────────────────────────────────────────────────────────────────────────────────────────►│  chua duoc duyet khong?         │  ──────────────────────┘
                                                                                                                                  │                                 │
                                                                                                                                  └──────────┬─────┬─┬──────────────┘
                                                                                                                                                   │
                                                                                                                                                   │
                                                                                                                                                   │  false
                                                                                                                                                   │
                                                                                                                                                   │
                                                                                                                                                   ▼
                                                                                                                                         ┌────────────────────┐
                                                                                                                                         │                    │
                                                                                                                                         │       results      │
                                                                                                                                         │                    │
                                                                                                                                         └────────────────────┘






 */
//Bước gom nhóm lớp
const students = [
    { name: "An", class: "12A1", score: 8.5 },      //student
    { name: "Bình", class: "12A1", score: 9.2 },    //student
    { name: "Cường", class: "12A2", score: 7.5 },   //student
    { name: "Dung", class: "12A2", score: 9.0 },    //student
    { name: "Em", class: "12A3", score: 8.0 }       //student
];

const groupByClass = students.reduce((result, student) => {
    const className = student.class; // 12A1,  12A1,  12A2,  12A2,  12A3

    if (!result[className]) {
        result[className] = [];
    }

    result[className].push(student);
    return result;
    }, {});

console.log(groupByClass);



//Bước sắp xếp
const topStudentByClass = Object.keys(groupByClass).map(className => {
    const studentsInClass = groupByClass[className]; //Lấy mảng array trong object
    //Sắp xếp theo thứ tự giảm dần
        studentsInClass.sort((a, b) => b.score - a.score);

        const topStudent = studentsInClass[0];
        return {
            class: className,
            topStudent: topStudent.name,
            score: topStudent.score,
        }
});  // 12A1, 12A2, 12A3

console.log(topStudentByClass);
