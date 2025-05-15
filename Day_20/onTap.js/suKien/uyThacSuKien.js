// Gọi ul
const taskList = document.getElementById('taskList');

// Thay vì đăng ký sự kiện cho từng li
taskList.addEventListener('click', (event) => {
    /* Kiểm tra nếu phần tử được click và li */
    if (event.target.tagName === "LI") { // Viết in hoa
        console.log('Clicked on: ', event.target.textContent);
        event.target.style.textDecoration = 'line-through';
    }
})

// Thêm task mới (li mới) - sẽ tự động hoạt động với sự kiện đã đăng ký
const newTask = document.createElement('li');
newTask.textContent = 'New Task';
taskList.appendChild(newTask);