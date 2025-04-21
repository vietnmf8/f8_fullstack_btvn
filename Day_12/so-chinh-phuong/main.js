/*
Kiểm tra một số xem có phải là số chính phương hay không?

Số chính phương là gì?
Là số tự nhiên được biểu diễn bằng bình phương của một số khác -> Vì vậy số chính phương luôn phải >= 0
Ví dụ: 16 = 4 x 4 = 4^2    -> 16 là số chính phương
       25 = 5 x 5 = 5^2    -> 25 là số chính phương

Ta gọi số cần tìm là n
Phạm vi cần kiểm tra là i
Biến soChinhPhuong = false
Dung vòng lặp: chạy i từ 0 (vì 0 cũng là số chính phương), phạm vi là i x i <= n | phạm vi là i <= n** (1/2)



Sơ đồ khối:


                                                    ┌─────────────────────────────────────────────────────┐
                                                    │                                                     │
                                                    │     Khoi tao bien:                                  │
                                                    │                                                     │
                                                    │     n: So can kiem tra                              │
                                                    │     i: So can bac 2 cua n                           │
                                                    │     soChinhPhuong                                   │
                                                    │     ────────────────────────────────────────        │
                                                    │                                                     │
                                                    │     n = 16                                          │
                                                    │     i = 0                                           │
                                                    │     soChinhPhuong = false                           │
                                                    │                                                     │
                                                    └─────────────────────────┬───────────────────────────┘
                                                                              │
                                                                              │
                                                                              │                                                                                 ┌───────────────────────────────────────────────┐
       ┌───────────────────────────────────────────────┐                      │                               ┌───────────────────────────┐                     │                                               │
       │                                               │                      │                               │                           │                     │    In ra:                                     │
       │    In ra:                                     │                      ▼                               │   Tao vong lap:           │                     │                                               │
       │                                               │             ┌────────────────┐                       │                           │                     │        Neu soChinhPhuong = false              │
       │        Neu soChinhPhuong = false              │  false      │                │     true              │   Bien i = 0              │    false            │        -> n khong phai la so chinh phuong     │
       │        -> n khong phai la so chinh phuong     │◄──────────  │     n >= 0     │  ──────────────────►  │   Pham vi: i * i <= n     │ ──────────────────► │                                               │
       │                                               │             │                │                       │   Buoc lap: i++           │                     │                                               │
       │                                               │             └────────────────┘                       │                           │                     │        Neu soChinhPhuong = true               │
       │        Neu soChinhPhuong = true               │                                                      └───────────────────────────┘                     │        -> n la so chinh phuong                │
       │        -> n la so chinh phuong                │                                                                                                        │                                               │
       │                                               │                                                            ▲      │                                    └───────────────────────────────────────────────┘
       └───────────────────────────────────────────────┘                                                            │      │
                                                                                          ┌─────────────────────────┘      │
                                                                                          │     quay lai vong lap          │
                                                                                          │                                │
                                                                                          │                                │
                                                                                          │                                │
                                                                                          │                                ▼
                                                                           ┌──────────────┤                        ┌────────────────┐                          ┌────────────────────────┐
                                                                           │              │       false            │                │          true            │                        │
                                                                           │  i = i + 1   │  ◄───────────────────  │  i * i === n   │ ──────────────────────►  │ soChinhPhuong = true   │
                                                                           │              │                        │                │                          │                        │
                                                                           └──────────────┘                        └────────────────┘                          └────────────┬───────────┘
                                                                                                                                                                            │
                                                                                                                                                                            │
                                                                                                                                                                            │
                                                                                                                                                                            │
                                                                                                                                                                            │
                                                                                                                                                                            │
                                                                                                                                                                            ▼
                                                                                                                                              ┌───────────────────────────────────────────────┐
                                                                                                                                              │                                               │
                                                                                                                                              │    In ra:                                     │
                                                                                                                                              │                                               │
                                                                                                                                              │        Neu soChinhPhuong = false              │
                                                                                                                                              │        -> n khong phai la so chinh phuong     │
                                                                                                                                              │                                               │
                                                                                                                                              │                                               │
                                                                                                                                              │        Neu soChinhPhuong = true               │
                                                                                                                                              │        -> n la so chinh phuong                │
                                                                                                                                              │                                               │
                                                                                                                                              └───────────────────────────────────────────────┘







 */


let n = 16
let i = 0
let soChinhPhuong = false

if (n >= 0) {
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            soChinhPhuong = true;
            break;
        }
    }
} else {
    soChinhPhuong = false
}

if (soChinhPhuong) {
    console.log(`${n} la so chinh phuong`)
} else {
    console.log(`${n} khong phai la so chinh phuong`)
}

