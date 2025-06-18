# 📘 Buổi 10: useEffect - Xử lý side effects

## 🎯 Mục tiêu học tập:
✅ Hiểu được useEffect là gì và tại sao cần dùng
✅ Biết cách sử dụng useEffect cơ bản để xử lý side effects
✅ Nắm được dependency array và cách cleanup trong useEffect

## 🩹 Nỗi đau – Tại sao cần học bài này?

Sau khi học được state và form, bạn sẽ gặp những tình huống như:
- Muốn gọi API để lấy dữ liệu khi component render lần đầu
- Cần cập nhật document title khi state thay đổi
- Phải thiết lập timer hoặc lắng nghe sự kiện window
- Component bị re-render không kiểm soát được

**Hệ quả nếu không biết useEffect:**
- Code chậm, tốn bộ nhớ do gọi API liên tục
- Không biết khi nào component "sinh ra" và "chết đi"
- Bug khó tìm do side effects không được quản lý

## 🧠 Khái niệm chính:

**useEffect** là như một "người quản gia" của component - nó giúp bạn thực hiện những việc "phụ" (side effects) một cách có kiểm soát.

**So sánh với đời sống:**
- Component = Căn nhà của bạn
- useEffect = Người quản gia nhà, lo việc như dọn dẹp, bảo trì
- Side effects = Những việc "ngoài lề" như gọi điện, đặt hàng online

**Side Effects là gì?**
Là những hành động không liên quan trực tiếp đến việc render UI:
- Gọi API
- Thao tác DOM
- Thiết lập timer
- Subscribe/unsubscribe event

## 📌 Cú pháp cơ bản:

```javascript
import { useEffect } from 'react';

function MyComponent() {
  // Chạy sau mỗi lần render
  useEffect(() => {
    console.log('Component đã render!');
  });

  // Chỉ chạy 1 lần khi component mount
  useEffect(() => {
    console.log('Component vừa được tạo!');
  }, []); // Array rỗng = chỉ chạy 1 lần

  // Chạy khi dependencies thay đổi
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Chỉ chạy khi count thay đổi
}
```

## 🔍 Giải thích cú pháp:

```javascript
useEffect(() => {
  // Effect function - nơi viết logic
}, [dependencies]); // Dependency array (tùy chọn)
```

**3 cách sử dụng useEffect:**

1. **Không có dependency array:** Chạy sau mỗi render
2. **Array rỗng []:** Chỉ chạy 1 lần khi component mount
3. **Array có giá trị [count, name]:** Chạy khi count hoặc name thay đổi

## 💻 Ví dụ minh họa:

```javascript
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gọi API khi component mount (chỉ 1 lần)
  useEffect(() => {
    console.log('Đang gọi API...');
    
    // Giả lập API call
    setTimeout(() => {
      setUser({ name: 'Nguyễn Văn A', age: 25 });
      setLoading(false);
    }, 2000);
  }, []); // Array rỗng = chỉ chạy 1 lần

  // Cập nhật title khi user thay đổi
  useEffect(() => {
    if (user) {
      document.title = `Profile: ${user.name}`;
    }
  }, [user]); // Chạy khi user thay đổi

  if (loading) return <div>Đang tải...</div>;

  return (
    <div>
      <h1>Xin chào {user.name}</h1>
      <p>Tuổi: {user.age}</p>
    </div>
  );
}
```

## 🧪 Bài tập thực hành:

### Bài 1: Counter với useEffect
```javascript
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // TODO: Sử dụng useEffect để:
  // 1. Cập nhật document.title = `Count: ${count}`
  // 2. Console.log mỗi khi count thay đổi

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng
      </button>
    </div>
  );
}
```

**Đáp án:**
```javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Count đã thay đổi: ${count}`);
  }, [count]); // Chạy khi count thay đổi

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng
      </button>
    </div>
  );
}
```

### Bài 2: Component Mount/Unmount
```javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer started!');
    
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function - chạy khi component unmount
    return () => {
      console.log('Timer stopped!');
      clearInterval(interval);
    };
  }, []); // Chỉ chạy 1 lần

  return <div>Timer: {seconds}s</div>;
}
```

## 🔤 Từ khóa & khái niệm quan trọng:

- **useEffect:** Hook để xử lý side effects
- **Side Effects:** Hành động không liên quan trực tiếp đến render UI
- **Dependency Array:** Mảng quyết định khi nào useEffect chạy
- **Mount:** Component được tạo và thêm vào DOM
- **Unmount:** Component bị xóa khỏi DOM
- **Cleanup Function:** Hàm dọn dẹp khi component unmount

## ⚠️ Lưu ý & lỗi thường gặp:

**❌ Lỗi thường gặp:**
```javascript
// SAI: Quên dependency array - chạy vô hạn
useEffect(() => {
  setCount(count + 1); // Gây infinite loop!
});

// SAI: Quên cleanup interval
useEffect(() => {
  setInterval(() => {
    console.log('Tick');
  }, 1000);
}, []); // Interval không bao giờ bị clear
```

**✅ Cách sửa:**
```javascript
// ĐÚNG: Có dependency array
useEffect(() => {
  console.log(`Count: ${count}`);
}, [count]);

// ĐÚNG: Có cleanup
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => clearInterval(interval);
}, []);
```

**Mẹo nhớ:**
- Dependency array rỗng `[]` = chỉ chạy 1 lần
- Không có array = chạy mỗi lần render
- Có giá trị trong array = chạy khi giá trị đó thay đổi

## 🎯 Tóm tắt buổi học:

**Những gì đã học:**
- useEffect giúp xử lý side effects có kiểm soát
- 3 cách sử dụng useEffect với dependency array khác nhau
- Cleanup function để dọn dẹp khi component unmount
- Cách tránh infinite loop và memory leak

**Ứng dụng thực tế:**
- Gọi API khi component mount
- Cập nhật document title
- Thiết lập và dọn dẹp timer/interval
- Subscribe/unsubscribe event listeners

**Buổi tiếp theo:** Chúng ta sẽ học **Custom Hooks** - cách tạo ra những hook riêng để tái sử dụng logic useEffect và useState một cách thông minh hơn!