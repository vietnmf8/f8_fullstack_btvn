trenLop/
├── node_modules/            # Thư mục chứa các package đã cài (tự động tạo bởi npm/yarn)
├── public/                  # File tĩnh: index.html, favicon, v.v.
├── src/                     # Thư mục chính chứa mã nguồn ứng dụng
│   ├── assets/              # (Tuỳ chọn) Chứa ảnh, icon, font, CSS, v.v.
│   ├── components/          # Các React component
│   │   ├── ProductForm/
│   │   │   └── index.jsx
│   │   ├── ProductList/
│   │   │   └── index.jsx    # Component hiển thị danh sách sản phẩm
│   │   ├── Search/
│   │   │   └── index.jsx    # Component ô tìm kiếm
│   │   └── index.js         # (Có thể là export chung hoặc logic riêng)
│   ├── store/               # Redux store: chia slice
│   │   ├── index.js
│   │   ├── selectors.js
│   │   ├── Count/
│   │   │   ├── action.jsx   # Action creator cho Count
│   │   │   └── index.jsx    # Reducer cho Count
│   │   ├── Product/
│   │   │   ├── action.jsx   # Action creator cho Product
│   │   │   └── index.jsx    # Reducer cho Product
│   │   └── SearchStr/
│   │       ├── action.jsx   # Action creator cho SearchStr
│   │       └── index.jsx    # Reducer cho SearchStr
│   ├── App.css              # CSS chính cho App
│   ├── App.jsx              # Component gốc của ứng dụng
│   └── main.js              # File khởi chạy ứng dụng React
