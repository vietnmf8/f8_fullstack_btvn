# 📘 Buổi 4: Props - Truyền dữ liệu giữa các component

## 🎯 Mục tiêu học tập:
✅ Hiểu được Props là gì và tại sao cần sử dụng Props
✅ Biết cách truyền dữ liệu từ component cha sang component con
✅ Thực hành tạo component có thể tái sử dụng với Props khác nhau

## 🩹 Nỗi đau – Tại sao cần học bài này?

Hãy tưởng tượng bạn có 1 chiếc khuôn làm bánh. Nếu không có Props, bạn chỉ có thể làm ra 1 loại bánh duy nhất với cùng 1 hương vị. Nhưng với Props, bạn có thể "truyền" các nguyên liệu khác nhau (chocolate, vanilla, strawberry) vào cùng 1 khuôn để tạo ra nhiều loại bánh khác nhau!

**Vấn đề khi không có Props:**
- Component chỉ hiển thị dữ liệu cố định (hard-code)
- Không thể tái sử dụng component cho các trường hợp khác nhau
- Phải tạo nhiều component giống nhau chỉ khác nội dung

## 🧠 Khái niệm chính:

**Props** (viết tắt của Properties) là cách để truyền dữ liệu từ component cha xuống component con. Giống như việc bạn đưa tham số vào một hàm để hàm đó xử lý dữ liệu khác nhau.

**So sánh với JavaScript thông thường:**
- Hàm JS: `sayHello(name)` - truyền tham số `name`
- React Props: `<Greeting name="John" />` - truyền prop `name`

## 📌 Cú pháp cơ bản:

```jsx
// Component con nhận props
function Welcome(props) {
  return <h1>Xin chào, {props.name}!</h1>;
}

// Component cha truyền props
function App() {
  return (
    <div>
      <Welcome name="Minh" />
      <Welcome name="Hương" />
    </div>
  );
}
```

## 🔍 Giải thích cú pháp:

1. **Component con:** `function Welcome(props)`
    - `props` là tham số chứa tất cả dữ liệu được truyền vào
    - `props` là 1 object JavaScript

2. **Sử dụng props:** `{props.name}`
    - Dùng dấu `{}` để chèn JavaScript vào JSX
    - `props.name` lấy giá trị của thuộc tính `name`

3. **Truyền props:** `<Welcome name="Minh" />`
    - `name="Minh"` là cách truyền dữ liệu vào component
    - Có thể truyền nhiều props: `<Welcome name="Minh" age={25} />`

## 💻 Ví dụ minh họa:

```jsx
// Component hiển thị thông tin sinh viên
function StudentCard(props) {
  return (
    <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <h3>{props.name}</h3>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

// Component chính sử dụng StudentCard
function App() {
  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <StudentCard name="Nguyễn Văn A" age={20} className="12A1" />
      <StudentCard name="Trần Thị B" age={19} className="12A2" />
      <StudentCard name="Lê Văn C" age={21} className="12A1" />
    </div>
  );
}
```

**Giải thích từng dòng:**
- Dòng 2-7: Tạo component `StudentCard` nhận props và hiển thị thông tin
- Dòng 13-15: Sử dụng cùng 1 component nhưng với dữ liệu khác nhau
- Mỗi lần gọi `<StudentCard />` sẽ tạo ra 1 thẻ sinh viên riêng biệt

## 🧪 Bài tập thực hành:

**Bài tập 1:** Tạo component `BookCard` hiển thị thông tin sách
```jsx
// Hoàn thành component này
function BookCard(props) {
  return (
    <div>
      {/* Hiển thị tên sách, tác giả, và giá */}
    </div>
  );
}

// Sử dụng component
function App() {
  return (
    <div>
      <BookCard title="Đắc Nhân Tâm" author="Dale Carnegie" price="89.000đ" />
      <BookCard title="Nhà Giả Kim" author="Paulo Coelho" price="75.000đ" />
    </div>
  );
}
```

**Đáp án:**
```jsx
function BookCard(props) {
  return (
    <div style={{border: '2px solid #333', padding: '15px', margin: '10px'}}>
      <h2>{props.title}</h2>
      <p>Tác giả: {props.author}</p>
      <p>Giá: {props.price}</p>
    </div>
  );
}
```

## 🔤 Từ khóa & khái niệm quan trọng:

- **Props**: Dữ liệu được truyền từ component cha sang component con
- **Component cha**: Component gọi/sử dụng component khác
- **Component con**: Component được gọi/sử dụng bởi component khác
- **Attribute**: Thuộc tính được truyền vào component (như `name`, `age`)
- **Parameter**: Tham số `props` trong function component

## ⚠️ Lưu ý & lỗi thường gặp:

1. **Props là READ-ONLY** - Không được thay đổi props trong component con
   ```jsx
   // ❌ SAI - Không được làm thế này
   function Welcome(props) {
     props.name = "Tên khác"; // Lỗi!
     return <h1>Xin chào, {props.name}!</h1>;
   }
   ```

2. **Quên dấu ngoặc nhọn {}** khi truyền số hoặc biến
   ```jsx
   // ❌ SAI
   <StudentCard age="20" />  // "20" là string
   
   // ✅ ĐÚNG
   <StudentCard age={20} />  // 20 là number
   ```

3. **Viết sai tên props**
   ```jsx
   // Component nhận props.name
   function Welcome(props) {
     return <h1>{props.name}</h1>;
   }
   
   // ❌ SAI - truyền userName thay vì name
   <Welcome userName="Minh" />
   
   // ✅ ĐÚNG
   <Welcome name="Minh" />
   ```

## 🎯 Tóm tắt buổi học:

Props là "cầu nối" giúp truyền dữ liệu giữa các component trong React. Nhờ Props, chúng ta có thể:
- Tạo ra các component linh hoạt, có thể tái sử dụng
- Truyền dữ liệu từ component cha xuống component con
- Tạo ra nhiều phiên bản khác nhau của cùng 1 component

**Điều quan trọng cần nhớ:** Props chỉ có thể truyền từ trên xuống (cha → con) và không được thay đổi trong component con.

**Buổi tiếp theo:** Chúng ta sẽ học về **State** - "bộ nhớ" của component, giúp component có thể thay đổi dữ liệu và tương tác với người dùng!