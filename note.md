Install JSON Server:
    $ npm install json-server
    $ Create db.json
    $ npx json-server db.json

    $ rm-rf node_module/ (Xoa folder node_module)

REST API
- Get
- Post
- Put   (Sửa tất cả)
- Patch (Sửa một)
- Delete



Vite:
    $ npm create vite
    $ cd vite-project
    $ npm install
    $ npm i json-server
    $ npm run dev

- Xoa het code trong src/main.js

$ npm i concurrently -> chay song song
In package.json:
"start": "concurrently \"command1 arg\" \"command2 arg\""
npm run start



ReactJs:
$ npm create vite -> ReactJs
npm install
npm run dev

- Single Page App
- gitignore (Nhung file o trong nay khong add len git)
- vite.config.js -> Cau hinh port (npm run dev -- --port 2000)

Delete Content:
 + index.css
 + App.css
 + TodoApp.jsx (xoa noi dung thoi)

style inline -> object
HOOK: useState





MUI:
1. npm install @mui/material @emotion/react @emotion/styled
2. npm install @mui/material @mui/styled-engine-sc styled-components
3. npm install @fontsource/roboto
4. npm install @mui/icons-material
5. npm i react-toastify
6. npm install axios

inlineCSS = sx


Han che reload component khong lien quan!






npm i react-router








































Dựa trên những vấn đề chúng ta vừa gặp và giải quyết, tôi rút ra được những lưu ý quan trọng sau:
1. User Experience (UX) - Phản hồi tức thì

UI phải phản hồi ngay lập tức khi user tương tác, không được có delay
Optimistic Updates cần được implement đúng thứ tự: UI update trước → API call sau
State transitions (chế độ Edit ↔ Add) phải đồng bộ và mượt mà

2. State Management - Thứ tự quan trọng

Khi có nhiều setState liên quan, cần sắp xếp thứ tự hợp lý
Clear input và exit edit mode cần xảy ra đồng thời để tránh flickering
Không nên phụ thuộc hoàn toàn vào useEffect cho immediate UI updates

3. Form Handling - Chi tiết quan trọng

Input focus/clear timing rất quan trọng cho UX
Form submission cần handle cả sync operations (UI) và async operations (API)
Validate và error handling phải không làm gián đoạn user flow

4. Testing Mindset - Kiểm tra từng tương tác

Cần test từng bước của user journey, không chỉ test tính năng hoạt động
Chú ý các edge cases: rapid clicks, slow network, API failures
Test visual feedback: button text changes, loading states, transitions
