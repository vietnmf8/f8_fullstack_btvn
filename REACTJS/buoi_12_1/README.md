# 📘 Buổi 12: Children - Truyền nội dung vào Component

## 🎯 Mục tiêu học tập:
✅ Hiểu được Children là gì và cách hoạt động  
✅ Sử dụng Children để tạo component linh hoạt, tái sử dụng  
✅ Áp dụng Children vào các component thực tế như Card, Modal, Layout

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
- Bạn muốn tạo component Card để bọc nội dung, nhưng mỗi Card có nội dung khác nhau
- Tạo component Modal (popup) nhưng mỗi lần hiện nội dung khác nhau
- Làm Layout có Header/Footer giống nhau, chỉ phần Content thay đổi

**Cách cũ (không dùng Children):**
```jsx
// Phải tạo nhiều component riêng biệt
function CardWithText() {
  return <div className="card"><p>Text content</p></div>;
}
function CardWithButton() {
  return <div className="card"><button>Click me</button></div>;
}
```

**Hệ quả nếu không biết:**
- Phải tạo rất nhiều component tương tự nhau
- Code bị lặp lại, khó maintain
- Không thể tái sử dụng component một cách linh hoạt

## 🧠 Khái niệm chính:

**Children** trong React giống như một **"hộp quà đa năng"**:
- Bạn có một cái hộp đẹp (component)
- Bạn có thể bỏ bất kỳ thứ gì vào hộp (children)
- Hộp sẽ hiển thị nội dung bên trong một cách đẹp đẽ

**Cách hoạt động:**
```jsx
<Component>Nội dung bên trong</Component>
//         ↑
//    Đây chính là "children"
```

**So với kiến thức cũ:**
- **Props**: Truyền dữ liệu cụ thể (như tên, tuổi)
- **Children**: Truyền cả một khối nội dung (có thể là text, component, HTML...)

## 📌 Cú pháp cơ bản:

```jsx
// 1. Tạo component nhận children
function MyComponent({ children }) {
  return (
    <div className="wrapper">
      <h2>Tiêu đề cố định</h2>
      {children} {/* Hiển thị nội dung được truyền vào */}
    </div>
  );
}

// 2. Sử dụng component với nội dung khác nhau
<MyComponent>
  <p>Đây là nội dung 1</p>
</MyComponent>

<MyComponent>
  <button>Đây là nội dung 2</button>
</MyComponent>
```

## 🔍 Giải thích cú pháp:

**Nhận children:**
```jsx
function MyComponent({ children }) {
  // children = nội dung được truyền vào
}
```
- `children` là một props đặc biệt của React
- Chứa tất cả nội dung giữa thẻ mở và thẻ đóng

**Hiển thị children:**
```jsx
return (
  <div>
    {children} {/* Hiển thị nội dung ở đây */}
  </div>
);
```
- Dùng `{children}` để hiển thị nội dung
- Có thể đặt children ở bất kỳ vị trí nào trong JSX

**Truyền children:**
```jsx
<MyComponent>
  <p>Nội dung bất kỳ</p>
  <button>Button</button>
</MyComponent>
```
- Mọi thứ giữa `<MyComponent>` và `</MyComponent>` là children

## 💻 Ví dụ minh họa:

### Ví dụ 1: Card Component
```jsx
// Component Card linh hoạt
function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}

// Sử dụng Card với nội dung khác nhau
function App() {
  return (
    <div>
      {/* Card chứa text */}
      <Card>
        <h3>Sản phẩm A</h3>
        <p>Giá: 100,000 VNĐ</p>
      </Card>
      
      {/* Card chứa hình ảnh và button */}
      <Card>
        <img src="product.jpg" alt="Sản phẩm" />
        <button>Mua ngay</button>
      </Card>
      
      {/* Card chứa form */}
      <Card>
        <h3>Đăng nhập</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mật khẩu" />
        <button>Đăng nhập</button>
      </Card>
    </div>
  );
}
```

### Ví dụ 2: Layout Component
```jsx
// Layout có Header/Footer cố định, Content thay đổi
function Layout({ children }) {
  return (
    <div>
      <header style={{ background: '#333', color: 'white', padding: '10px' }}>
        <h1>Website của tôi</h1>
      </header>
      
      <main style={{ minHeight: '400px', padding: '20px' }}>
        {children} {/* Nội dung trang */}
      </main>
      
      <footer style={{ background: '#333', color: 'white', padding: '10px' }}>
        <p>&copy; 2024 Website của tôi</p>
      </footer>
    </div>
  );
}

// Sử dụng Layout cho các trang khác nhau
function HomePage() {
  return (
    <Layout>
      <h2>Trang chủ</h2>
      <p>Chào mừng đến với website!</p>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <h2>Giới thiệu</h2>
      <p>Chúng tôi là công ty ABC...</p>
    </Layout>
  );
}
```

## 🧪 Bài tập thực hành:

### Bài 1: Tạo Button Component
Tạo component Button có style đẹp, nhận children để hiển thị text hoặc icon.

**Đáp án:**
```jsx
function Button({ children, color = 'blue' }) {
  return (
    <button style={{
      background: color,
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  );
}

// Sử dụng:
<Button>Lưu</Button>
<Button color="red">Xóa</Button>
<Button>📁 Tải file</Button>
```

### Bài 2: Tạo Alert Component
Tạo component Alert để hiển thị thông báo với các loại khác nhau (success, error, warning).

**Gợi ý:**
- Nhận props `type` để xác định màu sắc
- Nhận `children` để hiển thị nội dung thông báo

### Bài 3: Tạo Modal Component
Tạo component Modal (popup) có thể chứa bất kỳ nội dung nào.

**Gợi ý:**
- Có nền đen mờ phủ toàn màn hình
- Hộp trắng ở giữa chứa `children`
- Nút X để đóng modal

## 🔤 Từ khóa & khái niệm quan trọng:

- **Children**: Nội dung được truyền vào giữa thẻ mở và đóng của component
- **Props đặc biệt**: Children là props đặc biệt không cần khai báo
- **Composition**: Kỹ thuật tạo component bằng cách kết hợp các phần nhỏ
- **Reusable Component**: Component có thể tái sử dụng với nội dung khác nhau
- **JSX Element**: Children có thể là text, HTML, hoặc component khác

## ⚠️ Lưu ý & lỗi thường gặp:

**Lỗi 1:** Quên hiển thị children
```jsx
// ❌ Sai - không hiển thị children
function Card({ children }) {
    return <div className="card">Nội dung cố định</div>;
}

// ✅ Đúng
function Card({ children }) {
    return <div className="card">{children}</div>;
}
```

**Lỗi 2:** Nhầm lẫn children với props thường
```jsx
// ❌ Sai - children không phải props thường
<Card children="Nội dung" />

// ✅ Đúng
<Card>Nội dung</Card>
```

**Lưu ý quan trọng:**
- Children có thể là bất kỳ thứ gì: text, element, component, array
- Nếu không có children, giá trị sẽ là `undefined`
- Có thể kiểm tra children tồn tại: `{children && <div>{children}</div>}`

## 🎯 Tóm tắt buổi học:

### Gạch đầu dòng:
- Children giúp tạo component linh hoạt, tái sử dụng
- Children là nội dung giữa thẻ mở và đóng component
- Dùng `{children}` để hiển thị nội dung trong component
- Phù hợp cho Card, Modal, Layout, Button và các wrapper component
- Giúp code ngắn gọn hơn, tránh lặp lại

### Sơ đồ tư duy:
```
Children
├── Định nghĩa
│   ├── Nội dung giữa thẻ mở/đóng
│   └── Props đặc biệt của React
├── Cách sử dụng
│   ├── Nhận: ({ children }) =>
│   ├── Hiển thị: {children}
│   └── Truyền: <Component>nội dung</Component>
└── Ứng dụng
    ├── Card/Box component
    ├── Layout component
    ├── Modal/Dialog
    └── Button với icon/text
```

**🔜 Buổi tiếp theo:** Chúng ta sẽ học **useContext** - cách chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều tầng. Với kiến thức về Children, bạn sẽ hiểu rõ hơn cách Provider "bọc" các component con!