


/*
Phân tich đề bài:
- Lọc học sinh theo từng lớp
- Tính điểm trung bình


So do:



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
                      │                               │
                      │     lap qua tung lop hoc      │
                      │                               │
                      └───────────────┬───────────────┘
                                      │
                                      │
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │                                 │
                    │   Tinh tong diem cua lop do     │
                    │                                 │
                    └─────────────────────────────────┘

                                     │
                                     │
                                     │
                                     ▼
                   ┌──────────────────────────────────┐
                   │                                  │
                   │     Tinh diem trung binh         │
                   │                                  │
                   └──────────────────────────────────┘




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


// Bước tính điểm trung bình
const averageScoreByClass = Object.keys(groupByClass).map(className =>{
    const studentInClass = groupByClass[className];

    //Tính tổng điểm
    const totalScore = studentInClass.reduce((sum, student) => sum + student.score, 0);

    //Tính điểm trung bình
    const averageScore = totalScore / studentInClass.length;

    return {
        class: className,
        averageScore: Number(averageScore.toFixed(2)), //Làm tròn 2 chữ số
    };
})

console.log(averageScoreByClass);