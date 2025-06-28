
import './App.css'
import { createContext, useContext, useState } from 'react';

// 1. Tạo Context (lắp router WiFi)
const MyContext = createContext()


// 2. Tạo Provider (phát sóng WiFi)
const MyProvider = ({ children }) => {
    const [state, setState] = useState('Data')

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    )
}

// 3. Sử dụng Context (kết nối WiFi)
const MyComponent =  () => {
    const { state, setState } = useContext(MyContext)
    console.log(state)
    return <div>{state}</div>
}




function App() {
  return (
    <>
        <h1>Xin chao 2</h1>
        <MyProvider>
            <MyComponent />
        </MyProvider>
    </>
  )
}
export default App
