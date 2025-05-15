const button = document.getElementById('myButton');
//
// // Thuộc tính Event Handler:
// button.onclick = () => {
//     console.log('button clicked');
// }
//
// // addEventListener
// button.addEventListener('click', (event) => {
//     console.log('button clicked');
//     console.log('Event object:', event);
// })


// Đối tượng Event
button.addEventListener('click', (event) => {
    // Thông tin cơ bản về sự kiện
    console.log('Event type: ', event.type) /* 'click' */
    console.log('Target Element: ', event.target) /* Phần tử được click */
    console.log('Current Target: ', event.currentTarget) /* Phần tử đang xử lý sự kiện (button) */

    // Thông tin vị trí (với sự kiện chuột)
    console.log('Mouse coordinates: ', event.clientX, event.clientY)  /* Vị trí chuột trong viewport */

    // Phòng ngừa hành vi mặc định
    event.preventDefault();     /* Ngăn hành vi mặc định (như submit form) */

    // Dừng sự kiện nổi bọt
    event.stopPropagation();    /* Ngăn sự kiện lan đến phần tử cha */
})


