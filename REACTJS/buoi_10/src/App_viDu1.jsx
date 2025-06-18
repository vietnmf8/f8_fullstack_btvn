import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    /* Gọi API khi component mount (chỉ 1 lần) */
    useEffect(() => {
        console.log('Đang gọi API...')

        // Giả lập API call
        setTimeout(() => {
            setUser(
                {name: 'Viet', age: 25}
            )
            setLoading(false)
        }, 2000)
    },
    []); // Array rỗng = chỉ chạy 1 lần


    /* Cập nhật title khi user thay đổi */
    useEffect(() => {
        if (user) {
            document.title = `Profile: ${user.name}`
        }

    }, [user])

    if (loading) {
        console.log(`Loading State:` , loading)
        return <div>Đang tải...</div>
    }
    console.log(`Loading State:` , loading)




  return (
    <>
        <h1>Xin chao {user.name}</h1>
        <p>Tuoi: {user.age}</p>
    </>
  )
}
export default App
