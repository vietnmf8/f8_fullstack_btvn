/*
ĐỀ BÀI:
- Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
 + Input: Mảng số nguyên
 + Output: Min, max

-> Dùng for duyệt qua mảng -> dùng câu điều kiện để tìm ra min, max
-> Dùng phương pháp đặt lính canh, coi giá trị min = max ban đầu = index = 0 -> i sẽ chạy tù index = 1
-> Max:
    + Gọi các phần tử trong mảng là i, nếu numbers[i] > max -> numbers[i] = max

-> Min:
    + Gọi các phần tử trong mảng là i, nếu numbers[i] < min -> numbers[i] = min





SƠ ĐỒ:

                                  ┌───────────────────────────────────────────────┐
                                  │                                               │
                                  │           Khoi tao mang so nguyen:            │
                                  │                                               │
                                  │   const numbers = [3, 6, 4, 2, 7]             │
                                  │   - Dat linh canh:  numbers[0] = min = max    │
                                  │   - i: Gia tri trong mang                     │
                                  │                                               │
                                  └───────────────────────┬───────────────────────┘
                                                          │
                                                          │
                                                          │
                                                          ▼
                                                    ┌───────────┐
                                                    │           │
                                                    │   i = 1   │
                                                    │           │
                                                    └─────┬─────┘
                                                          │
                                                          │
                                                          │
                                                          │
                                                          ▼
                                         ┌─────────────────────────────────┐
                                         │                                 │
   ┌────────────────────┐                │   Vong lap:                     │                ┌──────────────────────┐
   │                    │     false      │                                 │   true         │                      │      false
   │   In ra min, max   │ ◄────────────  │   Khoi tao bien: i = 1          │ ────────────►  │   numbers[i] > max   │  ────────────┐
   │                    │                │   Pham vi: i < numbers.length   │                │                      │              │
   └────────────────────┘                │   Buoc nhay: i++                │                └──────────┬───────────┘              │
                                         │                                 │                           │                          │
                                         └─────────────────────────────────┘                           │                          │
                                                                                                       │  true                    │
                                         ▲                                                             │                          │
                                         │                                                             │                          │
                                         │                                                             ▼                          │
                                         │                                                 ┌──────────────────────┐               │
                                         │                                                 │                      │               │
                                         │      ┌──────────────────────────────────────────┼   numbers[i] = max   │               │
                                         │      │                                          │                      │               │
                                         │      │                                          └──────────────────────┘               │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                                                                 │
                                         │      │                                          ┌──────────────────────┐               │
                                         │      │                       false              │                      │               │
                                         │      │          ┌───────────────────────────────┤   numbers[i] < min   │  ◄────────────┘
                                         │      │          │                               │                      │
                                         │      │          │                               └──────────┬───────────┘
                                         │      │          │                                          │
                                         │      │          │                                          │
                                         │      │          │                                          │
                                         │      │          │                                          │ true
                                         │      │          │                                          │
                                         │      │          │                                          │
                                         │      ▼          ▼                                          ▼
                                       ┌─┴────────────────────────┐                       ┌──────────────────────┐
                                       │                          │                       │                      │
                                       │        i = i + 1         │  ◄─────────────────── │   numbers[i] = min   │
                                       │                          │                       │                      │
                                       └──────────────────────┬───┘                       └──────────┬───────────┘









 */
// Khởi tạo mảng và gán cờ cho min = max = index 0
const numbers = [3, 6, 4, 2, 7]
let max = numbers[0]
let min = numbers[0]


// Duyệt qua mảng để tìm min,max
for (let i = 1; i < numbers.length; i++) {
    // Kiểm tra số lớn nhất
    if (numbers[i] > max) {
        max = numbers[i];
    }
    // Kiểm tra số nhỏ nhất
    else if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(max)
console.log(min)