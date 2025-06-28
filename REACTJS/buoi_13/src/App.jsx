
import { useReducer, useState } from 'react';

// 1. Initial state
const initialTodos = [];

// 2. Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false,
                }
            ];
    }
}

function App() {
    const [todos, setTodos] = useReducer(todoReducer, initialTodos);
    const [inputText, setInputText] = useState('');

    // Thêm todo mới
    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            
        }
    }

    const handleKeyPress = () => {

    }


    const handleToggleTodo = () => {

    }

    const handleDeleteTodo = () => {

    }

  return (
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h1>Todo List voi useReducer</h1>

        {/* Input section */}
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập công việc cần làm..."
                style={{
                    padding: '10px',
                    width: '70%',
                    fontSize: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                }}
            />

            <button
                onClick={handleAddTodo}
                style={{
                    padding: '10px 20px',
                    marginLeft: '10px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Thêm
            </button>
        </div>

        {/* Todo list */}
        <div>
            {
                todos.length === 0 ? (
                    <p
                        style={{ color: '#666', fontStyle: 'italic' }}
                    >
                        Chưa có công việc nào. Hãy thêm một công việc!
                    </p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {todos.map((todo, index) => (
                            <li
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    margin: '5px 0',
                                    backgroundColor: todo.completed ? '#f0f0f0' : 'white',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }}
                            >
                                {/* Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(todo.id)}
                                />

                                {/* Todo text */}
                                <span
                                    style={{
                                        flex: 1,
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        color: todo.completed ? '#666' : 'black'
                                    }}
                                >
                                    {todo.text}
                                </span>

                                {/* Delete button */}
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Xóa
                                </button>
                            </li>
                        ))}
                    </ul>
                )

            }
        </div>
    </div>
  )
}
export default App
