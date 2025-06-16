import { useState } from 'react'
import './App.css'

function App() {
    // Khoi tao bien
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [showError, setShowError] = useState(false)
    console.log("Trang thai dang nhap", isLoggedIn)
    // handle Login
    const handleLogin = () => {
        if (userName.trim() === '') {
            setShowError(true)
        }
        else {
            setIsLoggedIn(true)
            setShowError(false)
        }
        console.log("Trang thai dang nhap", isLoggedIn)
    }

    // handle Logout
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUserName('')
        console.log("Trang thai dang nhap", isLoggedIn)
    }


  return (
    <>
        <h2>Ung dung dang nhap</h2>

        {!isLoggedIn ?
            (
                <div>
                    <input
                        type="text"
                        placeholder="Nhap ten cua ban"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <button onClick={handleLogin}>Dang nhap</button>
                </div>
            )

            :

            (
                <div>
                    <h3>Chao mung {userName}</h3>
                    <p>Ban da dang nhap thanh cong!</p>
                    <button onClick={handleLogout}>Dang xuat</button>
                </div>
            )
        }
    </>
  )
}
export default App
