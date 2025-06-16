# 📘 Buổi 7: Conditional Rendering - Hiển thị có điều kiện

## 🔄 Ôn tập nhanh buổi 6
Buổi trước chúng ta đã học về **Event Handling** - cách React phản hồi với tương tác người dùng qua các sự kiện như `onClick`, `onChange`. Giờ chúng ta sẽ học cách hiển thị nội dung khác nhau dựa trên điều kiện!

---

## 🎯 Mục tiêu học tập:
✅ Hiểu khái niệm Conditional Rendering và tầm quan trọng  
✅ Thành thạo 3 cách hiển thị có điều kiện: if/else, ternary operator, và logical &&  
✅ Xây dựng component có thể thay đổi giao diện dựa trên state

---

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
Hầu hết ứng dụng đều cần hiển thị nội dung khác nhau tùy tình huống:
- Hiển thị "Đăng nhập" khi chưa login, "Chào [Tên]" khi đã login
- Hiển thị thông báo lỗi khi form không hợp lệ
- Ẩn/hiện menu dựa trên quyền người dùng

**Hệ quả nếu không biết:**
- Không thể tạo ứng dụng động, tương tác
- Giao diện cứng nhắc, không phù hợp với từng trường hợp
- Trải nghiệm người dùng kém

---

## 🧠 Khái niệm chính:

**Conditional Rendering** là kỹ thuật hiển thị các phần tử JSX khác nhau dựa trên điều kiện cụ thể.

**Ví dụ đời sống:** Giống như bạn mặc áo khoác khi trời lạnh, mặc áo thun khi trời nóng - React cũng "chọn trang phục" (component) phù hợp với "thời tiết" (state/props).

**So với JavaScript thường:** Thay vì dùng `document.getElementById().style.display`, React cho phép quyết định render gì ngay từ đầu.

---

## 📌 Cú pháp cơ bản:

### 1. If/Else Statement
```jsx
function WelcomeMessage({ isLoggedIn, userName }) {
  if (isLoggedIn) {
    return <h1>Chào mừng, {userName}!</h1>;
  } else {
    return <h1>Vui lòng đăng nhập</h1>;
  }
}
```

### 2. Ternary Operator (Toán tử 3 ngôi)
```jsx
function StatusMessage({ isOnline }) {
  return (
    <div>
      {isOnline ? <span>🟢 Online</span> : <span>🔴 Offline</span>}
    </div>
  );
}
```

### 3. Logical AND (&&)
```jsx
function ErrorMessage({ hasError, errorText }) {
  return (
    <div>
      {hasError && <p style={{color: 'red'}}>⚠️ {errorText}</p>}
    </div>
  );
}
```

---

## 🔍 Giải thích cú pháp:

**If/Else Statement:**
- Sử dụng khi có logic phức tạp
- Return trực tiếp JSX element
- Mỗi nhánh if/else là một component hoàn chỉnh

**Ternary Operator:** `điều kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai`
- Ngắn gọn, phù hợp cho điều kiện đơn giản
- Viết inline trong JSX
- Luôn cần cả hai nhánh (đúng và sai)

**Logical AND (&&):**
- Chỉ hiển thị khi điều kiện đúng
- Không cần nhánh "else"
- `true && <Component>` → hiển thị Component
- `false && <Component>` → không hiển thị gì

---

## 💻 Ví dụ minh họa:

```jsx
import React, { useState } from 'react';

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (userName.trim() === '') {
      setShowError(true); // Hiển thị lỗi nếu không nhập tên
    } else {
      setIsLoggedIn(true);  // Đăng nhập thành công
      setShowError(false);  // Ẩn thông báo lỗi
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>🔐 Ứng dụng Đăng nhập</h2>
      
      {/* Conditional Rendering với If/Else logic */}
      {!isLoggedIn ? (
        // Màn hình đăng nhập
        <div>
          <input 
            type="text" 
            placeholder="Nhập tên của bạn"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{padding: '10px', marginRight: '10px'}}
          />
          <button onClick={handleLogin} style={{padding: '10px'}}>
            Đăng nhập
          </button>
          
          {/* Hiển thị lỗi với Logical AND */}
          {showError && (
            <p style={{color: 'red', marginTop: '10px'}}>
              ⚠️ Vui lòng nhập tên!
            </p>
          )}
        </div>
      ) : (
        // Màn hình sau khi đăng nhập
        <div>
          <h3>🎉 Chào mừng, {userName}!</h3>
          <p>Bạn đã đăng nhập thành công</p>
          <button onClick={handleLogout} style={{padding: '10px'}}>
            Đăng xuất
          </button>
        </div>
      )}
      
      {/* Status với Ternary Operator */}
      <div style={{marginTop: '20px', fontSize: '14px'}}>
        Trạng thái: {isLoggedIn ? '🟢 Đã đăng nhập' : '🔴 Chưa đăng nhập'}
      </div>
    </div>
  );
}

export default LoginApp;
```

**Giải thích code:**
- **Dòng 12-19:** Logic if/else quyết định hiển thị form đăng nhập hay thông báo chào mừng
- **Dòng 24-44:** Ternary operator chọn hiển thị form login hoặc welcome message
- **Dòng 36-40:** Logical AND chỉ hiển thị lỗi khi `showError` là true
- **Dòng 47-48:** Ternary operator đơn giản cho status

---

## 🧪 Bài tập thực hành:

### Bài tập 1: Toggle Content
Tạo component có button "Hiện/Ẩn", khi click sẽ hiện/ẩn một đoạn text.

**Đáp án:**
```jsx
function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ẩn' : 'Hiện'} nội dung
      </button>
      
      {isVisible && (
        <p style={{marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0'}}>
          🎉 Đây là nội dung được ẩn/hiện!
        </p>
      )}
    </div>
  );
}
```

### Bài tập 2: Kiểm tra tuổi
Tạo form nhập tuổi, hiển thị thông báo khác nhau cho trẻ em (<18), người lớn (18-60), và người cao tuổi (>60).

**Đáp án:**
```jsx
function AgeChecker() {
  const [age, setAge] = useState('');

  const getAgeMessage = () => {
    const numAge = parseInt(age);
    if (numAge < 18) return '👶 Bạn còn nhỏ tuổi';
    if (numAge <= 60) return '👨 Bạn đang trong độ tuổi lao động';
    return '👴 Bạn đã về hưu';
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Nhập tuổi"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      
      {age && !isNaN(age) && (
        <p style={{marginTop: '10px'}}>{getAgeMessage()}</p>
      )}
    </div>
  );
}
```

---

## 🔤 Từ khóa & khái niệm quan trọng:

- **Conditional Rendering:** Hiển thị có điều kiện
- **Ternary Operator:** Toán tử 3 ngôi `? :`
- **Logical AND:** Toán tử logic `&&`
- **Truthy/Falsy:** Giá trị được coi là đúng/sai trong JavaScript
- **Short-circuit evaluation:** Đánh giá ngắn mạch của `&&`

---

## ⚠️ Lưu ý & lỗi thường gặp:

**1. Lỗi với số 0:**
```jsx
// ❌ SAI: Hiển thị số 0 thay vì ẩn
{count && <p>Có {count} tin nhắn</p>}

// ✅ ĐÚNG: Kiểm tra rõ ràng
{count > 0 && <p>Có {count} tin nhắn</p>}
```

**2. Quên return trong if/else:**
```jsx
// ❌ SAI: Không có return
if (isLoggedIn) {
  <h1>Đã đăng nhập</h1>; // Thiếu return
}

// ✅ ĐÚNG:
if (isLoggedIn) {
  return <h1>Đã đăng nhập</h1>;
}
```

**3. Lạm dụng ternary operator:**
```jsx
// ❌ KHÓ ĐỌC:
{isLoggedIn ? (hasPermission ? <AdminPanel /> : <UserPanel />) : <LoginForm />}

// ✅ DỄ ĐỌC: Dùng if/else cho logic phức tạp
```

---

## 🎯 Tóm tắt buổi học:

Buổi học này chúng ta đã nắm được:
- **Conditional Rendering** là kỹ thuật quan trọng để tạo giao diện động
- **3 cách chính:** if/else (logic phức tạp), ternary operator (điều kiện đơn), logical && (hiển thị khi cần)
- **Ứng dụng thực tế:** Tạo form đăng nhập, thông báo lỗi, toggle content

**Buổi tiếp theo:** Chúng ta sẽ học **"Danh sách và Keys"** - cách render nhiều phần tử cùng lúc, như hiển thị danh sách sản phẩm, bài viết. Đây là kỹ năng cực kỳ quan trọng trong React! 🚀