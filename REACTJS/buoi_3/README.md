# 📘 Component đầu tiên - Khối xây dựng của React

**🎯 Mục tiêu học tập:**
✅ Hiểu Component là gì và tại sao nó quan trọng
✅ Tạo được Component đầu tiên của mình  
✅ Phân biệt được Functional Component và Class Component
✅ Sử dụng Component trong ứng dụng React

**🩹 Nỗi đau – Tại sao cần học bài này?**
- **Vấn đề thực tế:** Khi làm website lớn, bạn sẽ viết lại code HTML giống nhau rất nhiều lần (như button, header, form...). Điều này tốn thời gian và khó bảo trì.
- **Hệ quả nếu không biết:** Code dài dòng, lặp lại, khó sửa đổi. Khi muốn thay đổi 1 chi tiết nhỏ, phải sửa ở hàng chục chỗ khác nhau.

**🧠 Khái niệm chính:**
**Component** giống như một "khuôn bánh" - bạn tạo ra 1 khuôn, rồi có thể đúc ra hàng trăm chiếc bánh giống nhau.

Trong React, Component là một khối code có thể tái sử dụng, chứa:
- Giao diện (HTML/JSX)
- Logic xử lý (JavaScript)
- Có thể nhận dữ liệu đầu vào (props - sẽ học buổi sau)

Ví dụ: Thay vì viết code cho nút "Like" 100 lần trong Facebook, họ tạo 1 Component "LikeButton" và sử dụng lại ở mọi nơi.

**📌 Cú pháp cơ bản:**
```jsx
// Cách 1: Functional Component (khuyên dùng)
function TenComponent() {
  return (
    <div>
      <h1>Nội dung JSX ở đây</h1>
    </div>
  );
}

// Cách 2: Arrow Function (cũng phổ biến)
const TenComponent = () => {
  return (
    <div>
      <h1>Nội dung JSX ở đây</h1>
    </div>
  );
}

// Sử dụng Component
function App() {
  return (
    <div>
      <TenComponent />  {/* Gọi component như thẻ HTML */}
    </div>
  );
}
```

**🔍 Giải thích cú pháp:**
- **Tên Component:** Luôn viết HOA chữ cái đầu (TenComponent, không phải tenComponent)
- **return:** Component phải trả về JSX (chỉ 1 element cha duy nhất)
- **Sử dụng:** Viết như thẻ HTML `<TenComponent />` hoặc `<TenComponent></TenComponent>`
- **Export/Import:** Để dùng ở file khác, cần export và import

**💻 Ví dụ minh họa:**
```jsx
// Component hiển thị thông tin sinh viên
function StudentCard() {
  return (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <h3>Nguyễn Văn A</h3>
      <p>Tuổi: 20</p>
      <p>Ngành: Công nghệ thông tin</p>
      <button>Xem chi tiết</button>
    </div>
  );
}

// Sử dụng Component trong App
function App() {
  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <StudentCard />  {/* Sinh viên 1 */}
      <StudentCard />  {/* Sinh viên 2 */}
      <StudentCard />  {/* Sinh viên 3 */}
    </div>
  );
}

export default App;
```

**🧪 Bài tập thực hành:**

**Bài 1:** Tạo Component hiển thị thông tin sản phẩm
```jsx
// Tạo Component ProductCard hiển thị:
// - Tên sản phẩm: "iPhone 15"  
// - Giá: "25.000.000 VND"
// - Button "Mua ngay"

// Đáp án:
function ProductCard() {
  return (
    <div style={{border: '2px solid blue', padding: '15px'}}>
      <h2>iPhone 15</h2>
      <p>Giá: 25.000.000 VND</p>
      <button>Mua ngay</button>
    </div>
  );
}
```

**Bài 2:** Sử dụng Component nhiều lần
```jsx
// Tạo Component Welcome chào mừng
// Rồi sử dụng 3 lần trong App

// Đáp án:
function Welcome() {
  return <h2>🎉 Chào mừng bạn đến với React!</h2>;
}

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />  
      <Welcome />
    </div>
  );
}
```

**🔤 Từ khóa & khái niệm quan trọng:**
- **Component:** Khối code tái sử dụng, chứa giao diện và logic
- **Functional Component:** Component viết dưới dạng function
- **JSX:** Cú pháp viết HTML trong JavaScript
- **Export/Import:** Cách chia sẻ Component giữa các file
- **PascalCase:** Quy tắc đặt tên Component (chữ cái đầu viết hoa)

**⚠️ Lưu ý & lỗi thường gặp:**
- **Lỗi tên Component:** Viết thường chữ cái đầu → React hiểu nhầm là thẻ HTML
- **Lỗi return nhiều element:** Component chỉ return được 1 element cha
  ```jsx
  // ❌ Sai
  function Wrong() {
    return (
      <h1>Title</h1>
      <p>Content</p>  // Lỗi: 2 element cùng cấp
    );
  }
  
  // ✅ Đúng  
  function Correct() {
    return (
      <div>
        <h1>Title</h1>
        <p>Content</p>
      </div>
    );
  }
  ```
- **Quên export:** Component không thể import ở file khác nếu không export

**🎯 Tóm tắt buổi học:**
Hôm nay bạn đã học được "linh hồn" của React - **Component**!

**Những gì đã nắm được:**
- Component là khối code tái sử dụng, giúp tránh lặp lại code
- Cách tạo Functional Component với cú pháp đơn giản
- Sử dụng Component như thẻ HTML với tên viết hoa chữ cái đầu
- Component phải return 1 element JSX duy nhất

**Buổi tiếp theo:** Chúng ta sẽ học **Props** - cách truyền dữ liệu vào Component để làm cho chúng linh hoạt hơn. Thay vì tất cả StudentCard đều hiển thị "Nguyễn Văn A", bạn sẽ có thể truyền tên khác nhau cho mỗi card! 🚀