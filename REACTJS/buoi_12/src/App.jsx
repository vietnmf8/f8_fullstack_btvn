import React, { createContext, useContext, useState } from 'react';
import './App.css'

// 1. Tạo Context cho theme (chủ đề giao diện)
const ThemeContext = createContext()

// 2. Tạo Provider
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3. Component Header sử dụng theme
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <header style={{
            background: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
        }}>
            <h1>My Website</h1>
            <button onClick={() => toggleTheme()}>
                Chuyển sang {theme === 'light' ? 'tối' : 'sáng'}
            </button>
        </header>
    )
}

// 4. Component Content cũng sử dụng theme
function Content() {
    const { theme } = useContext(ThemeContext);

    return (
        <main style={{
            background: theme === 'light' ? '#f0f0f0' : '#333',
            color: theme === 'light' ? 'black' : 'white',
            padding: '20px'
        }}>
            <p>Nội dung trang web (Theme: {theme})</p>
        </main>
    );
}



// 5. App chính
function App() {
    return (
        <ThemeProvider>
            <Header />
            <Content />
        </ThemeProvider>
    );
}
export default App
