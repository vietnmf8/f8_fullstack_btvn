const box = document.getElementById('myBox')

// Đặt một thuộc tính CSS
box.style.backgroundColor = 'red';
box.style.width = '200px';
box.style.height = '100px';
box.style.marginTop = '20px';
box.style.borderRadius = '10px';

// Lấy tất cả thuộc tính CSS đã được tính toán
const computedStyle = getComputedStyle(box)

console.log(computedStyle.backgroundColor)  /* red */
console.log(computedStyle.width)  /* 200px */
console.log(computedStyle.fontSize)  /* 16px (default) */