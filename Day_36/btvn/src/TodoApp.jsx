import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { get, post, put, del } from './utils/index.js';
import './TodoApp.css';

function TodoApp() {
    // State quản lý danh sách todos
    const [todos, setTodos] = useState([]);
    // State quản lý todo đang được edit
    const [editingTodo, setEditingTodo] = useState(null);

    // Load todos khi component mount
    useEffect(() => {
        loadTodos();
    }, []);

    // Hàm load danh sách todos từ API
    const loadTodos = async () => {
        const data = await get('todos');
        if (data) {
            setTodos(data);
        }
    };

    // Hàm thêm todo mới
    const addTodo = async (title) => {
        // Optimistic update - cập nhật UI trước
        const tempTodo = {
            id: Date.now(), // ID tạm
            title,
            completed: false
        };
        setTodos(prev => [...prev, tempTodo]);

        // Call API
        const result = await post('todos', { title, completed: false });
        if (result) {
            // Cập nhật lại với ID thực từ server
            loadTodos();
        } else {
            // Rollback nếu API fail
            setTodos(prev => prev.filter(todo => todo.id !== tempTodo.id));
        }
    };

    // Hàm cập nhật todo
    const updateTodo = async (id, updates) => {
        // Optimistic update
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, ...updates } : todo
        ));

        // Call API
        const result = await put(`todos/${id}`, updates);
        if (!result) {
            // Rollback nếu API fail
            loadTodos();
        }
    };

    // Hàm xóa todo
    const deleteTodo = async (id) => {
        // Optimistic update
        const todoToDelete = todos.find(todo => todo.id === id);
        setTodos(prev => prev.filter(todo => todo.id !== id));

        // Call API
        const result = await del(`todos/${id}`);
        if (!result) {
            // Rollback nếu API fail
            setTodos(prev => [...prev, todoToDelete]);
        }
    };

    // Hàm toggle completed status
    const toggleComplete = async (id) => {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            await updateTodo(id, {
                title: todo.title,
                completed: !todo.completed
            });
        }
    };

    // Hàm bắt đầu edit
    const startEdit = (todo) => {
        setEditingTodo(todo);
    };

    // Hàm kết thúc edit
    const finishEdit = async (title) => {
        if (editingTodo) {
            // Lưu tạm editingTodo trước khi clear
            const todoToUpdate = editingTodo;
            // Clear editingTodo NGAY LẬP TỨC để UI chuyển về Add mode
            setEditingTodo(null);

            // Sau đó mới call API
            await updateTodo(todoToUpdate.id, {
                title,
                completed: todoToUpdate.completed
            });
        }
    };

    // Hàm hủy edit
    const cancelEdit = () => {
        setEditingTodo(null);
    };

    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            <form className="todo-form">
                <TodoForm
                    onAdd={addTodo}
                    onEdit={finishEdit}
                    editingTodo={editingTodo}
                    onCancel={cancelEdit}
                />
                <TodoList
                    todos={todos}
                    onEdit={startEdit}
                    onDelete={deleteTodo}
                    onToggle={toggleComplete}
                />
            </form>
        </div>
    );
}

export default TodoApp;