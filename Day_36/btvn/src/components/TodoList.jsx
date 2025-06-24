import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, editingTodo, onToggleTodo, onDeleteTodo, onStartEdit }) {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                // Hiển thị thông báo khi chưa có todo nào
                <p style={{textAlign: 'center', color: '#ccc', marginTop: '20px'}}>
                    Chưa có công việc nào. Hãy thêm công việc đầu tiên!
                </p>
            ) : (
                // Render danh sách todos
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        isEditing={editingTodo?.id === todo.id}
                        onToggle={() => onToggleTodo(todo.id)}
                        onDelete={() => onDeleteTodo(todo.id)}
                        onStartEdit={() => onStartEdit(todo)}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;