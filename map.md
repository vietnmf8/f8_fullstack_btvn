trenLop/
├── node_modules/            # Thư mục chứa các package đã cài (tự động tạo bởi npm/yarn)
├── public/                  # File tĩnh: index.html, favicon, v.v.
├── src/                     # Thư mục chính chứa mã nguồn ứng dụng
│   ├── assets/              # (Tuỳ chọn) Chứa ảnh, icon, font, CSS, v.v.
│   ├── components/          # Các React component
│   ├── plugins/             # Chứa các plugin cấu hình, ví dụ: axios instance, middleware,...
│   │   └── api.js           # Cấu hình axios (hoặc fetch) để gọi API
│   ├── store/               # Redux store: chia slice
│   │   ├── index.js
│   │   ├── selectors.js
│   ├── utils/               # Chứa các hàm tiện ích dùng chung toàn app
│   │   └── index.js
│   ├── App.css              # CSS chính cho App
│   ├── App.jsx              # Component gốc của ứng dụng
│   └── main.js              # File khởi chạy ứng dụng React
