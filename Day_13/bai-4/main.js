/*
Đề bài:
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
var numbers = [5, 1, 9, 8, 10];
-----------------------------------------------------------------------------------------------------
Bước 1: Sắp xếp mảng theo thứ tự tăng dần
Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng


Tại bước 1:

input: var numbers = [5, 1, 9, 8, 10];

Ý tưởng: Tìm index của giá trị nhỏ nhất trong mảng, rồi nghịch đảo cho index i
- i: chỉ số index trong mảng
- Gọi minIndex: tức là chỉ số index của giá trị nhỏ nhất trong mảng -> minIndex = 1

Vòng lặp cha: i = 0, i < length.numbers, i++
Đặt minIndex = i -> minIndex = 0 (gắn cờ) -> numbers[minIndex] = 5

    Vòng lặp con: j = i + 1, j < length.numbers, j++
        Nếu numbers[j] < numbers[minIndex]
            minIndex = j

    //Nghịch đảo các giá trị
    Nếu numbers[i] khác numbers[minIndex]
        Thì -> đặt tempValue = numbers[i]
            -> numbers[i] = numbers[minIndex]
            -> numbers[minIndex] = numbers[tempValue]



Sơ đồ:



                                                                                                      ┌────────────────────────────────┐
                                                                                                      │                                │
                                                                                                      │   Khai bao mang:               │
                                                                                                      │                                │
                                                                                                      │                                │
                                                                                                      │   numbers =[5, 1, 9, 8, 10]    │
                                                                                                      │                                │
                                                                                                      └───────────────┬────────────────┘
                                                                                                                      │
                                                                                                                      │
                                                                                                                      │
                                                                                                                      │
                                                                                                                      │
                                                                                                                      │
                                                                                                                      ▼
                                                                                              ┌──────────────────────────────────────────────────┐
                                                                                              │                                                  │
                                                                                              │    Tao vong lap:                                 │
                                                                                              │                                                  │
                                                                                              │    Bien: i = 0                                   │
                                                                                              │          (index cua gia tri trong mang           │                                ┌───────────────────────────────────┐
                                                                                              │        : minIndex = i                            │           false                │                                   │
                                                                                              │          (index cua gia tri nho nhat trong mang  │   ─────────────────────────►   │    In ra mang da duoc sap xep     │
                                                                                              │                                                  │                                │                                   │
                                                          ┌─────────────────────────────────► │    Pham vi: i < length.numbers                   │                                └───────────────────────────────────┘
                                                          │                                   │    Buoc nhay: i++                                │
                                                          │                                   │                                                  │
                                                          │                                   └──────────────────────┬───────────────────────────┘
                                                          │                                                          │
                                                          │                                                          │
                                                          │                                                        true
                                                          │                                                          │
                                                          │                                                          │
                                                          │                                                          ▼
                                                          │
                                                          │                                  ┌─────────────────────────────────────────────────┐
      ┌───────────────────────────────────────────────────┴─────┐                            │                                                 │
      │                                                         │                            │     Tao vong lap:                               │
      │                                                         │                            │                                                 │
      │    nghich dao gia tri:                                  │           false            │     Bien: j = i + 1                             │
      │                                                         │  ◄───────────────────────  │           (index cua gia tri dung ngay sau i    │
      │        tempValue = numbers[i]                           │                            │                                                 │◄────────────────┐
      │                                                         │                            │     Pham vi: j < length.numbers                 │                 │
      │        numbers[i] = numbers[minIndex]                   │                            │     Buoc nhay: j++                              │                 │
      │                                                         │                            │                                                 │                 │
      │        numbers[minIndex] = numbers[tempValue]           │                  ┌───────► │                                                 │                 │
      │                                                         │                  │         └──────────────────────┬──────────────────────────┘                 │
      │                                                         │                  │                                │                                            │
      └─────────────────────────────────────────────────────────┘                  │                                │                                            │
                                                                                   │                                                                             │
                                                                                   │                              true                                           │
                                                                                   │                                                                             │
                                                                                   │                                │                                            │
                                                                                   │                                │                                            │
                                                                                   │                                │                                            │
                                                                                   │                                ▼                                            │
                                                                                   │              ┌─────────────────────────────────────┐
                                                                                   │              │                                     │              ┌───────────────────┐
                                                                                   │              │   if:                               │              │                   │
                                                                                   │    false     │                                     │    true      │                   │
                                                                                   └────────────  │                                     ├─────────────►│   minIndex = j    │
                                                                                                  │   numbers[j] < numbers[minIndex]    │              │                   │
                                                                                                  │                                     │              │                   │
                                                                                                  └─────────────────────────────────────┘              └───────────────────┘




 */

//Bước 1:
const numbers = [5, 1, 9, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j;
        }
    }

    //Nghich dao gia tri
    let tempValue = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = tempValue;
}

console.log(numbers);


//Bước 2:
/*
Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
-> Sử dụng push, unshift, splice

-> Nếu số được chèn nhỏ hơn giá trị đầu tiên -> unshift
-> Nếu số được chèn lớn hơn giá trị cuối cùng -> push
-> Còn chèn vào giữa thì phải chèn vào khu vực số nhỏ hơn < x < số lớn hơn
 */
// numbers = [1, 5, 8, 9, 10];


/*
So do









                                                                               ┌────────────────────────────────────────────┐
                                                                               │                                            │
                                                                               │                                            │
                                                                               │   Khai bao bien can duoc them vao mang:    │
                                                                               │                                            │
                                                                               │   element = 4                              │
                                                                               │                                            │
                                                                               │                                            │
                                                                               └────────────────────┬───────────────────────┘
                                                                                                    │                                                         ┌────────────────────────────────────────────────────────┐
                                                                                                    │                                                         │                                                        │
                                                                                                    │                                                         │                     false                              │
                                                                                                    │                                                         │                                                        │
                                                                                                    │                                                         │                                                        │
                                            ┌───────────────────────────────────────────────────────┘                                                         │                                                        │
                                            │                                                                                                                 │                                                        │
                                            │                                                                                                                 │                                                        │
                                            │                                                                                                                 │                                                        │
                                            │                                                                                                                 ▼
                   ┌────────────────────────▼──────────────────────┐           ┌────────────────────────────────────────────┐                                                                    ┌──────────────────────────────────────────────┐               ┌───────────────────────┐
                   │                                               │           │                                            │         ┌────────────────────────────────────────────┐             │                                              │               │                       │
                   │                                               │           │   element >= numbers[numbers.length - 1]   │         │                                            │             │                                              │               │                       │
                   │  element <= numbers[0]                        │  false    │                                            │  false  │   Vong lap:                                │             │                                              │     true      │                       │
                   │                                               │           │                                            │         │                                            │             │                                              │               │    splice  -> break   │
                   │                                               │ ──────►   │                                            │ ──────► │   Bien i = 0                               │ ─────────►  │   numbers[i] <= element >= numbers[i+1]      │   ──────────► │                       │
                   │                                               │           │                   push                     │         │   Pham vi i < numbers[numbers/length - 1]  │             │                                              │               │                       │
                   │               unshift                         │           │                                            │         │                                            │             │                                              │               │                       │
                   │                                               │           │                                            │         │                                            │             │                                              │               │                       │
                   │                                               │           │                                            │         └────────────────────┬───────TH3─────────────┘             │                                              │               └───────────────────────┘
                   └────────────────────TH1────────────────────────┘           └────────────────────TH2─────────────────────┘                              │                                     └──────────────────────────────────────────────┘
                                                                                                                                                           │
                                         │                                                           │                                                     │
                                         │                                                           │                                                     │
                                         │                                                           │                                                     │
                                         │                                                           │                                                     │ false
                                         │                                                           │ true                                                │
                                         │                                                           │                                                     │
                                         ▼                                                           │                                                     │
                                                                                                     ▼                                                     ▼

                                      ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────



                                                                                          console.log(numbers)







 */







let element = 7;
if (element <= numbers[0]) {
    numbers.unshift(element); // Chèn đầu mảng
} else if (element >= numbers[numbers.length - 1]) {
    numbers.push(element); // Chèn cuối mảng
} else {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] <= element && element <= numbers[i + 1]) {
            numbers.splice(i + 1, 0, element);
            // splice(start, deleteCount, item1, item2, ...)
            // Thêm đằng sau
            break;
        }
    }
}

console.log(numbers);



