/*
Đề bài: Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
-> Số nguyên tố là số chia hết cho 1 và chính nó

Gọi n là số nguyên tố được khởi tạo | Lưu ý: n phải khác 1 và 0 (1 và 0) (Vì đã có 1  điều kiện là chia hết cho 1) ->  n nên >= 2
Nếu số đó chia hết cho bất kỳ số nào từ 2 đến (căn bậc 2 của n), thì không phải số nguyên tố.
Vậy i = khoảng ước số sẽ chạy từ 2 -> căn bận 2 của n


Ta có sơ đồ như sau:





                                       ┌────────────────────────────────────┐
                                       │                                    │
                                       │    Khai bao bien:                  │
                                       │                                    │
                                       │      n: So nguyen to can kiem tra  │
                                       │      i: Uoc cua n                  │
                                       │      soNguyenTo: true              │
                                       │                                    │
                                       │     ────────────────────────────   │
                                       │                                    │
                                       │      n = 7                         │
                                       │                                    │
                                       │                                    │                                                                                                         ┌──────────────────────────────────────────────────────────┐
                                       └────────────────────────────────────┘                                                                                                         │                                                          │
                                                                                                                                                                                      │     soNguyenTo = false :                                 │
                                                        │                                                                                                                             │                                                          │
                                                        │                                                                                                                             │       console.log(n + " khong phai la so nguyen to")     │
                                                        │                                                                                                                             │                                                          │
                                                        │                       ┌─────────────────────────────────────┐             thoat vong lap khi i nam ngoai pham vi            │                                                          │
                                                        ▼                       │                                     │                                                               │                                                          │
       ┌────────────────────────┐               ┌───────────────┐               │   Tao vong lap:                     │ ───────────────────────────────────────────────────────────►  │       soNguyenTo = true  :                               │
       │                        │    false      │               │  true         │                                     │                                                               │                                                          │
       │  soNguyenTo = false    │ ◄──────────── │     n >= 2    │ ────────────► │   Khoi tao bien: i                  │                                                               │         console.log(n + " la so nguyen to")              │
       │                        │               │               │               │   Pham vi:       i <= n**(1 / 2)      ◄────────────────────────────────────────┐                    │                                                          │
       └────────────────────────┘               └───────────────┘               │   Buoc nhay:     i++                │                                          │                    │                                                          │
                                                                                │                                     │                                          │                    └──────────────────────────────────────────────────────────┘
                                                                                └───────────┬─────────────────────────┘                                          │
                                                                                            │                                                                    │
                                                                                            │                                                                    │
                                                                                            │                                                                    │
                                                                                            │                                                                    │
                                                                                            │                                                                    │
                                                                                            │                                                                    │
                                                                                            ▼                                                                    │
                                                                                 ┌─────────────────────┐                                                         │
                                       ┌─────────────────────┐                   │                     │                  ┌─────────────────────┐                │
                                       │                     │       false       │                     │       true       │                     │                │
                                       │ soNguyenTo = true   │  ◄──────────────  │    (n % i) === 0    │ ───────────────► │ soNguyenTo = false  │                │
                                       │                     │                   │                     │                  │                     │                │
                                       └─────────┬───────────┘                   └─────────────────────┘                  └─────────────────────┘                │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 │                                                                                                               │
                                                 └───────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
                                                                                            tiep tuc vong lap










 */



let n = 30       // So nguyen to can kiem tra
let soNguyenTo = true

if (n >= 2) {
    for (let i = 2; i < n ** (1 / 2); i++) {
        if (n % i === 0) {
            soNguyenTo = false;
            break
        }
    }
} else {
    soNguyenTo = false;
}

if (soNguyenTo) {
    console.log(n + " la so nguyen to")
} else {
    console.log(n + " khong la so nguyen to")
}