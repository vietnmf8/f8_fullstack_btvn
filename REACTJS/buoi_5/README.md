# 📘 BUỔI 5: STATE - BỘ NHỚ CỦA COMPONENT

## 🎯 Mục tiêu học tập:
✅ Hiểu được State là gì và tại sao cần dùng State
✅ Biết cách khai báo và sử dụng useState Hook
✅ Tạo được component có thể thay đổi dữ liệu theo thời gian

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
- Với Props (buổi trước), bạn chỉ có thể truyền dữ liệu từ cha xuống con, nhưng dữ liệu đó không thể thay đổi
- Nếu muốn tạo 1 nút đếm số lần click, hoặc form nhập liệu, bạn sẽ bế tắc vì không có cách lưu trữ dữ liệu thay đổi

**Hệ quả nếu không biết:**
- Website của bạn sẽ "chết cứng" - không tương tác được
- Không thể tạo ra các tính năng như: đăng nhập, giỏ hàng, to-do list...

## 🧠 Khái niệm chính:

**State** giống như "bộ nhớ tạm thời" của component. Hãy tưởng tượng:
- **Props** như "thông tin trên thẻ căn cước" - cố định, không đổi
- **State** như "số tiền trong ví" - có thể tăng giảm theo thời gian

State cho phép component "nhớ" thông tin và thay đổi giao diện khi thông tin đó thay đổi.

## 📌 Cú pháp cơ bản:

```jsx
import { useState } from 'react';

function MyComponent() {
  // Khai báo state với giá trị ban đầu
  const [stateName, setStateName] = useState(initialValue);
  
  return (
    <div>
      <p>{stateName}</p>
      <button onClick={() => setStateName(newValue)}>
        Thay đổi
      </button>
    </div>
  );
}
```

## 🔍 Giải thích cú pháp:

```jsx
const [count, setCount] = useState(0);
```

- **`useState(0)`**: Tạo state với giá trị ban đầu là 0
- **`count`**: Biến chứa giá trị hiện tại của state
- **`setCount`**: Hàm để thay đổi giá trị của state
- **`[count, setCount]`**: Destructuring - tách mảng thành 2 biến riêng biệt

## 💻 Ví dụ minh họa:

```jsx
import { useState } from 'react';

function Counter() {
  // Tạo state đếm số, bắt đầu từ 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Bộ đếm: {count}</h2>
      
      {/* Khi click, tăng count lên 1 */}
      <button onClick={() => setCount(count + 1)}>
        Tăng lên
      </button>
      
      {/* Khi click, giảm count xuống 1 */}
      <button onClick={() => setCount(count - 1)}>
        Giảm xuống
      </button>
      
      {/* Reset về 0 */}
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

**Giải thích từng dòng:**
- Dòng 4: Tạo state `count` với giá trị ban đầu là 0
- Dòng 7: Hiển thị giá trị hiện tại của count
- Dòng 10: Khi click, gọi `setCount(count + 1)` để tăng giá trị
- Dòng 15: Tương tự nhưng giảm xuống
- Dòng 20: Reset về giá trị ban đầu

## 🧪 Bài tập thực hành:

**Bài 1: Tạo nút Bật/Tắt đèn**
```jsx
import { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <h2>Đèn đang: {isOn ? "BẬT 💡" : "TẮT ⚫"}</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Tắt đèn" : "Bật đèn"}
      </button>
    </div>
  );
}
```

**Bài 2: Đếm số lần click**
```jsx
function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  
  return (
    <div>
      <p>Bạn đã click {clicks} lần</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Click me!
      </button>
    </div>
  );
}
```

## 🔤 Từ khóa & khái niệm quan trọng:

- **State**: Bộ nhớ tạm thời của component, có thể thay đổi
- **useState**: Hook để tạo và quản lý state
- **Hook**: Hàm đặc biệt của React bắt đầu bằng "use"
- **setState function**: Hàm để cập nhật giá trị state
- **Re-render**: Quá trình React vẽ lại component khi state thay đổi

## ⚠️ Lưu ý & lỗi thường gặp:

1. **Không được thay đổi state trực tiếp:**
   ```jsx
   // ❌ Sai
   count = count + 1;
   
   // ✅ Đúng
   setCount(count + 1);
   ```

2. **Nhớ import useState:**
   ```jsx
   // ❌ Quên import
   function MyComponent() {
     const [count, setCount] = useState(0); // Lỗi!
   }
   
   // ✅ Nhớ import
   import { useState } from 'react';
   ```

3. **State là bất đồng bộ (asynchronous):**
   ```jsx
   // ❌ Có thể không hoạt động như mong đợi
   setCount(count + 1);
   console.log(count); // Vẫn là giá trị cũ
   ```

## 🎯 Tóm tắt buổi học:

✨ **Đã học được:**
- State là "bộ nhớ" của component, cho phép lưu trữ dữ liệu thay đổi
- Cách sử dụng `useState` Hook để tạo và quản lý state
- Tạo được component tương tác đơn giản (đếm số, bật/tắt)

🚀 **Buổi tiếp theo:** Chúng ta sẽ học **Event Handling** - cách xử lý các sự kiện phức tạp hơn như nhập liệu, submit form, và tương tác người dùng nâng cao!

*💡 Mẹo: Hãy thực hành tạo thêm vài component đơn giản với state để làm quen. Ví dụ: đồng hồ đếm ngược, thay đổi màu nền, hoặc hiển thị/ẩn nội dung.*