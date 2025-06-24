import {getApi, postApi, putApi, deleteApi} from "./utils/api.js";

const todoListRef = document.querySelector(".todo-list");
const addTodoBtnRef = document.getElementById('add-todo-btn')
const todoInputRef = document.querySelector('.todo-input')
let currentTodo = null


/* Step 13: handle onEdit */
const onEdit = (todo) => {
    //fill value on input
    todoInputRef.value = todo.title
    currentTodo = todo
}


/* Step 16: On edit status */
const onEditStatus = async (todo) => {
    await putApi(`todos/${todo.id}`, toBody({
        ...todo, completed: !todo.completed
    }))

    await onMounted()
}

/* Step 17: handle onDelete */
const onDelete = async (todo) => {
    // Xác nhận trước khi xóa
    if (confirm('Bạn có chắc muốn xóa todo này?')) {
        await deleteApi(`todos/${todo.id}`)
        await onMounted()
    }
}



/* Step 2: Creat 1 todo */
const createTodo = (todo) => {
    // Create: div.todo-item
    const todoItemRef = document.createElement("div");
    todoItemRef.classList.add("todo-item");

    // Create: checkbox
    const checkBoxRef = document.createElement("input");
    checkBoxRef.type = "checkbox";
    if (todo.completed) {
        checkBoxRef.setAttribute("checked", "checked");
    }
    checkBoxRef.addEventListener("change", () => {
        onEditStatus(todo)


    })


    // Create: div.todo-content
    const todoContentRef = document.createElement("div");
    todoContentRef.textContent = todo.title
    todoContentRef.classList.add('todo-content')
    if (todo.completed === true) {
        todoContentRef.classList.add('completed');
    }
    else {
        todoContentRef.classList.remove('completed')

    }


    // Create: button.edit-btn
    const editBtnRef = document.createElement("button");
    editBtnRef.type = "button";
    editBtnRef.classList.add('edit-btn', 'fa-solid', 'fa-pen-to-square')

    editBtnRef.addEventListener("click", () => {
        onEdit(todo)
    })

    // Create: button.del-btn
    const delBtnRef = document.createElement("button");
    delBtnRef.type = "button";
    delBtnRef.classList.add('del-btn', 'fa-solid', 'fa-trash')
    /* Step 12: Add click event */
    delBtnRef.addEventListener("click", () => {
        onDelete(todo)
    })

    //todoItemRef append
    todoItemRef.appendChild(checkBoxRef);
    todoItemRef.appendChild(todoContentRef);
    todoItemRef.appendChild(editBtnRef);
    todoItemRef.appendChild(delBtnRef);

    // todoListRef append
    todoListRef.appendChild(todoItemRef);
}

/* Step 3 Hàm render giao diện 1  */
const renderTodos = (todos) => {
    todoListRef.innerHTML = '';
    todos.forEach((todo) => {
        createTodo(todo)
    })
}

/* Hàm khởi động */
const onMounted = async () => {
    /* Step 1: Lấy todos từ API */
    const todos = await getApi('todos')
    /* Step 4: Call renderTodos */
    renderTodos(todos);
}
//Call function
onMounted()



/* Step 5: Click event -> addTodoBtnRef */
//Khi click vào nút Add -> phải lấy được nội dung trong ô input (cụ thể là title)
addTodoBtnRef.addEventListener('click', async () => {

    /* Step 11: Neu input = '' -> return */
    if (todoInputRef.value.length === 0) {
        alert('Vui long nhap ten!')
        return;
    }

    /* Step 7 : Khi click vào nút Add -> lay duoc body */
    const payload = toBody({
        title: todoInputRef.value, completed: false
    })

    /*Step 14: Neu id chua ton tai -> post, Neu id ton tai -> put */
    if (currentTodo?.id) {
        await putApi(`todos/${currentTodo.id}`, payload)
        console.log('Put thanh cong!')
    }
    /* Step 8: Them vao API */
    else {
        await postApi('todos', payload)
        console.log('Post thanh cong!')
    }

    /* Step 10: post thanh cong -> clear o input, tu dong focus() */
    todoInputRef.value = '';
    todoInputRef.focus()
    /* Step 9: Get APi moi -> render */
    await onMounted()
    /* Step 15: Sau khi update -> clear currentTodo */
    currentTodo = null

});
/* Step 6: Create body API */
const toBody = ({title, completed = false}) => {
    return {
        title, completed
    }
}
