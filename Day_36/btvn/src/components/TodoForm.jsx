import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onAddTodo, editingTodo, onEditTodo, onCancelEdit }) {
    // State cho input
    const [inputValue, setInputValue] = useState('');
    // Ref để focus vào input
    const inputRef = useRef(null);

    // useEffect để focus input khi component mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // useEffect để điền dữ liệu khi edit
    useEffect(() => {
        if (editingTodo) {
            setInputValue(editingTodo.title);
            inputRef.current?.focus();
        } else {
            setInputValue('');
        }
    }, [editingTodo]);

    // Hàm xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        let success = false;

        if (editingTodo) {
            // Mode edit
            success = await onEditTodo(editingTodo.id, inputValue);
        } else {
            // Mode thêm mới
            success = await onAddTodo(inputValue);
        }

        // Nếu thành công thì clear input và focus
        if (success) {
            setInputValue('');
            inputRef.current?.focus();
        }
    };

    // Hàm hủy edit
    const handleCancel = () => {
        setInputValue('');
        onCancelEdit();
        inputRef.current?.focus();
    };

    return (
        <div className="add-todo">
            <input
                ref={inputRef}
                type="text"
                className="todo-input"
                placeholder={editingTodo ? "Sửa nội dung..." : "What is the task today?"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            {editingTodo ? (
                // Hiển thị nút Save và Cancel khi đang edit
                <>
                    <button
                        type="button"
                        className="add-btn"
                        onClick={handleSubmit}
                        style={{marginRight: '8px'}}
                    >
                        Lưu
                    </button>
                    <button
                        type="button"
                        className="add-btn"
                        onClick={handleCancel}
                        style={{backgroundColor: '#666'}}
                    >
                        Hủy
                    </button>
                </>
            ) : (
                // Hiển thị nút Add khi thêm mới
                <button
                    type="submit"
                    className="add-btn"
                    onClick={handleSubmit}
                >
                    Add Task
                </button>
            )}
        </div>
    );
}

export default TodoForm;