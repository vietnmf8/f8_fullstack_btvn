import { useState } from 'react'
import './App.css'

function App() {
    //If / else
    const WelcomeMessage = ({isLoggedIn, userName}) => {
        if (isLoggedIn) {
            return <h1>Chao mung, {userName}</h1>
        }
        else {
            return <h1>Vui long dang nhap!</h1>
        }
    }

    // Toan tu 3 ngoi
    const StatusMessage = ({isOnline}) => {
        return (
            <div>
                {isOnline ? <span>Online</span> : <span>Offline</span>}
            </div>
        )
    }

    // &&
    const ErrorMessage = ({hasError, errorText}) => {
        return (
            <div>
                {hasError && <p>{errorText}</p>}
            </div>
        )
    }



  return (
    <>
        <h1>Xin chao 3</h1>
    </>
  )
}
export default App
