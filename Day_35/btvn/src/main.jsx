
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './App.jsx'
import Post from './components/Post.jsx'

// Component bảo vệ route, chỉ cho phép truy cập khi đã đăng nhập
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        // Nếu chưa đăng nhập, redirect về trang login
        window.location.href = '/';
        return null;
    }

    return children;
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Trang login */}
                <Route path="/" element={<Login />} />

                {/* Trang post - cần đăng nhập */}
                <Route
                    path="/post"
                    element={
                        <ProtectedRoute>
                            <Post />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
