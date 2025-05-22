/* Tạo hàm để truyền vào sự kiện onclick */
import Calculator from './calculator.js';

let calculator;

/* Khởi tạo máy tính */
document.addEventListener("DOMContentLoaded", () => {
    // Lấy phần tử màn hình
    const screenElement = document.getElementById('screen');
    // Khởi tạo đối tượng máy tính
    calculator = new Calculator(screenElement);
})

const onclickBtn = (value) => {
    calculator.handleButtonClick(value);
}
// Xuất hàm ra ngoài -> để có thể dùng ở file khác
export {onclickBtn}