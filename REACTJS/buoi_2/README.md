# 📘 Buổi 2: JSX - Ngôn ngữ mới của React

## 🎯 Mục tiêu học tập:
✅ Hiểu JSX là gì và tại sao React sử dụng JSX
✅ Viết được cú pháp JSX cơ bản
✅ Phân biệt được JSX với HTML thông thường

## 🩹 Nỗi đau – Tại sao cần học bài này?
- **Vấn đề:** Khi viết React bằng JavaScript thuần, code rất phức tạp và khó đọc
- **Hệ quả:** Không biết JSX = không thể viết React hiệu quả, code sẽ rối rắm như mì tôm 🍜

## 🧠 Khái niệm chính:
**JSX** (JavaScript XML) là cú pháp mở rộng của JavaScript, cho phép viết HTML bên trong JavaScript.

🌟 **Ví dụ đời sống:** JSX giống như viết tiếng Việt có pha tiếng Anh - hai ngôn ngữ hòa quyện thành một!

**So sánh:**
- HTML thuần: `<h1>Xin chào</h1>`
- JSX: `const greeting = <h1>Xin chào</h1>`

## 📌 Cú pháp cơ bản:
```jsx
// Cách viết JSX đơn giản
const element = <h1>Hello World!</h1>;

// JSX với biến JavaScript
const name = "Bạn";
const greeting = <h1>Xin chào {name}!</h1>;

// JSX với nhiều dòng (cần đóng ngoặc)
const card = (
  <div>
    <h2>Tiêu đề</h2>
    <p>Nội dung</p>
  </div>
);
```

## 🔍 Giải thích cú pháp:
- **Dấu `{}`**: Cho phép viết JavaScript bên trong JSX
- **Ngoặc đơn `()`**: Bao quanh JSX nhiều dòng để tránh lỗi
- **Phải có thẻ đóng**: Mọi thẻ JSX đều phải đóng (như `<br />`)

## 💻 Ví dụ minh họa:
```jsx
function App() {
  const studentName = "Minh";
  const age = 20;
  const isStudent = true;
  
  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      <p>Tên: {studentName}</p>
      <p>Tuổi: {age}</p>
      <p>Là sinh viên: {isStudent ? "Có" : "Không"}</p>
    </div>
  );
}
```
📝 **Giải thích:** Biến JavaScript được đặt trong `{}` để hiển thị giá trị

---

# 🧪 Bài tập thực hành - Đáp án chi tiết

## 📝 Bài 1: Thông tin cá nhân

### 🎯 Yêu cầu:
Tạo component hiển thị thông tin cá nhân (tên, tuổi, sở thích)

### ✅ Đáp án:

```jsx
function PersonalInfo() {
  // 📌 Khai báo các biến chứa thông tin cá nhân
  const name = "Nguyễn Văn A";
  const age = 22;
  const hobbies = ["Đọc sách", "Nghe nhạc", "Du lịch"];
  const isWorking = true;
  
  return (
    <div style={{
      padding: "20px",
      border: "2px solid #007bff",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{color: "#007bff", textAlign: "center"}}>
        🙋‍♂️ Thông tin cá nhân
      </h2>
      
      <div style={{lineHeight: "1.8"}}>
        <p><strong>👤 Họ tên:</strong> {name}</p>
        <p><strong>🎂 Tuổi:</strong> {age} tuổi</p>
        <p><strong>💼 Trạng thái:</strong> {isWorking ? "Đang đi làm" : "Đang tìm việc"}</p>
        
        <div>
          <strong>🎨 Sở thích:</strong>
          <ul style={{marginTop: "5px"}}>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        
        <p style={{
          marginTop: "15px", 
          padding: "10px", 
          backgroundColor: "#f8f9fa", 
          borderRadius: "5px",
          fontSize: "14px"
        }}>
          💡 <em>Tôi có {hobbies.length} sở thích và {age >= 18 ? "đã" : "chưa"} đủ tuổi trưởng thành!</em>
        </p>
      </div>
    </div>
  );
}
```

### 🔍 Giải thích từng khối code:

#### 1️⃣ **Khai báo biến (dòng 2-6):**
```jsx
const name = "Nguyễn Văn A";
const age = 22;
const hobbies = ["Đọc sách", "Nghe nhạc", "Du lịch"];
const isWorking = true;
```
- 📝 Tạo các biến JavaScript chứa dữ liệu
- `hobbies` là mảng (array) chứa nhiều sở thích
- `isWorking` là boolean để kiểm tra trạng thái làm việc

#### 2️⃣ **CSS Inline Style:**
```jsx
<div style={{
  padding: "20px",
  border: "2px solid #007bff",
  borderRadius: "10px",
  maxWidth: "400px",
  margin: "20px auto",
  fontFamily: "Arial, sans-serif"
}}>
```
- 🎨 **Dấu `{{` đôi**: Ngoặc nhọn bên ngoài cho JSX expression, bên trong là object JavaScript
- **camelCase**: CSS property phải viết dạng camelCase (`fontSize` thay vì `font-size`)
- **String values**: Giá trị CSS phải đặt trong dấu nháy

#### 3️⃣ **Hiển thị dữ liệu cơ bản:**
```jsx
<p><strong>👤 Họ tên:</strong> {name}</p>
<p><strong>🎂 Tuổi:</strong> {age} tuổi</p>
```
- 🔑 Dùng `{}` để chèn biến JavaScript vào JSX
- Kết hợp text và biến trong cùng một thẻ

#### 4️⃣ **Conditional Rendering:**
```jsx
<p><strong>💼 Trạng thái:</strong> {isWorking ? "Đang đi làm" : "Đang tìm việc"}</p>
```
- ⚡ Toán tử 3 ngôi: `điều_kiện ? giá_trị_đúng : giá_trị_sai`
- Hiển thị nội dung khác nhau dựa trên điều kiện

#### 5️⃣ **Render mảng:**
```jsx
{hobbies.map((hobby, index) => (
  <li key={index}>{hobby}</li>
))}
```
- 🔄 `.map()` duyệt qua từng phần tử trong mảng
- `key={index}` giúp React theo dõi từng item (bắt buộc)
- Mỗi `hobby` sẽ tạo ra một thẻ `<li>`

---

## 📝 Bài 2: Hiển thị thời gian hiện tại

### 🎯 Yêu cầu:
Tạo component hiển thị thời gian hiện tại sử dụng `new Date()`

### ✅ Đáp án:

```jsx
import { useState, useEffect } from 'react';

function CurrentTime() {
  // 📌 Tạo state để lưu thời gian hiện tại
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // 🔄 Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Cleanup function để tránh memory leak
    return () => clearInterval(timer);
  }, []);
  
  // 📅 Tạo các biến để format thời gian
  const now = currentTime;
  const date = now.toLocaleDateString('vi-VN');
  const time = now.toLocaleTimeString('vi-VN');
  const dayOfWeek = now.toLocaleDateString('vi-VN', { weekday: 'long' });
  const hour = now.getHours();
  
  // 🌅 Xác định buổi trong ngày
  const getTimeOfDay = () => {
    if (hour >= 6 && hour < 12) return "Buổi sáng ☀️";
    if (hour >= 12 && hour < 18) return "Buổi chiều 🌤️";
    if (hour >= 18 && hour < 22) return "Buổi tối 🌆";
    return "Buổi đêm 🌙";
  };
  
  return (
    <div style={{
      padding: "25px",
      border: "3px solid #28a745",
      borderRadius: "15px",
      maxWidth: "450px",
      margin: "20px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #e8f5e8, #f0f8f0)"
    }}>
      <h2 style={{color: "#28a745", marginBottom: "20px"}}>
        ⏰ Thời gian hiện tại
      </h2>
      
      {/* Hiển thị thời gian chính */}
      <div style={{
        fontSize: "2.5em",
        fontWeight: "bold",
        color: "#28a745",
        margin: "10px 0",
        fontFamily: "monospace"
      }}>
        {time}
      </div>
      
      {/* Hiển thị ngày tháng */}
      <div style={{
        fontSize: "1.3em",
        color: "#666",
        margin: "5px 0"
      }}>
        📅 {dayOfWeek}, {date}
      </div>
      
      {/* Hiển thị buổi trong ngày */}
      <div style={{
        fontSize: "1.1em",
        color: "#495057",
        margin: "15px 0",
        padding: "10px",
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: "8px"
      }}>
        {getTimeOfDay()}
      </div>
      
      {/* Thông tin bổ sung */}
      <div style={{
        fontSize: "0.9em",
        color: "#6c757d",
        marginTop: "15px",
        padding: "8px",
        backgroundColor: "#f8f9fa",
        borderRadius: "5px"
      }}>
        💡 Thời gian cập nhật mỗi giây<br/>
        🌍 Múi giờ: {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </div>
    </div>
  );
}
```

### 🔍 Giải thích từng khối code:

#### 1️⃣ **Import Hooks (dòng 1):**
```jsx
import { useState, useEffect } from 'react';
```
- 📦 Import 2 hook cần thiết từ React
- `useState`: Quản lý state (dữ liệu thay đổi)
- `useEffect`: Xử lý side effects (timer, API calls...)

#### 2️⃣ **Tạo state cho thời gian (dòng 5):**
```jsx
const [currentTime, setCurrentTime] = useState(new Date());
```
- 🔄 `useState` tạo biến state có thể thay đổi
- `new Date()` tạo object thời gian hiện tại làm giá trị khởi tạo
- `setCurrentTime` là hàm để cập nhật thời gian

#### 3️⃣ **Tự động cập nhật thời gian (dòng 7-15):**
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
```
- ⏱️ `setInterval` chạy hàm mỗi 1000ms (1 giây)
- `useEffect` chạy code sau khi component render lần đầu
- `[]` dependency array rỗng = chỉ chạy 1 lần
- `clearInterval` dọn dẹp timer khi component bị hủy (tránh memory leak)

#### 4️⃣ **Format thời gian (dòng 17-22):**
```jsx
const date = now.toLocaleDateString('vi-VN');
const time = now.toLocaleTimeString('vi-VN');
const dayOfWeek = now.toLocaleDateString('vi-VN', { weekday: 'long' });
const hour = now.getHours();
```
- 🇻🇳 `'vi-VN'` format theo chuẩn Việt Nam
- `toLocaleDateString()`: Chuyển thành chuỗi ngày tháng
- `toLocaleTimeString()`: Chuyển thành chuỗi giờ phút giây
- `{ weekday: 'long' }`: Hiển thị tên thứ đầy đủ
- `getHours()`: Lấy giờ hiện tại (0-23)

#### 5️⃣ **Logic xác định buổi (dòng 24-30):**
```jsx
const getTimeOfDay = () => {
  if (hour >= 6 && hour < 12) return "Buổi sáng ☀️";
  if (hour >= 12 && hour < 18) return "Buổi chiều 🌤️";
  if (hour >= 18 && hour < 22) return "Buổi tối 🌆";
  return "Buổi đêm 🌙";
};
```
- 🕐 Phân loại thời gian dựa trên giờ
- Dùng chuỗi if-else để kiểm tra điều kiện
- Return emoji tương ứng cho từng buổi

#### 6️⃣ **Advanced CSS Styling:**
```jsx
background: "linear-gradient(135deg, #e8f5e8, #f0f8f0)"
backgroundColor: "rgba(255,255,255,0.7)"
```
- 🎨 `linear-gradient`: Tạo màu chuyển dần
- `rgba()`: Màu với độ trong suốt (alpha channel)
- `monospace`: Font chữ có độ rộng ký tự đồng đều (tốt cho hiển thị số)

---

## 🔤 Từ khóa & khái niệm quan trọng:
- **JSX**: Cú pháp viết HTML trong JavaScript
- **Element**: Thành phần nhỏ nhất trong React
- **Expression**: Biểu thức JavaScript trong `{}`
- **Fragment**: Thẻ trống `<>` để bao nhiều element
- **State**: Dữ liệu có thể thay đổi trong component
- **Hook**: Hàm đặc biệt của React (useState, useEffect...)
- **Side Effect**: Tác vụ bên ngoài render (timer, API calls...)
- **Dependency Array**: Mảng điều khiển khi useEffect chạy

## ⚠️ Lưu ý & lỗi thường gặp:

### 🚫 **Lỗi JSX cơ bản:**
- **Lỗi:** Quên đóng thẻ `<br>` → **Sửa:** `<br />`
- **Lỗi:** Dùng `class` → **Sửa:** `className`
- **Lỗi:** Quên ngoặc nhọn `{}` khi dùng biến
- **Lỗi:** CSS property dùng dấu gạch ngang → **Sửa:** Dùng camelCase

### 🚫 **Lỗi CSS inline:**
- **Lỗi:** `style="color: red"` → **Sửa:** `style={{color: "red"}}`
- **Lỗi:** `{{fontSize: 16}}` → **Sửa:** `{{fontSize: "16px"}}`
- **Lỗi:** `{{background-color: "blue"}}` → **Sửa:** `{{backgroundColor: "blue"}}`

### 🚫 **Lỗi Array rendering:**
- **Lỗi:** Quên `key` prop → **Cảnh báo:** Each child should have unique key
- **Lỗi:** Dùng index làm key cho dynamic list → **Vấn đề:** Performance issues

### 🔍 **Cách kiểm tra lỗi:**
- Luôn mở Developer Tools (F12)
- Xem tab Console để đọc error messages
- React error messages rất chi tiết và helpful

## 💡 Điểm quan trọng cần nhớ:

1. **JSX Expression `{}`**: Bao bọc mọi JavaScript code
2. **CSS Inline Style**: Dùng object JavaScript với camelCase properties
3. **State Management**: Dùng `useState` cho dữ liệu thay đổi
4. **Effect Hook**: `useEffect` cho side effects và cleanup
5. **Array Mapping**: `.map()` để render danh sách, nhớ `key` prop
6. **Conditional Logic**: Toán tử 3 ngôi cho điều kiện đơn giản
7. **Date Object**: `new Date()` và các method format thời gian

## 🎯 Tóm tắt buổi học:
Hôm nay bạn đã học được JSX - cách viết HTML trong JavaScript. JSX giúp code React dễ đọc và trực quan hơn. Đặc biệt, bạn đã thực hành:
- Cú pháp JSX cơ bản với expressions
- CSS inline styling với double braces
- Conditional rendering với toán tử 3 ngôi
- Array mapping để render lists
- State management với useState
- Side effects với useEffect

Buổi tới chúng ta sẽ học về **Component** - khối xây dựng chính của React!

---
*💡 Tip: Luyện tập viết JSX mỗi ngày 15 phút để quen tay nhé! Thử tạo thêm các component khác như Weather Card, Profile Card, hoặc Todo Item.*