import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onDelete, onToggle }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default TodoList;