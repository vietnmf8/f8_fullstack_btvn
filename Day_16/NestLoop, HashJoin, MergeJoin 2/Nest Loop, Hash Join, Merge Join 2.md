
# Thuật Toán Xử Lý Dữ Liệu trong JavaScript

## 1. HASH JOIN

### 🔹 Khái niệm:
Thuật toán `Hash Join` dùng để kết hợp 2 mảng dữ liệu theo một khóa chung. Xây dựng bảng ánh xạ từ mảng nhỏ hơn để tra cứu nhanh.

### 🔹 Cách thức hoạt động:
1. Tạo object từ mảng A.
2. Duyệt mảng B, kiểm tra nếu phần tử có khóa trùng.
3. Nếu có, gộp dữ liệu lại.

### 🔹 Cú pháp:
```javascript
function hashJoin(arr1, arr2, key) {
  const hashTable = {};
  const result = [];

  arr1.forEach(item => {
    hashTable[item[key]] = item;
  });

  arr2.forEach(item => {
    const matched = hashTable[item[key]];
    if (matched) {
      result.push({ ...matched, ...item });
    }
  });

  return result;
}
```

### 🔹 Ví dụ:
```javascript
const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
  { id: 3, name: "Cường" }
];

const orders = [
  { id: 1, product: "Sách" },
  { id: 3, product: "Bút" },
  { id: 4, product: "Vở" }
];

console.log(hashJoin(users, orders, "id"));
```

✅ **Kết quả:**
```javascript
[
  { id: 1, name: "An", product: "Sách" },
  { id: 3, name: "Cường", product: "Bút" }
]
```

---

## 2. MERGE JOIN

### 🔹 Khái niệm:
Merge Join cần cả hai mảng đã **sắp xếp theo khóa chung**. Duyệt song song và so sánh.

### 🔹 Cách hoạt động:
1. Sắp xếp hai mảng.
2. Dùng hai con trỏ.
3. So sánh khóa.

### 🔹 Cú pháp:
```javascript
function mergeJoin(arr1, arr2, key) {
  const result = [];

  arr1.sort((a, b) => a[key] - b[key]);
  arr2.sort((a, b) => a[key] - b[key]);

  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i][key] === arr2[j][key]) {
      result.push({ ...arr1[i], ...arr2[j] });
      i++;
      j++;
    } else if (arr1[i][key] < arr2[j][key]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
```

### 🔹 Ví dụ:
```javascript
const students = [
  { id: 1, name: "An" },
  { id: 3, name: "Bình" },
  { id: 5, name: "Cường" }
];

const scores = [
  { id: 1, score: 8 },
  { id: 2, score: 6 },
  { id: 3, score: 7 }
];

console.log(mergeJoin(students, scores, "id"));
```

✅ **Kết quả:**
```javascript
[
  { id: 1, name: "An", score: 8 },
  { id: 3, name: "Bình", score: 7 }
]
```

---

## 3. NESTED LOOP JOIN

### 🔹 Khái niệm:
So sánh từng phần tử với nhau bằng vòng lặp lồng nhau.

### 🔹 Cú pháp:
```javascript
function nestedLoopJoin(arr1, arr2, key) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][key] === arr2[j][key]) {
        result.push({ ...arr1[i], ...arr2[j] });
      }
    }
  }

  return result;
}
```

### 🔹 Ví dụ:
```javascript
const a = [
  { id: 1, x: "X1" },
  { id: 2, x: "X2" }
];

const b = [
  { id: 2, y: "Y2" },
  { id: 1, y: "Y1" }
];

console.log(nestedLoopJoin(a, b, "id"));
```

✅ **Kết quả:**
```javascript
[
  { id: 1, x: "X1", y: "Y1" },
  { id: 2, x: "X2", y: "Y2" }
]
```

---

## 4. BINARY SEARCH

### 🔹 Khái niệm:
Tìm kiếm nhị phân trong mảng đã sắp xếp.

### 🔹 Cú pháp:
```javascript
function binarySearch(arr, key, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid][key] === value) {
      return arr[mid];
    } else if (arr[mid][key] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
```

### 🔹 Ví dụ:
```javascript
const items = [
  { id: 1, name: "A" },
  { id: 3, name: "B" },
  { id: 5, name: "C" }
];

console.log(binarySearch(items, "id", 3));
```

✅ **Kết quả:**
```javascript
{ id: 3, name: "B" }
```

---

## 5. So sánh các thuật toán

| Thuật toán        | Ưu điểm                           | Nhược điểm                         | Dùng khi nào?                          |
|-------------------|-----------------------------------|-------------------------------------|----------------------------------------|
| Hash Join         | Rất nhanh, không cần sắp xếp      | Tốn bộ nhớ (object)                 | Dữ liệu chưa sắp xếp, cần hiệu năng   |
| Merge Join        | Nhanh, tiết kiệm bộ nhớ           | Cần sắp xếp trước                   | Khi cả hai mảng đã sắp xếp            |
| Nested Loop Join  | Dễ hiểu, đơn giản                 | Rất chậm với mảng lớn               | Mảng nhỏ hoặc kiểm thử đơn giản       |
| Binary Search     | Tìm rất nhanh một phần tử         | Cần mảng sắp xếp                    | Tìm kiếm nhanh trong danh sách        |

---

## 6. Lưu ý & Tóm tắt

### 🔸 Lưu ý:
- Hash Join dễ bị ghi đè nếu có nhiều khóa giống nhau.
- Merge Join & Binary Search bắt buộc cần mảng sắp xếp.
- Không dùng `Set`, chỉ dùng `object`, `array`.

### 🔸 Tóm tắt:
- ✅ Mảng lớn: ưu tiên **Hash Join**, **Merge Join**.
- ✅ Mảng nhỏ: dùng **Nested Loop Join**.
- ✅ Tìm kiếm: dùng **Binary Search**.
