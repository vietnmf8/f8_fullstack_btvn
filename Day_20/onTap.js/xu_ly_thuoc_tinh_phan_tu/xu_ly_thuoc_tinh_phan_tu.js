// Truy cập phần tử thông qua ID
const img = document.getElementById('myImage');

// Đọc thuộc tính
// Lấy ra thuộc tính src, alt của phần tử img
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

// Đặt/Thiết lập thuộc tính
img.setAttribute('src', 'new.jpg');
img.setAttribute('alt', 'new image');

// Thêm thuộc tính tuỳ chỉnh
img.setAttribute('data-custom', 'value');

// Kiểm tra sự tồn tại của thuộc tính trong phần tử
console.log(img.hasAttribute('data-custom')) //true

// Xoá thuộc tính của phần tử
img.removeAttribute('data-custom')
console.log(img.hasAttribute('data-custom')) //false

/* Kết quả cuối cùng:
<img id="myImage" src="new.jpg" alt="new image">
* */