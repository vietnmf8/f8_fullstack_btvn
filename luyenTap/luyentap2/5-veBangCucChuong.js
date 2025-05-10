/*
Đề bài: Vẽ bảng cửu chương
Ví dụ:
1 x 1 = 1       |   2 x 1 = 2
1 x 2 = 2       |   2 x 2 = 4
...             |   ...
1 x 10 = 10     |   2 x 10 = 20
 */


// Bước 1: Tạo 2 vòng lặp lồng nhau:
//          - Vòng ngoài chạy thừa số thứ nhất
//          - Vòng trong chạy thừa số thứ hai

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log(`-------------------------`)
}

