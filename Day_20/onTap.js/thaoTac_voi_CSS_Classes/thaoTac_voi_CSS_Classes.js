const element = document.getElementById('myElement');

// Thêm một class mới
element.className = 'highlight' /* Thêm mới / Thay thế cả class hiện có */

// Thêm class mới, giữ nguyên class cũ
element.className = element.className + ' new-class' /* Nối chuỗi, Lưu ý dấu cách ở đầu */

// Kiểm tra một class
console.log(element.className) /* highlight new-class */
console.log(element.className.includes('highlight')); /* Kiểm tra value có thuộc attribute này không */
