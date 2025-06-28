import React, { createContext, useContext, useState } from 'react';
import './App.css'

// 1. Tạo ThemeContext
const ThemeContext = createContext();

// 2. Tạo ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  // Dữ liệu chia sẻ
  const themeData = {
    theme,
    toggleTheme,
    colors: {
      background: theme === 'light' ? 'white' : 'black',
      text: theme === 'light' ? 'green' : 'white',
    }
  }

  return (
      <ThemeContext.Provider value={themeData}>
        {children}
      </ThemeContext.Provider>
  )
}

// 3. Component Header sử dụng theme
const Header = () => {
  const {theme, toggleTheme, colors} = useContext(ThemeContext);

  return (
      <header style={{
        background: colors.background,
        color: colors.text,
        padding: '20px',
      }}>
        <h1>Website cua toi!</h1>
        <button onClick={toggleTheme}>
          Chuyen sang {theme === 'light' ? 'dark' : 'light'}
        </button>
      </header>
  )
}

// 4. Component Content cũng dùng theme
const Content = () => {
  const {colors} = useContext(ThemeContext);

  return (
      <main style={{
        background: colors.background,
        color: colors.text,
        padding: '20px',
        minHeight: '400px',
      }}>
        <h2>Noi dung chinh</h2>
        <p>Giao dien se thay doi theo theme!</p>
      </main>
  )
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

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}
export default App
