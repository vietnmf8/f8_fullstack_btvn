# Thuật toán Hash Join, Merge Join, Nested Loop và Binary Search trong JavaScript

## 1. Hash Join

### 1.1 Khái niệm
Hash Join là thuật toán dùng để kết hợp hai tập dữ liệu (thường là hai mảng) bằng cách sử dụng cấu trúc hash để tăng tốc độ tìm kiếm. Thuật toán này đặc biệt hiệu quả khi cần kết hợp hai tập dữ liệu lớn.

### 1.2 Cách thức thực hiện
1. Chọn một trong hai tập dữ liệu làm tập xây dựng bảng băm (thường là tập nhỏ hơn)
2. Tạo bảng băm từ tập dữ liệu đó, với khóa là trường cần join
3. Duyệt qua từng phần tử của tập dữ liệu còn lại (tập thăm dò)
4. Với mỗi phần tử, tra cứu trong bảng băm để tìm các kết quả khớp

### 1.3 Cài đặt bằng JavaScript

```javascript
function hashJoin(arr1, arr2, key1, key2) {
    // Tạo hash map từ mảng nhỏ hơn để tối ưu bộ nhớ
    let hashMap = {};
    let results = [];
    
    // Xác định mảng nào nhỏ hơn để xây dựng hash map
    const buildArray = arr1.length < arr2.length ? arr1 : arr2;
    const probeArray = arr1.length < arr2.length ? arr2 : arr1;
    const buildKey = arr1.length < arr2.length ? key1 : key2;
    const probeKey = arr1.length < arr2.length ? key2 : key1;
    
    // Bước 1: Xây dựng hash map
    for (let i = 0; i < buildArray.length; i++) {
        const item = buildArray[i];
        const keyValue = item[buildKey];
        
        if (!hashMap[keyValue]) {
            hashMap[keyValue] = [];
        }
        hashMap[keyValue].push(item);
    }
    
    // Bước 2: Thăm dò hash map
    for (let i = 0; i < probeArray.length; i++) {
        const item = probeArray[i];
        const keyValue = item[probeKey];
        
        // Nếu tìm thấy khớp trong hash map
        if (hashMap[keyValue]) {
            // Kết hợp với tất cả các mục khớp
            for (let j = 0; j < hashMap[keyValue].length; j++) {
                const matchedItem = hashMap[keyValue][j];
                
                // Tạo đối tượng kết quả bằng cách kết hợp cả hai đối tượng
                let resultItem = {};
                
                // Sao chép thuộc tính từ đối tượng đầu tiên
                for (let prop in matchedItem) {
                    resultItem[prop] = matchedItem[prop];
                }
                
                // Sao chép thuộc tính từ đối tượng thứ hai (tránh ghi đè)
                for (let prop in item) {
                    if (prop !== probeKey || prop === probeKey && buildKey !== probeKey) {
                        // Thêm tiền tố nếu trùng tên thuộc tính
                        const propName = resultItem.hasOwnProperty(prop) ? `${probeKey}_${prop}` : prop;
                        resultItem[propName] = item[prop];
                    }
                }
                
                results.push(resultItem);
            }
        }
    }
    
    return results;
}
```

### 1.4 Ví dụ

#### Ví dụ 1: Kết hợp danh sách người dùng với đơn hàng của họ

```javascript
// Dữ liệu người dùng
const users = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" }
];

// Dữ liệu đơn hàng
const orders = [
    { orderId: 101, userId: 1, product: "Laptop" },
    { orderId: 102, userId: 2, product: "Điện thoại" },
    { orderId: 103, userId: 1, product: "Tai nghe" },
    { orderId: 104, userId: 4, product: "Bàn phím" }
];

// Join users và orders dựa trên id và userId
const result = hashJoin(users, orders, "id", "userId");
console.log(result);

// Kết quả:
// [
//   {
//     id: 1,
//     name: "Nguyễn Văn A",
//     orderId: 101,
//     userId: 1,
//     product: "Laptop"
//   },
//   {
//     id: 1,
//     name: "Nguyễn Văn A",
//     orderId: 103,
//     userId: 1,
//     product: "Tai nghe"
//   },
//   {
//     id: 2,
//     name: "Trần Thị B",
//     orderId: 102,
//     userId: 2,
//     product: "Điện thoại"
//   }
// ]
```

#### Quá trình thực thi chi tiết:

1. So sánh kích thước hai mảng: `users.length = 3` và `orders.length = 4`. Do `users` nhỏ hơn nên nó trở thành mảng xây dựng (buildArray).
2. Tạo bảng băm từ mảng `users`:
   ```
   hashMap = {
     1: [{ id: 1, name: "Nguyễn Văn A" }],
     2: [{ id: 2, name: "Trần Thị B" }],
     3: [{ id: 3, name: "Lê Văn C" }]
   }
   ```
3. Duyệt qua mảng `orders` để tìm các kết hợp:
   - `{ orderId: 101, userId: 1, product: "Laptop" }` → tìm thấy trong hashMap[1] → tạo kết quả đầu tiên
   - `{ orderId: 102, userId: 2, product: "Điện thoại" }` → tìm thấy trong hashMap[2] → tạo kết quả thứ hai
   - `{ orderId: 103, userId: 1, product: "Tai nghe" }` → tìm thấy trong hashMap[1] → tạo kết quả thứ ba
   - `{ orderId: 104, userId: 4, product: "Bàn phím" }` → không tìm thấy trong hashMap → bỏ qua

4. Kết quả cuối cùng chỉ chứa 3 bản ghi khớp giữa hai mảng.

## 2. Merge Join

### 2.1 Khái niệm
Merge Join là thuật toán kết hợp hai tập dữ liệu đã được sắp xếp trước theo khóa kết hợp. Thuật toán này hiệu quả khi cả hai tập dữ liệu đều đã được sắp xếp theo cùng một tiêu chí.

### 2.2 Cách thức thực hiện
1. Đảm bảo cả hai tập dữ liệu đều được sắp xếp theo khóa kết hợp
2. Sử dụng hai con trỏ để duyệt qua hai tập dữ liệu đồng thời
3. Khi tìm thấy giá trị khớp, thêm vào kết quả
4. Di chuyển con trỏ dựa trên giá trị so sánh giữa hai tập

### 2.3 Cài đặt bằng JavaScript

```javascript
function mergeJoin(arr1, arr2, key1, key2) {
    // Đảm bảo mảng đã sắp xếp theo khóa kết hợp
    const sortedArr1 = [...arr1].sort((a, b) => a[key1] - b[key1]);
    const sortedArr2 = [...arr2].sort((a, b) => a[key2] - b[key2]);
    
    let results = [];
    let i = 0, j = 0;
    
    while (i < sortedArr1.length && j < sortedArr2.length) {
        const val1 = sortedArr1[i][key1];
        const val2 = sortedArr2[j][key2];
        
        if (val1 < val2) {
            // Giá trị trong arr1 nhỏ hơn, tăng con trỏ arr1
            i++;
        } else if (val1 > val2) {
            // Giá trị trong arr2 nhỏ hơn, tăng con trỏ arr2
            j++;
        } else {
            // Giá trị bằng nhau - tìm thấy kết quả khớp
            // Lưu lại vị trí hiện tại, vì có thể có nhiều kết quả khớp
            let tempJ = j;
            
            // Kết hợp với tất cả các mục trong arr2 có cùng giá trị khóa
            while (tempJ < sortedArr2.length && sortedArr2[tempJ][key2] === val1) {
                // Tạo đối tượng kết quả
                let resultItem = {};
                
                // Sao chép thuộc tính từ đối tượng đầu tiên
                for (let prop in sortedArr1[i]) {
                    resultItem[prop] = sortedArr1[i][prop];
                }
                
                // Sao chép thuộc tính từ đối tượng thứ hai (tránh ghi đè)
                for (let prop in sortedArr2[tempJ]) {
                    if (prop !== key2 || key2 !== key1) {
                        // Thêm tiền tố nếu trùng tên thuộc tính
                        const propName = resultItem.hasOwnProperty(prop) ? `${key2}_${prop}` : prop;
                        resultItem[propName] = sortedArr2[tempJ][prop];
                    }
                }
                
                results.push(resultItem);
                tempJ++;
            }
            
            // Tăng con trỏ arr1
            i++;
        }
    }
    
    return results;
}
```

### 2.4 Ví dụ

#### Ví dụ 1: Kết hợp danh sách sinh viên với điểm thi

```javascript
// Dữ liệu sinh viên
const students = [
    { studentId: 1, name: "Nguyễn Văn A" },
    { studentId: 2, name: "Trần Thị B" },
    { studentId: 3, name: "Lê Văn C" },
    { studentId: 5, name: "Phạm Thị D" }
];

// Dữ liệu điểm thi
const scores = [
    { examId: 101, studentId: 1, subject: "Toán", score: 8.5 },
    { examId: 102, studentId: 2, subject: "Toán", score: 7.5 },
    { examId: 103, studentId: 3, subject: "Toán", score: 9.0 },
    { examId: 104, studentId: 1, subject: "Văn", score: 7.0 },
    { examId: 105, studentId: 4, subject: "Toán", score: 8.0 }
];

// Join students và scores dựa trên studentId
const result = mergeJoin(students, scores, "studentId", "studentId");
console.log(result);

// Kết quả:
// [
//   {
//     studentId: 1,
//     name: "Nguyễn Văn A",
//     examId: 101,
//     subject: "Toán",
//     score: 8.5
//   },
//   {
//     studentId: 1,
//     name: "Nguyễn Văn A",
//     examId: 104,
//     subject: "Văn",
//     score: 7.0
//   },
//   {
//     studentId: 2,
//     name: "Trần Thị B",
//     examId: 102,
//     subject: "Toán",
//     score: 7.5
//   },
//   {
//     studentId: 3,
//     name: "Lê Văn C",
//     examId: 103,
//     subject: "Toán",
//     score: 9.0
//   }
// ]
```

#### Quá trình thực thi chi tiết:

1. Sắp xếp cả hai mảng theo khóa studentId:
   - `students` đã được sắp xếp: [1, 2, 3, 5]
   - `scores` được sắp xếp thành: [1, 1, 2, 3, 4]

2. Duyệt qua hai mảng với hai con trỏ i và j:
   - i=0, j=0: students[0].studentId = 1, scores[0].studentId = 1 → Khớp → Thêm vào kết quả
   - i=0, j=1: students[0].studentId = 1, scores[1].studentId = 1 → Khớp → Thêm vào kết quả
   - i=0, j=2: students[0].studentId = 1, scores[2].studentId = 2 → Không khớp, i++
   - i=1, j=2: students[1].studentId = 2, scores[2].studentId = 2 → Khớp → Thêm vào kết quả
   - i=1, j=3: students[1].studentId = 2, scores[3].studentId = 3 → Không khớp, i++
   - i=2, j=3: students[2].studentId = 3, scores[3].studentId = 3 → Khớp → Thêm vào kết quả
   - i=2, j=4: students[2].studentId = 3, scores[4].studentId = 4 → Không khớp, i++
   - i=3, j=4: students[3].studentId = 5, scores[4].studentId = 4 → Không khớp, j++
   - j=5: Vượt quá mảng scores, kết thúc vòng lặp

3. Kết quả cuối cùng chứa 4 bản ghi khớp giữa hai mảng.

## 3. Nested Loop Join (Vòng lặp lồng nhau)

### 3.1 Khái niệm
Nested Loop Join là phương pháp đơn giản nhất để kết hợp hai tập dữ liệu. Nó sử dụng hai vòng lặp lồng nhau để duyệt qua từng phần tử của hai tập dữ liệu và tìm các cặp khớp.

### 3.2 Cách thức thực hiện
1. Duyệt qua từng phần tử của tập dữ liệu thứ nhất (outer loop)
2. Với mỗi phần tử, duyệt qua từng phần tử của tập dữ liệu thứ hai (inner loop)
3. Nếu tìm thấy phần tử khớp theo điều kiện, thêm vào kết quả

### 3.3 Cài đặt bằng JavaScript

```javascript
function nestedLoopJoin(arr1, arr2, key1, key2) {
    let results = [];
    
    // Vòng lặp ngoài - duyệt qua mảng thứ nhất
    for (let i = 0; i < arr1.length; i++) {
        const item1 = arr1[i];
        
        // Vòng lặp trong - duyệt qua mảng thứ hai
        for (let j = 0; j < arr2.length; j++) {
            const item2 = arr2[j];
            
            // Kiểm tra điều kiện kết hợp
            if (item1[key1] === item2[key2]) {
                // Tạo đối tượng kết quả
                let resultItem = {};
                
                // Sao chép thuộc tính từ đối tượng đầu tiên
                for (let prop in item1) {
                    resultItem[prop] = item1[prop];
                }
                
                // Sao chép thuộc tính từ đối tượng thứ hai (tránh ghi đè)
                for (let prop in item2) {
                    if (prop !== key2 || key2 !== key1) {
                        // Thêm tiền tố nếu trùng tên thuộc tính
                        const propName = resultItem.hasOwnProperty(prop) ? `${key2}_${prop}` : prop;
                        resultItem[propName] = item2[prop];
                    }
                }
                
                results.push(resultItem);
            }
        }
    }
    
    return results;
}
```

### 3.4 Ví dụ

#### Ví dụ 1: Kết hợp danh sách sản phẩm với danh mục

```javascript
// Dữ liệu sản phẩm
const products = [
    { productId: 1, name: "iPhone 13", categoryId: 1, price: 20000000 },
    { productId: 2, name: "Samsung Galaxy S21", categoryId: 1, price: 18000000 },
    { productId: 3, name: "Macbook Pro", categoryId: 2, price: 35000000 },
    { productId: 4, name: "AirPods Pro", categoryId: 3, price: 5000000 }
];

// Dữ liệu danh mục
const categories = [
    { categoryId: 1, name: "Điện thoại" },
    { categoryId: 2, name: "Laptop" },
    { categoryId: 3, name: "Phụ kiện" },
    { categoryId: 4, name: "Đồng hồ" }
];

// Join products và categories dựa trên categoryId
const result = nestedLoopJoin(products, categories, "categoryId", "categoryId");
console.log(result);

// Kết quả:
// [
//   {
//     productId: 1,
//     name: "iPhone 13",
//     categoryId: 1,
//     price: 20000000,
//     name_category: "Điện thoại"
//   },
//   {
//     productId: 2,
//     name: "Samsung Galaxy S21",
//     categoryId: 1,
//     price: 18000000,
//     name_category: "Điện thoại"
//   },
//   {
//     productId: 3,
//     name: "Macbook Pro",
//     categoryId: 2,
//     price: 35000000,
//     name_category: "Laptop"
//   },
//   {
//     productId: 4,
//     name: "AirPods Pro",
//     categoryId: 3,
//     price: 5000000,
//     name_category: "Phụ kiện"
//   }
// ]
```

#### Quá trình thực thi chi tiết:

1. Bắt đầu với vòng lặp ngoài duyệt qua mảng `products`:
   - i=0: products[0] = { productId: 1, name: "iPhone 13", categoryId: 1, price: 20000000 }
     - j=0: categories[0] = { categoryId: 1, name: "Điện thoại" }
       - 1 === 1 → Khớp → Thêm vào kết quả
     - j=1, j=2, j=3: Không khớp, tiếp tục
   
   - i=1: products[1] = { productId: 2, name: "Samsung Galaxy S21", categoryId: 1, price: 18000000 }
     - j=0: categories[0] = { categoryId: 1, name: "Điện thoại" }
       - 1 === 1 → Khớp → Thêm vào kết quả
     - j=1, j=2, j=3: Không khớp, tiếp tục
   
   - i=2: products[2] = { productId: 3, name: "Macbook Pro", categoryId: 2, price: 35000000 }
     - j=0: Không khớp
     - j=1: categories[1] = { categoryId: 2, name: "Laptop" }
       - 2 === 2 → Khớp → Thêm vào kết quả
     - j=2, j=3: Không khớp, tiếp tục
   
   - i=3: products[3] = { productId: 4, name: "AirPods Pro", categoryId: 3, price: 5000000 }
     - j=0, j=1: Không khớp
     - j=2: categories[2] = { categoryId: 3, name: "Phụ kiện" }
       - 3 === 3 → Khớp → Thêm vào kết quả
     - j=3: Không khớp, tiếp tục

2. Kết quả cuối cùng chứa 4 bản ghi khớp giữa hai mảng.

#### Ví dụ 2: Kết hợp sách và tác giả (quan hệ nhiều-nhiều)

```javascript
// Dữ liệu sách
const books = [
    { bookId: 1, title: "JavaScript: The Good Parts" },
    { bookId: 2, title: "Clean Code" },
    { bookId: 3, title: "Eloquent JavaScript" }
];

// Dữ liệu tác giả
const authors = [
    { authorId: 1, name: "Douglas Crockford" },
    { authorId: 2, name: "Robert C. Martin" },
    { authorId: 3, name: "Marijn Haverbeke" }
];

// Bảng quan hệ giữa sách và tác giả (nhiều-nhiều)
const bookAuthors = [
    { bookId: 1, authorId: 1 },
    { bookId: 2, authorId: 2 },
    { bookId: 3, authorId: 3 },
    { bookId: 2, authorId: 1 } // Sách "Clean Code" có hai tác giả
];

// Kết hợp ba bảng để lấy thông tin sách và tác giả
// Đầu tiên kết hợp books và bookAuthors
const bookWithAuthorIds = nestedLoopJoin(books, bookAuthors, "bookId", "bookId");
// Sau đó kết hợp kết quả với authors
const bookWithAuthors = nestedLoopJoin(bookWithAuthorIds, authors, "authorId", "authorId");

console.log(bookWithAuthors);

// Kết quả:
// [
//   {
//     bookId: 1,
//     title: "JavaScript: The Good Parts",
//     authorId: 1,
//     name: "Douglas Crockford"
//   },
//   {
//     bookId: 2,
//     title: "Clean Code",
//     authorId: 2,
//     name: "Robert C. Martin"
//   },
//   {
//     bookId: 3,
//     title: "Eloquent JavaScript",
//     authorId: 3,
//     name: "Marijn Haverbeke"
//   },
//   {
//     bookId: 2,
//     title: "Clean Code",
//     authorId: 1,
//     name: "Douglas Crockford"
//   }
// ]
```

#### Quá trình thực thi chi tiết:

1. Đầu tiên, thực hiện Nested Loop Join giữa `books` và `bookAuthors`:
   - Kết quả trung gian:
   ```
   bookWithAuthorIds = [
     { bookId: 1, title: "JavaScript: The Good Parts", authorId: 1 },
     { bookId: 2, title: "Clean Code", authorId: 2 },
     { bookId: 3, title: "Eloquent JavaScript", authorId: 3 },
     { bookId: 2, title: "Clean Code", authorId: 1 }
   ]
   ```

2. Sau đó, thực hiện Nested Loop Join giữa `bookWithAuthorIds` và `authors`:
   - Với mỗi sách trong `bookWithAuthorIds`, tìm tác giả có authorId tương ứng trong `authors`
   - Cuối cùng, ta có một danh sách đầy đủ các sách với thông tin chi tiết về tác giả

3. Chú ý rằng có một sách "Clean Code" xuất hiện hai lần trong kết quả cuối cùng vì nó có hai tác giả khác nhau.

## 4. Binary Search (Tìm kiếm nhị phân)

### 4.1 Khái niệm
Binary Search là thuật toán tìm kiếm hiệu quả trên mảng đã sắp xếp. Thay vì kiểm tra từng phần tử như tìm kiếm tuyến tính, Binary Search liên tục chia đôi phạm vi tìm kiếm để đạt được độ phức tạp O(log n).

### 4.2 Cách thức thực hiện
1. Đảm bảo mảng đã được sắp xếp
2. Bắt đầu với phạm vi là toàn bộ mảng
3. So sánh phần tử giữa của phạm vi hiện tại với giá trị cần tìm
4. Nếu tìm thấy, trả về vị trí
5. Nếu giá trị tìm kiếm nhỏ hơn, tiếp tục tìm kiếm ở nửa bên trái
6. Nếu giá trị tìm kiếm lớn hơn, tiếp tục tìm kiếm ở nửa bên phải
7. Lặp lại các bước 3-6 cho đến khi tìm thấy hoặc phạm vi tìm kiếm trống

### 4.3 Cài đặt bằng JavaScript

```javascript
// Phiên bản đệ quy
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    // Trường hợp cơ sở: không tìm thấy
    if (start > end) {
        return -1;
    }
    
    // Tính chỉ số giữa
    const mid = Math.floor((start + end) / 2);
    
    // Nếu phần tử giữa là mục tiêu
    if (arr[mid] === target) {
        return mid;
    }
    
    // Nếu mục tiêu nhỏ hơn phần tử giữa, tìm bên trái
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
    
    // Nếu mục tiêu lớn hơn phần tử giữa, tìm bên phải
    return binarySearchRecursive(arr, target, mid + 1, end);
}

// Phiên bản vòng lặp
function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        // Tính chỉ số giữa
        const mid = Math.floor((left + right) / 2);
        
        // Nếu phần tử giữa là mục tiêu
        if (arr[mid] === target) {
            return mid;
        }
        
        // Nếu mục tiêu nhỏ hơn phần tử giữa, tìm bên trái
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            // Nếu mục tiêu lớn hơn phần tử giữa, tìm bên phải
            left = mid + 1;
        }
    }
    
    // Không tìm thấy
    return -1;
}

// Tìm kiếm nhị phân với mảng các đối tượng
function binarySearchObjects(arr, key, value) {
    // Đảm bảo mảng đ