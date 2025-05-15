// Truy cập thuộc tính bằng ID
const img = document.getElementById('myImage');

// Lấy thuộc tính trực tiếp
console.log(img.src) /* Lưu ý: đường dẫn phải là đường dẫn đầy đủ. VD: https://www.facebook.com/ */
console.log(img.alt)    /* new image */

// Đặt thuộc tính trực tiếp
img.src = 'newest.jpg';
img.alt = 'newest image';
img.className = 'img-responsive'; /* Không dùng img.class -> className */
img.id = 'newImageId' /* Thay đổi id */

// Thuộc tính tuỳ chỉnh - phải dùng dataset
img.dataset.info = 'Custom data'
console.log(img.dataset.info)

/* Kết quả cuối cùng
* <img id="newImageId" src="newest.jpg" alt="newest image" class="img-responsive" data-info="Custom data">
* */

