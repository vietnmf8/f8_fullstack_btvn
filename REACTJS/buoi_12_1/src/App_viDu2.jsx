import { useState } from 'react'
import './App.css'

const Layout = ({children}) => {
    return (
        <>
            <header style={{ background: '#333', color: 'white', padding: '10px' }}>
                <h1>Website của tôi</h1>
            </header>

            <main style={{ minHeight: '400px', padding: '20px' }}>
                {children} {/* Nội dung trang */}
            </main>

            <footer style={{ background: '#333', color: 'white', padding: '10px' }}>
                <p>&copy; 2024 Website của tôi</p>
            </footer>
        </>
    )
}


// Sử dụng Card với nội dung khác nhau
function App() {
    return (
        <>
            {/*<Layout>*/}
            {/*    <h2>Trang chủ</h2>*/}
            {/*    <p>Chào mừng đến với website!</p>*/}
            {/*</Layout>*/}

            <Layout>
                <h2>Giới thiệu</h2>
                <p>Chúng tôi là công ty ABC...</p>
            </Layout>

        </>
    )
}


export default App
