# 📘 Buổi 6: Event Handling - Xử lý sự kiện trong React

## 🔄 Ôn tập buổi trước
Buổi 5 ta đã học về **State** - bộ nhớ của component giúp lưu trữ dữ liệu thay đổi được. Đã biết cách dùng `useState` để tạo state và cập nhật giao diện khi dữ liệu thay đổi.

---

## 🎯 Mục tiêu học tập
✅ Hiểu được Event trong React là gì và tại sao cần thiết  
✅ Biết cách bắt sự kiện click, submit, change trong React  
✅ Thực hành tạo các component tương tác đơn giản với events

---

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
- Website tĩnh không tương tác = nhàm chán, người dùng bỏ đi
- Cần phản hồi khi user click button, gõ form, hover chuột...
- Không biết event handling = không tạo được ứng dụng thực tế

**Hệ quả nếu không biết:**
- Chỉ tạo được trang web "chết", không tương tác
- Không thu thập được dữ liệu từ người dùng
- Ứng dụng React thành vô dụng

---

## 🧠 Khái niệm chính

**Event (Sự kiện)** là những hành động mà người dùng thực hiện trên website:
- Click chuột → onClick
- Gõ phím → onChange, onKeyDown
- Submit form → onSubmit
- Di chuột → onMouseOver

**Giống như đời thật:** Khi bạn bấm công tắc đèn (event), đèn sáng lên (phản hồi). React cũng vậy - khi user làm gì đó, ta phản hồi lại.

**So với JavaScript thuần:** Thay vì `addEventListener`, React dùng props đặc biệt như `onClick`, `onChange`...

---

## 📌 Cú pháp cơ bản

```jsx
function MyComponent() {
  // Hàm xử lý sự kiện
  const handleClick = () => {
    console.log("Button được click!");
  };

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
```

```jsx
// Cách viết ngắn gọn (inline)
function MyComponent() {
  return (
    <button onClick={() => alert("Hello!")}>
      Click me!
    </button>
  );
}
```

---

## 🔍 Giải thích cú pháp

**1. Tên hàm xử lý:** Thường bắt đầu với `handle` + tên sự kiện
```jsx
const handleClick = () => { ... }      // Xử lý click
const handleSubmit = () => { ... }     // Xử lý submit
const handleChange = () => { ... }     // Xử lý thay đổi input
```

**2. Gắn event vào JSX:** Dùng props đặc biệt
```jsx
<button onClick={handleClick}>        // onClick không có ()
<form onSubmit={handleSubmit}>
<input onChange={handleChange}>
```

**3. Event object:** React tự động truyền thông tin sự kiện
```jsx
const handleClick = (event) => {
  console.log(event.target);    // Phần tử được click
  console.log(event.type);      // Loại sự kiện: "click"
};
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Counter với Button
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Hàm tăng số đếm
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Hàm giảm số đếm
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Số đếm: {count}</h2>
      <button onClick={handleIncrement}>Tăng +</button>
      <button onClick={handleDecrement}>Giảm -</button>
    </div>
  );
}
```

### Ví dụ 2: Input với onChange
```jsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  // Xử lý khi user gõ vào input
  const handleChange = (event) => {
    setName(event.target.value);  // Lấy giá trị từ input
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={handleChange}
      />
      <p>Xin chào: {name}</p>
    </div>
  );
}
```

---

## 🧪 Bài tập thực hành

### Bài tập 1: Nút Bật/Tắt Đèn
Tạo component có:
- 1 state `isOn` (true/false)
- 1 button khi click thì đổi trạng thái đèn
- Hiển thị "💡 Đèn bật" hoặc "🔌 Đèn tắt"

**Đáp án:**
```jsx
import { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);  // Đảo ngược trạng thái
  };

  return (
    <div>
      <h2>{isOn ? '💡 Đèn bật' : '🔌 Đèn tắt'}</h2>
      <button onClick={handleToggle}>
        {isOn ? 'Tắt đèn' : 'Bật đèn'}
      </button>
    </div>
  );
}
```

### Bài tập 2: Tính Toán Đơn Giản
Tạo component có 2 input số và hiển thị tổng

**Đáp án:**
```jsx
import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input 
        type="number" 
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <span> + </span>
      <input 
        type="number" 
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <h3>Kết quả: {num1 + num2}</h3>
    </div>
  );
}
```

---

## 🔤 Từ khóa & khái niệm quan trọng

- **Event**: Sự kiện do người dùng tạo ra (click, type, submit...)
- **Event Handler**: Hàm xử lý sự kiện (handleClick, handleChange...)
- **onClick**: Props để bắt sự kiện click chuột
- **onChange**: Props để bắt sự kiện thay đổi input
- **event.target**: Phần tử HTML được tương tác
- **event.target.value**: Giá trị của input khi onChange

---

## ⚠️ Lưu ý & lỗi thường gặp

**1. Quên dấu ngoặc nhọn:**
```jsx
❌ <button onClick="handleClick">    // Sai: dùng string
✅ <button onClick={handleClick}>    // Đúng: dùng function
```

**2. Gọi function ngay lập tức:**
```jsx
❌ <button onClick={handleClick()}>  // Sai: gọi luôn khi render
✅ <button onClick={handleClick}>    // Đúng: chỉ gọi khi click
```

**3. Quên event parameter:**
```jsx
❌ const handleChange = () => {
     console.log(event.target.value); // event không tồn tại
   }

✅ const handleChange = (event) => {
     console.log(event.target.value); // OK
   }
```

**4. Không cập nhật state đúng cách:**
```jsx
❌ count = count + 1;              // Sai: gán trực tiếp
✅ setCount(count + 1);            // Đúng: dùng setter
```

---

## 🎯 Tóm tắt buổi học

**Đã học được:**
- Event là cách React phản hồi tương tác của người dùng
- Cú pháp `onClick={handleFunction}` để bắt sự kiện
- Kết hợp event với state để tạo component tương tác
- Các event phổ biến: onClick, onChange, onSubmit

**Kỹ năng đạt được:**
- Tạo button có phản hồi khi click
- Xử lý input thay đổi theo thời gian thực
- Xây dựng component tương tác cơ bản

**Buối tiếp theo:** Conditional Rendering - Hiển thị có điều kiện, giúp ẩn/hiện phần tử dựa vào state và điều kiện.