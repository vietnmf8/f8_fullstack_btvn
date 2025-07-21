*** CẤU HÌNH JSON SERVER:
    - npm install json-server
    - Create db.json
    - npx json-server db.json

    - rm-rf node_module/ (Lệnh xoá folder node_modules)


*** REST API:
    - Get
    - Post
    - Put   (Sửa tất cả)
    - Patch (Sửa một)
    - Delete



*** Vite:
    - npm create vite


*** npm i concurrently: (Chạy song song vite & Json-server)
    - In package.json:
        + "start": "concurrently \"command1 arg\" \"command2 arg\""
    - npm run start


*** REACTJS:
    - Single Page App
    - gitignore (Nhung file o trong nay khong add len git)
    - vite.config.js -> Cau hinh port (npm run dev -- --port 2000)



*** MUI:
    1. npm install @mui/material @emotion/react @emotion/styled
    2. npm install @mui/material @mui/styled-engine-sc styled-components
    3. npm install @fontsource/roboto
    4. npm install @mui/icons-material

*** Toastify:
    - npm i react-toastify 

*** Cấu hình Axios:
    - npm install axios


*** Cấu hình Router:
    - npm i react-router

*** SASS:
    - npm i sass


*** Cấu hình Redux, Redux Toolkit: 
    - npm install redux
    - npm install @reduxjs/toolkit
    - npm install react-redux
    ( import { Provider } from 'react-redux' )


*** Cấu hình id tự động:
    - npm i uuid


*** Cấu hình Next.js
    - npx create-next-app@latest


√ TypeScript? ...  Yes
√ ESLint? ... No
√ Tailwind CSS? ... No
√ `src/` directory? ... No
√ App Router? ... Yes
? Turbopack » Yes


*** Kiến thưc đã học:

- useState
- useEffect (học với mục đích nhằm theo dõi sự thay đổi của biến)
- Components, props
- Conditional Rendering
- Danh sách và Keys - Render nhiều phần tử
- Form và Input - Thu thập dữ liệu người dùng
- useContext, children
- Thư viện MUI (Material UI)
- Kiến thức về API, LocalStorage, access_token, refresh_token ở mức cơ bản
- Kiến thức cơ bản về useMemo, memo, useCallback
- Kiến thức cơ bản về useContext, useReducer
-  TÔI CHƯA HỌC VỀ CUSTOM HOOK (nên không dùng kiến thức này nhé)
- Redux, redux tool kit cơ bản, createAsyncThunk, useSelector, useDispatch, configureStore
- Router, useNavigate
- Axios
- NEXTJS + typescript cơ bản ("use-client")
- useParams, router: PUSH, REPLACE
- typeScript

--------------------------------------------------------------------------------------------------
   User Experience (UX) - Phản hồi tức thì:
   UI phải phản hồi ngay lập tức khi user tương tác, không được có delay
   Optimistic Updates cần được implement đúng thứ tự: UI update trước → API call sau






















