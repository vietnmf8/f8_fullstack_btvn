// Truy cập phần tử qua Id
const element = document.getElementById('myElement')

// Thêm classes
element.classList.add('active');
element.classList.add('visible', 'highlighted'); /* Thêm nhiều class */

// Xoá classes
element.classList.remove('highlighted');

// Toggle class (thêm nếu chưa có | xoá nếu đã có)
element.classList.toggle('active'); /* Xoá 'active' vì đã có */

// Thay thế class
element.classList.replace('visible', 'hidden'); /* Thay thế visible -> hidden */

// Kiểm tra sự tồn tại của class
if (element.classList.contains('hidden')) {
    console.log('Element đang ẩn')
}

// Lặp qua tất cả các classes
element.classList.forEach(className => {
    console.log(className)
})