import { useState } from 'react'
import './App.css'
import {divide} from "../../../Day_23/calculator/mathOperations.js";

function App() {

    /* Cach 1: Su dung map() de render danh sach */
    const fruits = ['apple', 'banana', 'orange'];

    //Component
    const FruitList = () => {
        return (
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        )
    }

    /* Cach 2: Với dữ liệu phức tạp hơn */
    const users = [
        {id: 1, name: 'An', age: 25},
        {id: 2, name: 'Binh', age: 26},
        {id: 3, name: 'Chi', age: 27}
    ]

    // Component
    const UserList = () => {
        return (
            <div>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3>Ten: {user.name}</h3>
                            <p>Tuoi: {user.age}</p>
                        </div>
                    )
                })}
            </div>
        )
    }


  return (
    <>
        <UserList/>
        <FruitList/>
    </>
  )
}
export default App
