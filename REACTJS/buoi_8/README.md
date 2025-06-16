# 📘 Buổi 8: Danh sách và Keys - Render nhiều phần tử

## 🎯 Mục tiêu học tập:
✅ Hiểu cách render danh sách phần tử trong React  
✅ Nắm vững khái niệm và cách sử dụng Keys  
✅ Tạo được các component hiển thị danh sách động

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
- Trong các ứng dụng web, bạn thường phải hiển thị danh sách: danh sách sản phẩm, bài viết, người dùng, tin nhắn...
- Nếu không biết render danh sách, bạn sẽ phải viết code lặp lại rất nhiều lần
- Ví dụ: Thay vì viết 100 dòng code cho 100 sản phẩm, bạn có thể chỉ cần 10 dòng!

**Hệ quả nếu không biết:**
- Code dài, khó bảo trì
- Không thể tạo giao diện động
- Performance kém do React không biết cách update hiệu quả

## 🧠 Khái niệm chính:

### 📝 Render danh sách là gì?
- **Định nghĩa:** Là cách hiển thị nhiều phần tử giống nhau từ một mảng dữ liệu
- **Ví dụ đời sống:** Giống như in danh sách học sinh từ sổ điểm - bạn có template, chỉ cần điền tên khác nhau

### 🔑 Key là gì?
- **Định nghĩa:** Key là thuộc tính đặc biệt giúp React nhận biết từng phần tử trong danh sách
- **Ví dụ đời sống:** Giống như số chứng minh thư - mỗi người có một số duy nhất để phân biệt

## 📌 Cú pháp cơ bản:

```jsx
// Cách 1: Sử dụng map() để render danh sách
const fruits = ['apple', 'banana', 'orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Cách 2: Với dữ liệu phức tạp hơn
const users = [
  { id: 1, name: 'An', age: 25 },
  { id: 2, name: 'Bình', age: 30 },
  { id: 3, name: 'Chi', age: 28 }
];

function UserList() {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Tuổi: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🔍 Giải thích cú pháp:

**`array.map()`:**
- `map()` là phương thức JavaScript tạo mảng mới từ mảng cũ
- Trong React, chúng ta dùng nó để biến mảng dữ liệu thành mảng JSX elements

**`key={value}`:**
- Mỗi phần tử trong danh sách phải có key duy nhất
- React dùng key để theo dõi thay đổi, thêm/xóa phần tử
- Key nên là giá trị ổn định (như id), không nên dùng index

**Cú pháp `{}`:**
- Dấu ngoặc nhọn để nhúng JavaScript vào JSX
- Bên trong có thể là biến, hàm, hoặc biểu thức

## 💻 Ví dụ minh họa:

```jsx
import React from 'react';

// Dữ liệu mẫu - danh sách sản phẩm
const products = [
  { id: 1, name: 'iPhone 15', price: 25000000, category: 'Điện thoại' },
  { id: 2, name: 'MacBook Pro', price: 45000000, category: 'Laptop' },
  { id: 3, name: 'AirPods', price: 5000000, category: 'Tai nghe' },
  { id: 4, name: 'iPad Air', price: 18000000, category: 'Tablet' }
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>📱 Danh sách sản phẩm</h2>
      
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>💰 Giá: {product.price.toLocaleString()} đ</p>
          <p>📂 Loại: {product.category}</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

**Giải thích từng dòng:**
- `products.map(product => ...)`: Duyệt qua từng sản phẩm
- `key={product.id}`: Dùng id làm key (duy nhất, ổn định)
- `{product.name}`: Hiển thị tên sản phẩm từ object
- `toLocaleString()`: Format số thành định dạng có dấu phẩy

## 🧪 Bài tập thực hành:

### Bài tập 1: Danh sách sinh viên
Tạo component hiển thị danh sách sinh viên với thông tin: tên, tuổi, điểm số.

```jsx
const students = [
  { id: 1, name: 'Nguyễn Văn A', age: 20, score: 8.5 },
  { id: 2, name: 'Trần Thị B', age: 19, score: 9.0 },
  { id: 3, name: 'Lê Văn C', age: 21, score: 7.5 }
];

function StudentList() {
  return (
    <div>
      <h2>📚 Danh sách sinh viên</h2>
      {/* Viết code ở đây */}
    </div>
  );
}
```

**Đáp án:**
```jsx
function StudentList() {
  return (
    <div>
      <h2>📚 Danh sách sinh viên</h2>
      {students.map(student => (
        <div key={student.id} style={{border: '1px solid #ccc', padding: '10px', margin: '5px'}}>
          <h3>👨‍🎓 {student.name}</h3>
          <p>🎂 Tuổi: {student.age}</p>
          <p>📊 Điểm: {student.score}/10</p>
        </div>
      ))}
    </div>
  );
}
```

### Bài tập 2: Todo List đơn giản
```jsx
const todos = [
  { id: 1, task: 'Học React', completed: true },
  { id: 2, task: 'Làm bài tập', completed: false },
  { id: 3, task: 'Đi mua sắm', completed: false }
];

// Hiển thị ✅ nếu hoàn thành, ⏳ nếu chưa hoàn thành
```

**Đáp án:**
```jsx
function TodoList() {
  return (
    <div>
      <h2>📝 Danh sách công việc</h2>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.completed ? '✅' : '⏳'}</span>
          <span style={{marginLeft: '10px', textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.task}
          </span>
        </div>
      ))}
    </div>
  );
}
```

## 🔤 Từ khóa & khái niệm quan trọng:

- **map()**: Phương thức tạo mảng mới từ mảng cũ
- **key**: Thuộc tính duy nhất để React nhận biết phần tử
- **array rendering**: Render danh sách từ mảng dữ liệu
- **JSX expression**: Biểu thức JavaScript trong JSX `{}`
- **unique key**: Key duy nhất, ổn định cho mỗi phần tử

## ⚠️ Lưu ý & lỗi thường gặp:

### 🚫 Không dùng key:
```jsx
// SAI - Thiếu key
{items.map(item => <div>{item.name}</div>)}

// ĐÚNG - Có key
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### 🚫 Dùng index làm key khi không nên:
```jsx
// TRÁNH - Khi danh sách có thể thay đổi thứ tự
{items.map((item, index) => <div key={index}>{item.name}</div>)}

// TỐT HƠN - Dùng id ổn định
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### 🚫 Quên return trong map:
```jsx
// SAI - Thiếu return
{items.map(item => {
  <div key={item.id}>{item.name}</div>
})}

// ĐÚNG - Có return hoặc dùng arrow function
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

## 🎯 Tóm tắt buổi học:

Buổi học hôm nay bạn đã học được:

✅ **Render danh sách**: Dùng `map()` để biến mảng dữ liệu thành mảng JSX elements  
✅ **Key prop**: Thuộc tính duy nhất giúp React quản lý danh sách hiệu quả  
✅ **Thực hành**: Tạo được danh sách sản phẩm, sinh viên, todo list

**Buổi tới:** Chúng ta sẽ học về **Form và Input** - cách thu thập dữ liệu từ người dùng, xử lý sự kiện submit, validate dữ liệu. Kiến thức hôm nay về render danh sách sẽ rất hữu ích khi hiển thị danh sách lỗi validation!

---
*💡 Tip: Thực hành tạo thêm nhiều danh sách khác nhau (menu, gallery, comment list) để nắm vững kiến thức!*