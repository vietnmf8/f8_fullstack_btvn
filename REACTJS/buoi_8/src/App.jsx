import { useState } from 'react'
import './App.css'

// Todolist

const todos = [
    {id: 1, task: 'Hoc React', completed: true},
    {id: 2, task: 'Lam bai tap', completed: false},
    {id: 3, task: 'Di mua sam', completed: false},
]
function App() {
  return (
    <>
        <h2>Danh sach TodoList</h2>
        {
            todos.map((todo) => (
                <div key={todo.id}>
                    <span>{todo.completed ? "✅" : "⏳"}</span>
                    <span style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                    }}>
                        Ten task: {todo.task}
                    </span>
                </div>
            ))
        }
    </>
  )
}
export default App
