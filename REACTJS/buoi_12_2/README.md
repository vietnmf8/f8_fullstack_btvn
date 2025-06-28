# 📘 Buổi 13: useContext - Quản lý state toàn cục

## 🎯 Mục tiêu học tập:
✅ Hiểu được useContext là gì và tại sao cần dùng  
✅ Tạo và sử dụng Context để chia sẻ state giữa các component  
✅ Áp dụng useContext vào project thực tế với theme switcher

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế - Props Drilling:**
Khi app lớn lên, bạn gặp tình huống này:
```jsx
// App cần truyền user info xuống UserProfile (cách nhau 3 tầng)
App → Header → UserMenu → UserProfile
```

**Cách cũ (Props Drilling):**
```jsx
function App() {
  const [user, setUser] = useState({ name: 'John' });
  return <Header user={user} setUser={setUser} />;
}

function Header({ user, setUser }) { // phải nhận props chỉ để truyền tiếp
  return <UserMenu user={user} setUser={setUser} />;
}

function UserMenu({ user, setUser }) { // lại phải nhận props để truyền tiếp
  return <UserProfile user={user} setUser={setUser} />;
}

function UserProfile({ user, setUser }) { // cuối cùng mới dùng
  return <div>{user.name}</div>;
}
```

**Hệ quả nếu không biết useContext:**
- Code rối rắm, khó đọc
- Component trung gian phải nhận props không cần thiết
- Khó maintain khi thêm/sửa props
- Tốn thời gian debug

## 🧠 Khái niệm chính:

**useContext** giống như **"WiFi trong nhà"**:
- Thay vì phải kéo dây mạng từ phòng này sang phòng khác (props drilling)
- Bạn có WiFi, bất kỳ thiết bị nào trong nhà cũng kết nối được (useContext)
- Dữ liệu "bay" trong không khí, ai cần thì truy cập

**Cách hoạt động:**
1. **Tạo Context** = Lắp đặt router WiFi
2. **Provider** = Phát sóng WiFi (bọc children)
3. **useContext** = Kết nối WiFi (trong component con)

**So với kiến thức cũ:**
- **Props**: Như dây USB - chỉ kết nối trực tiếp cha-con
- **useContext**: Như WiFi - bất kỳ component con nào cũng truy cập được

## 📌 Cú pháp cơ bản:

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Tạo Context (lắp router WiFi)
const MyContext = createContext();

// 2. Tạo Provider (phát sóng WiFi)
function MyProvider({ children }) {
  const [state, setState] = useState('dữ liệu');
  
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

// 3. Sử dụng Context (kết nối WiFi)
function MyComponent() {
  const { state, setState } = useContext(MyContext);
  return <div>{state}</div>;
}

// 4. Wrap app với Provider
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}
```

## 🔍 Giải thích cú pháp:

**Bước 1 - Tạo Context:**
```jsx
const MyContext = createContext();
```
- Tạo một "kênh truyền dữ liệu" có thể chia sẻ
- Giống như tạo tên WiFi mới

**Bước 2 - Tạo Provider:**
```jsx
<MyContext.Provider value={{ state, setState }}>
  {children}
</MyContext.Provider>
```
- Provider = router WiFi phát sóng
- `value` = dữ liệu được chia sẻ (như băng thông WiFi)
- `children` = tất cả component trong "vùng phủ sóng"

**Bước 3 - Sử dụng useContext:**
```jsx
const { state, setState } = useContext(MyContext);
```
- "Kết nối WiFi" để lấy dữ liệu
- Destructuring để lấy state và function cần thiết

## 💻 Ví dụ minh họa:

### Ví dụ 1: Theme Switcher (Chuyển đổi giao diện)
```jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Tạo ThemeContext
const ThemeContext = createContext();

// 2. Tạo ThemeProvider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Dữ liệu chia sẻ
  const themeData = {
    theme,
    toggleTheme,
    colors: {
      background: theme === 'light' ? 'white' : '#333',
      text: theme === 'light' ? 'black' : 'white'
    }
  };
  
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Component Header sử dụng theme
function Header() {
  const { theme, toggleTheme, colors } = useContext(ThemeContext);
  
  return (
    <header style={{ 
      background: colors.background, 
      color: colors.text,
      padding: '20px' 
    }}>
      <h1>Website của tôi</h1>
      <button onClick={toggleTheme}>
        🌓 Chuyển sang {theme === 'light' ? 'tối' : 'sáng'}
      </button>
    </header>
  );
}

// 4. Component Content cũng dùng theme
function Content() {
  const { colors } = useContext(ThemeContext);
  
  return (
    <main style={{
      background: colors.background,
      color: colors.text,
      padding: '20px',
      minHeight: '400px'
    }}>
      <h2>Nội dung chính</h2>
      <p>Giao diện này sẽ thay đổi theo theme!</p>
    </main>
  );
}

// 5. Component Footer cũng dùng theme
function Footer() {
  const { colors } = useContext(ThemeContext);
  
  return (
    <footer style={{
      background: colors.background,
      color: colors.text,
      padding: '20px',
      textAlign: 'center',
      borderTop: `1px solid ${colors.text}`
    }}>
      <p>&copy; 2024 Website của tôi</p>
    </footer>
  );
}

// 6. App chính - "Vùng phủ sóng WiFi"
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
```

### Ví dụ 2: User Authentication
```jsx
// Context cho user info
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  
  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Component hiển thị thông tin user
function UserInfo() {
  const { user, isLoggedIn, logout } = useContext(UserContext);
  
  if (!isLoggedIn) {
    return <div>Chưa đăng nhập</div>;
  }
  
  return (
    <div>
      <p>Xin chào, {user.name}!</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}
```

## 🧪 Bài tập thực hành:

### Bài 1: Shopping Cart Context
Tạo CartContext để quản lý giỏ hàng với các chức năng:
- Thêm sản phẩm vào giỏ
- Xóa sản phẩm khỏi giỏ
- Hiển thị tổng số lượng và tổng tiền

**Gợi ý cấu trúc:**
```jsx
const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  
  const addToCart = (product) => {
    // Logic thêm sản phẩm
  };
  
  const removeFromCart = (productId) => {
    // Logic xóa sản phẩm
  };
  
  const getTotalPrice = () => {
    // Tính tổng tiền
  };
  
  return (
    <CartContext.Provider value={{
      items, addToCart, removeFromCart, getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}
```

### Bài 2: Language Context
Tạo LanguageContext để chuyển đổi ngôn ngữ (Tiếng Việt/English) cho toàn bộ app.

**Gợi ý:**
- State lưu ngôn ngữ hiện tại
- Object chứa bản dịch cho từng ngôn ngữ
- Function để chuyển đổi ngôn ngữ

## 🔤 Từ khóa & khái niệm quan trọng:

- **Context**: Hệ thống chia sẻ dữ liệu toàn cục trong React
- **Provider**: Component cung cấp dữ liệu cho Context
- **Consumer**: Component sử dụng dữ liệu từ Context (useContext)
- **Props Drilling**: Việc truyền props qua nhiều tầng component
- **Global State**: Trạng thái toàn cục, truy cập từ mọi nơi
- **createContext()**: Function tạo Context mới
- **value**: Dữ liệu được chia sẻ qua Provider

## ⚠️ Lưu ý & lỗi thường gặp:

**Lỗi 1:** Sử dụng useContext ngoài Provider
```jsx
// ❌ Sai - useContext ngoài Provider
function App() {
  return <ComponentDungContext />; // Lỗi: Cannot read properties
}

// ✅ Đúng
function App() {
  return (
    <MyProvider>
      <ComponentDungContext />
    </MyProvider>
  );
}
```

**Lỗi 2:** Quên import useContext
```jsx
// ❌ Sai
import { createContext } from 'react';

// ✅ Đúng
import { createContext, useContext } from 'react';
```

**Lỗi 3:** Tạo Provider nhưng không wrap component
```jsx
// ❌ Sai - Tạo Provider nhưng không dùng
function ThemeProvider({ children }) {
  return <div>{children}</div>; // Thiếu Provider!
}

// ✅ Đúng
function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Lưu ý quan trọng:**
- Không nên lạm dụng Context cho mọi state
- Chỉ dùng cho dữ liệu thực sự cần chia sẻ nhiều nơi
- Context khiến component khó test và tái sử dụng hơn
- Nên tạo custom hook để dễ sử dụng Context

## 🎯 Tóm tắt buổi học:

### Gạch đầu dòng:
- useContext giải quyết vấn đề Props Drilling
- Gồm 3 bước: createContext → Provider → useContext
- Provider phải wrap tất cả component cần dùng Context
- Dữ liệu trong Context có thể là state, function, object...
- Phù hợp cho theme, user authentication, shopping cart, language
- Không nên lạm dụng, chỉ dùng khi thật sự cần thiết

### Sơ đồ tư duy:
```
useContext
├── Vấn đề giải quyết  
│   ├── Props Drilling
│   └── State toàn cục
├── Cách hoạt động
│   ├── createContext() - tạo kênh
│   ├── Provider - phát sóng dữ liệu
│   └── useContext() - nhận dữ liệu
├── Ứng dụng thực tế
│   ├── Theme switcher
│   ├── User authentication  
│   ├── Shopping cart
│   └── Multi-language
└── Lưu ý
    ├── Không lạm dụng
    ├── Khó test/reuse
    └── Chỉ dùng khi cần thiết
```

**🔜 Buổi tiếp theo:** Chúng ta sẽ học **useReducer** - cách quản lý state phức tạp khi useState không đủ mạnh. useReducer giống như có một "thư ký cá nhân" giúp xử lý các logic phức tạp một cách có tổ chức!