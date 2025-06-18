import { useState, useEffect } from 'react'
import './App.css'

function App() {
    /* Chạy sau mỗi lần render */
    useEffect(() => {
        return () => {
            console.log('Component đã render!')
        };
    });

    /* Chỉ chạy 1 lần khi component mount */
    useEffect(() => {
        return () => {
            console.log('Component vừa được tạo!')
        };
    }, []); // Array rỗng = chỉ chạy 1 lần


    /* Chạy khi dependencies thay đổi */
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);



  return (
    <>

    </>
  )
}
export default App
