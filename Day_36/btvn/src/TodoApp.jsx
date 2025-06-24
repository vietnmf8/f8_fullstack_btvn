import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { get, post, put, del } from './utils/index.js';
import './TodoApp.css';

function TodoApp() {
    // State quản lý danh sách todos
    const [todos, setTodos] = useState([]);
    // State quản lý todo đang được sửa
    const [editingTodo, setEditingTodo] = useState(null);

    // Hàm tải danh sách todos từ API khi component mount
    const loadTodos = async () => {
        const data = await get('todos');
        if (data) {
            setTodos(data);
        }
    };

    // useEffect để load todos khi component mount
    useEffect(() => {
        loadTodos();
    }, []);

    // Hàm thêm todo mới
    const handleAddTodo = async (title) => {
        // Validate input không được rỗng
        if (!title.trim()) {
            alert('Vui lòng nhập nội dung công việc!');
            return false;
        }

        const newTodo = {
            title: title.trim(),
            completed: false
        };

        const result = await post('todos', newTodo);
        if (result) {
            await loadTodos(); // Reload danh sách
            return true; // Thành công
        }
        return false;
    };

    // Hàm sửa todo
    const handleEditTodo = async (id, newTitle) => {
        if (!newTitle.trim()) {
            alert('Nội dung không được để trống!');
            return false;
        }

        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTodo = {
            ...todoToUpdate,
            title: newTitle.trim()
        };

        const result = await put(`todos/${id}`, updatedTodo);
        if (result) {
            await loadTodos(); // Reload danh sách
            setEditingTodo(null); // Thoát mode edit
            return true;
        }
        return false;
    };

    // Hàm toggle trạng thái completed
    const handleToggleTodo = async (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTodo = {
            ...todoToUpdate,
            completed: !todoToUpdate.completed
        };

        const result = await put(`todos/${id}`, updatedTodo);
        if (result) {
            await loadTodos(); // Reload danh sách
        }
    };

    // Hàm xóa todo
    const handleDeleteTodo = async (id) => {
        if (confirm('Bạn có chắc muốn xóa công việc này?')) {
            const result = await del(`todos/${id}`);
            if (result) {
                await loadTodos(); // Reload danh sách
            }
        }
    };

    // Hàm bắt đầu chế độ edit
    const handleStartEdit = (todo) => {
        setEditingTodo(todo);
    };

    // Hàm hủy edit
    const handleCancelEdit = () => {
        setEditingTodo(null);
    };

    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
                <TodoForm
                    onAddTodo={handleAddTodo}
                    editingTodo={editingTodo}
                    onEditTodo={handleEditTodo}
                    onCancelEdit={handleCancelEdit}
                />
                <TodoList
                    todos={todos}
                    editingTodo={editingTodo}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                    onStartEdit={handleStartEdit}
                />
            </form>
        </div>
    );
}

export default TodoApp;