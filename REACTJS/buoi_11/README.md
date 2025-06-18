# 📘 Buổi 11 - Custom Hooks: Tái sử dụng logic

## 🔄 Nhắc lại buổi trước
Buổi trước bạn đã học về **useEffect** - công cụ giúp xử lý side effects có kiểm soát:
- useEffect chạy sau khi component render
- Dependency array để kiểm soát khi nào effect chạy lại
- Cleanup function để dọn dẹp khi component unmount
- Áp dụng được vào việc gọi API, cập nhật title, thiết lập timer

---

## 🎯 Mục tiêu học tập
✅ Hiểu được Custom Hook là gì và tại sao cần dùng  
✅ Biết cách tạo Custom Hook đơn giản để tái sử dụng logic  
✅ Áp dụng Custom Hook vào bài tập thực tế

---

## 🩹 Nỗi đau – Tại sao cần học Custom Hooks?

**Vấn đề thực tế:**
- Bạn viết logic giống nhau ở nhiều component khác nhau (như gọi API, xử lý form)
- Code bị lặp lại nhiều lần → khó maintain và dễ bug
- Khi cần sửa logic, phải sửa ở nhiều nơi

**Hệ quả nếu không biết:**
- Code dài dòng, khó đọc
- Tốn thời gian copy-paste code
- Dễ quên sửa ở một số component khi có thay đổi

---

## 🧠 Khái niệm chính

**Custom Hook** là một function JavaScript bắt đầu bằng "use" và có thể sử dụng các Hook khác bên trong.

**Ví dụ đời sống:**
Giống như bạn tạo một "công thức nấu ăn" để dùng lại nhiều lần, thay vì mỗi lần nấu đều phải nhớ lại từng bước một.

**So sánh với kiến thức cũ:**
- **Function thường**: Chỉ xử lý logic thuần túy
- **Custom Hook**: Có thể sử dụng useState, useEffect và các Hook khác

---

## 📌 Cú pháp cơ bản

```javascript
// Custom Hook phải bắt đầu bằng "use"
function useCustomHook(initialValue) {
  const [state, setState] = useState(initialValue);
  
  // Logic xử lý của bạn
  const doSomething = () => {
    // xử lý logic
  };
  
  // Return những gì component cần sử dụng
  return { state, setState, doSomething };
}

// Sử dụng trong component
function MyComponent() {
  const { state, setState, doSomething } = useCustomHook("giá trị ban đầu");
  
  return <div>{state}</div>;
}
```

---

## 🔍 Giải thích cú pháp

**1. Tên Hook:** Phải bắt đầu bằng "use" (quy tắc React)
**2. Tham số:** Nhận các giá trị cần thiết từ component
**3. Logic bên trong:** Có thể dùng useState, useEffect, hay Hook khác
**4. Return:** Trả về object hoặc array chứa state và function mà component cần

---

## 💻 Ví dụ minh họa

```javascript
// Custom Hook để đếm số
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  
  // Logic tăng/giảm
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);
  
  // Trả về state và các function
  return { count, increment, decrement, reset };
}

// Sử dụng trong component
function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <p>Số đếm: {count}</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Giải thích:**
- `useCounter(10)` tạo bộ đếm bắt đầu từ 10
- Hook trả về `count` (giá trị hiện tại) và 3 function để thao tác
- Component chỉ cần gọi các function, không cần biết logic bên trong

---

## 🧪 Bài tập thực hành

**Bài tập 1:** Tạo Custom Hook để quản lý input

```javascript
// Viết Custom Hook useInput
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const reset = () => {
    setValue(initialValue);
  };
  
  return { value, onChange: handleChange, reset };
}

// Sử dụng trong form
function LoginForm() {
  const username = useInput('');
  const password = useInput('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    
    // Reset form sau khi submit
    username.reset();
    password.reset();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Tên đăng nhập"
        {...username} // Tương đương: value={username.value} onChange={username.onChange}
      />
      <input 
        type="password" 
        placeholder="Mật khẩu"
        {...password}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
```

**Bài tập 2:** Tạo Custom Hook để gọi API

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Sử dụng
function UserProfile() {
  const { data, loading, error } = useFetch('https://api.example.com/user/1');
  
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;
  
  return <div>Xin chào {data?.name}</div>;
}
```

---

## 🔤 Từ khóa & khái niệm quan trọng

- **Custom Hook**: Function tái sử dụng logic, bắt đầu bằng "use"
- **Logic tái sử dụng**: Code có thể dùng lại ở nhiều component
- **Spread operator (...)**: Cú pháp để "giải nén" object/array
- **Abstraction**: Ẩn đi chi tiết phức tạp, chỉ lộ interface đơn giản

---

## ⚠️ Lưu ý & lỗi thường gặp

**❌ Lỗi thường gặp:**
1. **Quên "use" ở đầu tên:** `customHook()` → `useCustomHook()`
2. **Gọi Hook trong vòng lặp hoặc điều kiện**
3. **Không return gì cả từ Custom Hook**

**✅ Cách khắc phục:**
1. Luôn đặt tên bắt đầu bằng "use"
2. Chỉ gọi Hook ở top level của component/Custom Hook
3. Luôn return state và function cần thiết

**🔍 Cách debug:**
- Thêm `console.log` trong Custom Hook để theo dõi
- Kiểm tra giá trị return có đúng format không

---

## 🎯 Tóm tắt buổi học

**Đã học được:**
- Custom Hook giúp tái sử dụng logic giữa các component
- Cú pháp: function bắt đầu "use", có thể dùng Hook khác bên trong
- Return object/array chứa state và function cần thiết
- Áp dụng vào quản lý form, gọi API, và logic phức tạp khác

**Buổi tiếp theo:** Sẽ học về **useContext** - cách quản lý state toàn cục để truyền dữ liệu qua nhiều component mà không cần props drilling.

**💡 Bài tập về nhà:** Tạo một Custom Hook `useToggle` để bật/tắt modal hoặc dropdown, sử dụng ở ít nhất 2 component khác nhau.