/*
Đề bài: Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

input = [1, 2, 3, 2, 1, 4, 5, 4, 6];
output = [1, 2, 3, 4, 5, 6]

-> Tạo mảng output rỗng [] -> So sánh với mảng gốc:
 + Nếu mảng input không trùng giá trị với mảng output -> thêm giá trị từ input vào output
 + Ngược lại, nếu mảng input có giá trị trùng với output -> Không thêm vào
-> Gán cờ!!! tạo biến duplicate : true/false để xác định xem có bị trùng số không?



Sơ đồ:




                                                              ┌──────────────────────────────────────────────┐
                                                              │                                              │
                                                              │    Khoi tao mang:                            │
                                                              │                                              │
                                                              │    input:  [1, 2, 3, 2, 1, 4, 5, 4, 6]       │
                                                              │    output: []                                │
                                                              │    ─────────────────────────────────────     │
                                                              │                                              │
                                                              │     i: gia tri trong mang input              │
                                                              │     o: gia tri trong mang output             │
                                                              │                                              │
                                                              └──────────────────────┬───────────────────────┘
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                     │
                                                                                     ▼
                                                                   ┌────────────────────────────────────┐
                                                                   │                                    │
                                                                   │   Tao vong lap:                    │
                                                                   │                                    │
                                                                   │     Tao bien:  i = 0               │                       ┌─────────────────────────────────┐
                                                                   │                dublicate = false   │         false         │                                 │
                             ┌────────────────────────────────────►│                (khong trung lap)   │  ───────────────────► │     In ra : output              │
                             │                                     │                                    │                       │                                 │
                             │                                     │     Pham vi:   i < input.length    │                       └─────────────────────────────────┘
                             │                                     │     Buoc nhay: i++                 │
                             │                                     │                                    │
                             │                                     └─────────────────┬──────────────────┘
                             │                                                       │
                             │                                                      true
                             │                                                       │
                             │                                                       ▼
                             │                                     ┌────────────────────────────────────┐
             ┌───────────────┴───────────────┐                     │                                    │
             │                               │                     │    Tao vong lap con:               │
             │   if: dublicate = false       │          false      │                                    │
             │   ->  output.push(input[i])   │   ◄─────────────────┤      Tao bien:  j = 0              │
             │                               │                     │      Pham vi:   j < input.length   │
             └───────────────────────────────┘                     │      Buoc nhay: j++                │
                                                        ┌─────────►│                                    │
                          ▲                             │          └─────────────────┬──────────────────┘
                          │                             │                            │
                          │                             │
                          │                             │                           true
                          │                             │
                          │                             │                            │
                          │                             │                            ▼
                          │                             │             ┌──────────────────────────────┐                  ┌───────────────────────┐
                          │                             │             │                              │     true         │                       │
                          │                             └───────────  │  if: input[i] === output[j]  │  ──────────────► │   dublicate = true    │
                          │                                           │                              │                  │                       │
                          │                                           └──────────────────────────────┘                  └───────────────────────┘
                          │
                          │                                                                                                         │
                          │                                                                                                         │
                          │                                                                                                         │
                          │
                          │                                                                                                       break
                          │
                          │                                                                                                         │
                          │                                                                                                         │
                          │                                                                                                         │
                          │                                                                                                         │
                          └─────────────────────────────────────────────────────────────────────────────────────────────────────────┘








 */


let input = [1, 2, 3, 2, 1, 4, 5, 4, 6];
let output = [];

// Tạo vòng lặp duyệt qua mảng input (gốc)
for (let i = 0; i < input.length; i++) {
    // Gán cờ cho biến duplicate - biến trùng lăp = false -> không trùng lặp
    let duplicate = false;
    // Tạo vòng lặp duyệt qua mảng output (mới)
    for (let j = 0; j < output.length; j++) {
        if (input[i] === output[j]) {
            duplicate = true; // đã trùng lặp

            // Thoát vòng lặp
            break;
        }

    }

    // Nếu duplicate = false -> thêm giá trị từ input sang output
    // "!" -> khác
    if (!duplicate) {
        output.push(input[i]);
    }
}

console.log(output);