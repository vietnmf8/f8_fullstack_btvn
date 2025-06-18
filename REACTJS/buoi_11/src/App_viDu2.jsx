import { useState } from 'react'
import './App.css'

// Viết Custom Hook useInput
const useInput = (initialCount) => {
    const [value, setValue] = useState(initialCount)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const reset = () => {
        setValue(initialCount)
    }

    return {value, onChange: handleChange, reset}
}



// Sử dụng trong form
function App() {
    const username = useInput('')
    const password = useInput('')

    const handleSubmit = (e) => {
        console.log(username)
        e.preventDefault();
        console.log('Username: ', username.value)
        console.log('Password: ', password.value)
        // Reset
        username.reset()
        password.reset()
    }

  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Tên đăng nhập"
              {...username}
              // Tương đương:
              // value={username.value}
              // onChange={username.onChange}
          />
          <input
              type="password"
              placeholder="Mật khẩu"
              {...password}
          />
          <button type="submit">Đăng nhập</button>
      </form>
  )
}
export default App
