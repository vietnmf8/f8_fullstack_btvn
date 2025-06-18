import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [user, setUser] = useState({
        name: '',
        age: '',
        hobby: ''
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Thong tin User:' , user)
    }

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ten: </label>
                <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Ten"
                />
                <input
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                    placeholder="Tuoi"
                />
                <input
                    name="hobby"
                    value={user.hobby}
                    onChange={handleChange}
                    placeholder="So thich"
                />

                <button type='submit'>Click</button>
            </div>
        </form>
    );
}
export default App
