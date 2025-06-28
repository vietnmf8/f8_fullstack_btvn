import React, { createContext, useContext, useState } from 'react';
import './App.css'

// Context cho user info
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  }

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
      <UserContext.Provider value={{user, isLoggedIn, login, logout}}>
        {children}
      </UserContext.Provider>
  )
}

const UserInfo = () => {
  const { user, isLoggedIn, logout, login } = useContext(UserContext);

  if (!isLoggedIn) {
    return (
        <>
          <div>Chua dang nhap!!</div>
          <button onClick={() => login({name: 'Viet dep trai'})}>Dang nhap</button>
        </>
    )
  }

  return (
     <>
       <p>Xin chao, {user.name}</p>
       <button onClick={logout}>Đăng xuất</button>
     </>
  )
}


function App() {

  return (
    <UserProvider>
      <UserInfo/>
    </UserProvider>
  )
}
export default App
