// API
const todosApi = 'https://api-todolist-multiuser.onrender.com/Viet/todos'

// DOM Element
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Store "Todo" list
let todos = []

// Function:  "GET" todos
// -> Lấy danh sách tất cả todos
const getTodos = async () => {
    try {
        const response = await fetch(todosApi)
        if (!response.ok) {
            console.log(`Error: ${response.status}`)
        }
        return data = await response.json()
    }
    catch (error) {
        console.log(`Error: ${error}`)
        return [];
    }
}

// Function: POST
// -> Thêm todo mới
const postTodo = async (title) => {
    try {
        const response = await fetch(
            todosApi,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    completed: false,
                })
            }
        )
        if (!response.ok) {
            console.log(`Error: ${response.status}`)
        }
        return newTodo = await response.json()
    }
    catch (error) {
        console.log(`Error: ${error}`)
        return null
    }
}

// Function: PUT
// -> Cập nhật thông tin
const putTodo = async (id, updates) => {
    try {
        const response = await fetch(
            `${todosApi}/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updates),
            }
        )
        if (!response.ok) {
            console.log(`Error: ${response.status}`)
        }
        return updatedTodo = await response.json();
    }
    catch (error) {
        console.log(`Error: ${error}`)
        return null
    }
}

// Function: DELETE
// -> Xoá thông tin
const deleteTodo = async (id) => {
    try {
        const response = await fetch(
            `${todosApi}/${id}`,
            {
                method: 'DELETE',
            },
        )
        if (!response.ok) {
            console.log(`Error: ${response.status}`)
        }
        return true;
    }

    catch (error) {
        console.log(`Error: ${error}`)
        return false
    }
}

// Function:  Create Todo Element
// -> Tạo HTML cho 1 phần tu todo
const createTodoElement = (todo) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.dataset.id = todo.id;

    todoItem.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} />
        <div class="todo-content ${todo.completed ? 'completed' : ''}">${todo.title}</div>
        <button class="edit-btn fa-solid fa-pen-to-square"></button>
        <button class="del-btn fa-solid fa-trash"></button>
    `

    // Add event listeners
    const checkbox = todoItem.querySelector('input[type="checkbox"]')
    const deleteBtn = todoItem.querySelector('.del-btn')
    const editBtn = todoItem.querySelector('.edit-btn')

    checkbox.addEventListener('change', () => {
        handleToggleComplete(todo.id, checkbox.checked)
    })
    deleteBtn.addEventListener('click', () => {
        handleDeleteTodo(todo.id)
    })
    editBtn.addEventListener('click', () => {
        handleEditTodo(todo.id, todo.title)
    })
    return todoItem
}

// Function: Render Todo
// -> Hiển thị toàn bo danh sách
const renderTodos = () => {
    // Clear/Reset  = ''
    todoList.innerHTML = "";

    // Render each todo
    todos.forEach((todo) => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement)
    })
}



// Event: Button add-btn
// -> Xử lý khi nhấn vào nút Submit
const handleAddTodo = async (e) => {
    e.preventDefault()
    const title = todoInput.value.trim();

    // Validation
    if (!title) {
        todoInput.focus()
        return;
    }
    addBtn.disabled = true;
    addBtn.textContent = 'Adding...';

    const newTodo = await postTodo(title);
    if (newTodo) {
        todos.push(newTodo);

        renderTodos();

        todoInput.value = '';
        todoInput.focus();
    }

    addBtn.disabled = false;
    addBtn.textContent = 'Add Task';
}

// Event: Handle Toggle Complete
// -> Xử lý khi click vào checkbox
const handleToggleComplete = async (id, completed) => {
    const todo = todos.find(t => t.id === Number(id))
    if (!todo) {
        return;
    }
    const updatedTodo = await putTodo(
        id,
        {
            ...todo,
            completed: completed,
        }
    )
    if (updatedTodo) {
        const index = todos.findIndex(t => t.id === Number(id))
        todos[index] = updatedTodo;

        renderTodos()
    }
}

// Event: Handle Delete Todo
// -> Click nút xoá
const handleDeleteTodo = async (id) => {
    const success = await deleteTodo(id)
    if (success) {
        todos = todos.filter(t => t.id !== Number(id))
    }

    renderTodos()
}

// Event: Handle Edit Todo
// -> Click nút edit
const handleEditTodo = async (id, currentTitle) => {
    const newTitle = prompt('Enter new content:', currentTitle);
    if (newTitle === null || newTitle.trim() === '') {
        return;
    }

    const todo = todos.find(t => t.id === Number(id))
    if (!todo) return;

    const updatedTodo = await putTodo(
        id,
        {
            ...todo,
            title: newTitle.trim(),
        }
    )
    if(updatedTodo) {
        const index = todos.findIndex(t => t.id === Number(id))
        todos[index] = updatedTodo
    }

    renderTodos()
}


// Khởi tạo ứng dụng
 initApp = async () => {

    todoForm.addEventListener('submit', handleAddTodo);

    todos = await getTodos();

    renderTodos();

    // Focus on input
    todoInput.focus();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);