import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onAdd, onEdit, editingTodo, onCancel }) {
    // State quản lý input value
    const [inputValue, setInputValue] = useState('');
    // Ref để focus vào input
    const inputRef = useRef(null);

    // Effect để cập nhật input khi có todo đang edit
    useEffect(() => {
        if (editingTodo) {
            setInputValue(editingTodo.title);
        } else {
            setInputValue('');
        }
    }, [editingTodo]);

    // Effect để focus vào input
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [editingTodo]);

    // Hàm xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn reload trang

        // Validate input không được rỗng
        if (inputValue.trim() === '') {
            alert('Vui lòng nhập nội dung!');
            return;
        }

        // Lưu value trước khi clear (để tránh bị mất khi state thay đổi)
        const valueToSubmit = inputValue.trim();

        // Clear input và focus NGAY LẬP TỨC
        setInputValue('');
        if (inputRef.current) {
            inputRef.current.focus();
        }

        if (editingTodo) {
            // Đang ở chế độ edit
            await onEdit(valueToSubmit);
        } else {
            // Đang ở chế độ add
            await onAdd(valueToSubmit);
        }
    };

    // Hàm handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="add-todo">
            <input
                ref={inputRef}
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                type="button" // Đổi từ submit thành button để tránh reload
                className="add-btn"
                id="add-todo-btn"
                onClick={handleSubmit}
            >
                {editingTodo ? 'Edit Task' : 'Add Task'}
            </button>
        </div>
    );
}

export default TodoForm;