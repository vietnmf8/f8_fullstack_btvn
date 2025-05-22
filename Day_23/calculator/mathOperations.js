/* Module xử lý các phép tính toán: */

/* Mỗi hàm nhận 2 tham số và trả về kết quả tương ứng */
// Phép cộng 2 số
const add = (a, b) => a + b;

// Phép trừ 2 số
const subtract = (a, b) => a - b;

// Phép nhân 2 số
const multiply = (a, b) => a * b;

// Phép chia 2 số
const divide = (a, b) => {
    // Kiểm tra mẫu = 0
    if (b === 0) {
        return "Error: Không thể chia cho 0"
    }
    return a / b;
};

/* Thực hiện tính toán dựa trên phép toán và 2 số */

//Tạo hàm tính toán truyền vào 3 tham số: phép toán, số a, số b
const calculate = (operator, a, b) => {
    // Chuyển đổi chuỗi thành số THỰC
    a = parseFloat(a);
    b = parseFloat(b);

    // Xử lý các phép toán
    switch (operator) {
        case "+": // Nếu phép toán là '+' -> gọi hàm add
            return add(a, b);
        case "-": // Nếu phép toán là '-' -> gọi hàm subtract
            return subtract(a, b);
        case "*": // Nếu phép toán là '*' -> gọi hàm multiply
            return multiply(a, b);
        case "/": // Nếu phép toán là '/' -> gọi hàm divide
            return divide(a, b);
    }
};

// Xuất hàm ra ngoài
export {add, subtract, multiply, divide, calculate};

