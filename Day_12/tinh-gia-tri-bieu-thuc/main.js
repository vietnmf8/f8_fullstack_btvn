/*
Phân tích đề bài:
Cho một số nguyên n. Tính giá trị biểu thức:
S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
-> S = i*(i+1)
-> S = S ban đầu + i*(i+1)


-> Input: n -> là số nguyên cho trước
-> Biến i là số hạng
-> Output: S -> là giá trị biểu thức

-> Nhận ra đây là một quy luật, mỗi số hạng như (1*2), (3*4)... đều có quy luật là i * (i+1)
-> Dùng vòng lặp lặp từ 1 đến n để tính tổng
-> Có i ban đầu là i = 1 và i <= n vì đang bắt đầu từ 1
-> (1*2 + 2*3) -> Bước nhảy là 1


Biểu đồ như sau:


                                                        ┌────────────────────────────────────┐
                                                        │                                    │
                                                        │    Khai bao bien:                  │
                                                        │                                    │
                                                        │      i: So hang                    │
                                                        │      n: So hang dich               │
                                                        │      S: Tinh gia tri bieu thuc     │
                                                        │                                    │
                                                        │     ────────────────────────────   │
                                                        │                                    │
                                                        │      i = 1                         │
                                                        │      n = 10                        │
                                                        │      S = 0                         │
                                                        └────────────────────────────────────┘
                                                                                                           ┌───────────────────┐
                                                                         │                                 │                   │
                                                                         │                                 │  console.log(S)   │
                                                                         │                                 │                   │
                                                                         │                                 └───────────────────┘
                                                                         ▼                                                ▲
                                                          ┌─────────────────────────────────┐ ────────────────────────────┘
                                                          │                                 │
                                                          │   Tao vong lap:                 │
                                                          │                                 │       tang so hang len 1 don vi
                                                          │    i chay tu: 1 -> n            │◄───────────────────────────────────┐
                                                          │    buoc nhay: 1                 │                                    │
                                                          │                                 │                                    │
                                                          └──────────────┬──────────────────┘                                    │
                                                                         │                                                       │
                                                                         │                                                       │
       ┌─────────────────────────────────────────┐                ┌──────┴───────┐                ┌───────────────────────┐      │
       │                                         │     false      │              │    true        │                       │      │
       │   console.log("thu lai voi n >= i")     │  ◄──────────── │              │ ─────────────► │  S = S + i * (i + 1)  ┼──────┘
       │                                         │                │  dieu kien:  │                │                       │
       └─────────────────────────────────────────┘                │  i <= n      │                └───────────────────────┘
                                                                  │              │
                                                                  └──────────────┘








 */

let n = 5    //Số nguyên tại đích
let S = 0     //Giá trị biểu thức

for (let i = 1; i <= n; i++) {
    S += i * (i + 1)    //S = S + i * (i + 1);
}

console.log("Giá trị biểu thức là: ", S)