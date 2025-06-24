import React from 'react';

function TodoItem({ todo, isEditing, onToggle, onDelete, onStartEdit }) {
    return (
        <div className="todo-item">
            {/* Checkbox để đánh dấu hoàn thành */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
                disabled={isEditing} // Vô hiệu hóa khi đang edit
            />

            {/* Nội dung todo */}
            <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
            </div>

            {/* Nút sửa - hiển thị biểu tượng edit hoặc đang edit */}
            <button
                className="edit-btn fa-solid fa-pen-to-square"
                onClick={onStartEdit}
                disabled={isEditing}
                title={isEditing ? "Đang sửa..." : "Sửa"}
                style={{
                    opacity: isEditing ? 0.5 : 1,
                    cursor: isEditing ? 'not-allowed' : 'pointer'
                }}
            >
            </button>

            {/* Nút xóa */}
            <button
                className="del-btn fa-solid fa-trash"
                onClick={onDelete}
                disabled={isEditing} // Vô hiệu hóa khi đang edit
                title="Xóa"
                style={{
                    opacity: isEditing ? 0.5 : 1,
                    cursor: isEditing ? 'not-allowed' : 'pointer'
                }}
            >
            </button>
        </div>
    );
}

export default TodoItem;