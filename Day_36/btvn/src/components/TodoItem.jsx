import React from 'react';

function TodoItem({ todo, onEdit, onDelete, onToggle }) {
    // Hàm xử lý khi click checkbox
    const handleToggle = () => {
        onToggle(todo.id);
    };

    // Hàm xử lý khi click nút edit
    const handleEdit = () => {
        onEdit(todo);
    };

    // Hàm xử lý khi click nút delete
    const handleDelete = () => {
        if (confirm('Bạn có chắc muốn xóa todo này?')) {
            onDelete(todo.id);
        }
    };

    return (
        <div className="todo-item">
            {/* Checkbox để toggle completed */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />

            {/* Nội dung todo */}
            <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
            </div>

            {/* Nút edit */}
            <button
                type="button"
                className="edit-btn fa-solid fa-pen-to-square"
                onClick={handleEdit}
            ></button>

            {/* Nút delete */}
            <button
                type="button"
                className="del-btn fa-solid fa-trash"
                onClick={handleDelete}
            ></button>
        </div>
    );
}

export default TodoItem;