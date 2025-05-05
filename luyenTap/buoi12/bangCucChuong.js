/*
Đề bài: Tạo bảng cửu chương từ 1 -> 10

1 x 1 = 1   |   2 x 1 = 2   |   3 x 1 = 3
1 x 2 = 2   |   2 x 2 = 4   |   3 x 2 = 6
1 x 3 = 3   |   2 x 3 = 6   |   3 x 3 = 9
...         |   ...         |   ...
1 x 10 = 10 |   2 x 10 = 20 |   3 x 10 = 30

 */


for (let soHangThuNhat = 1; soHangThuNhat < 10; soHangThuNhat++) {
    for (let soHangThuHai = 1; soHangThuHai < 10; soHangThuHai++) {
        console.log(`${soHangThuNhat} x ${soHangThuHai} = ${soHangThuNhat * soHangThuHai}`);
    }
    console.log("----------------------------------------")
}