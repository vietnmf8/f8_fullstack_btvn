/* Tạo class Calculator để khởi tạo các hàm trong đó */
class Calculator {
    // Khởi tạo Calculator = {} truyền vào 2 tham số Toán hạng trước đó và hiện tại
    constructor(previousOperandTextElement, currentOperandTextElement) {
        // Tạo thuộc tính previousOperandTextElement = Toán hạng trước đó (vùng chứa)
        this.previousOperandTextElement = previousOperandTextElement;
        // Tạo thuộc tính currentOperandTextElement = Toán hạng hiện tại (vùng chứa)
        this.currentOperandTextElement = currentOperandTextElement;
        // Khi khởi tạo thì cần reset -> gọi hàm clear
        this.clear()
    }

    // Tạo các function
    /* Clear - AC */
    clear() {
        // Tạo thuộc tính toán hạng trước đó, hiện tại, toán tử
        // Khi xoá thì đặt về RỖNG
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined; // Không xác định

    }

    /* Delete - Del */
    delete() {
        // Cắt bỏ vị trí cuối cùng của chuỗi
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    /* Thêm số lên màn hình */
    // Truyền vào số
    appendNumber(number) {
        // Nếu ta nhập "." trên bàn phím nhưng trên màn hình hiển thị đang BAO GỒM "." rồi thì sẽ không trả ra gì -> thoát hàm
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        // this.currentOperand = number;
        // Chuyển sang dạng string để nối chuỗi bằng dấu "+" thay vì tính toán
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /* Chọn Toán tử */
    // Truyền vào toán tử
    chooseOperation(operation) {
        // Nếu màn hình toán hạng hiện tại không có gì, mà nhập dấu '+' -> return thoát hàm
        if (this.currentOperand === '') {
            return;
        }
        // Nếu màn hình toán hạng trước đó đã tồn tại so hạng và toán tử rồi -> cần trả ra kết quả ở phần toán hạng hiện tịa
        if (this.previousOperand !== '') {
            this.compute()
        }


        // Đặt thuộc tính toán tử
        this.operation = operation;
        this.previousOperand = this.currentOperand.toString();
        this.currentOperand = '';
    }

    // Hàm hiển thị số cho đẹp
    getDisplayNumber(number) {
        // Tạo một số dạng chuỗi
        const stringNumber = number.toString();
        // Lấy phần nguyên -> Lấy phần nguyên trước dấu "."
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        // Lấy phan thập phân -> Lấy phần thập phân sau dấu "." - Không cần là một số
        const decimalDigits = stringNumber.split('.')[1]

        let integerDisplay
        // Nếu không có phần nguyên
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        // Nếu không có phần thập phân
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }


        // // Tạo một biến số thực
        // const floatNumber = parseFloat(number);
        // // Nếu số đó không tồn tại -> thoát hàm
        // if (isNaN(floatNumber)) {
        //     return;
        // }
        // // Trả về số thực ngăn cách nhau bằng dấu ","
        // return floatNumber.toLocaleString('en');
    }


    /* Hàm tính toán */
    compute() {
        // Tạo biến hiển thị kết quả các phép tính
        let computation
        // Tạo biến số hạng trước đó (dạng số thực để tính toán)
        const prev = parseFloat(this.previousOperand);
        // Tạo biến số hạng hiện tại (dạng số thực để tính toán)
        const current = parseFloat(this.currentOperand);
        // Kiểm tra nếu thiếu 1 trong 2 số hạng -> return thoát hàm
        if (isNaN(prev) || isNaN(current)) {
            return;
        }

        // Kiểm tra xem là phép tính nào -> thực hiện phép tính đó
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        // Lúc này phần hiển thị hiện tại (số hạng hiện tại)  = kết quả phép tính, và xoá toán tử va số hạng trước đó
        this.currentOperand = computation;
        this.previousOperand = ''
        this.operation = undefined;

    }

    /* Hàm cập nhật màn hình */
    updateDisplay() {
        // Nội dung bên trong phần tử hiển thị số hạng hiện tại = số hiện tại
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        // Nếu toán tử tồn tại thì cập nhật phép tính ở số hạng trước đó
        if (this.operation !== undefined) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


/* Gọi ra các phần tử */
// Gọi ra các Button - SỐ
const numberButtons = document.querySelectorAll('[data-number]');
// Gọi ra các Button - TOÁN TỬ
const operationButtons = document.querySelectorAll('[data-operation]');
// Gọi ra Button - Dấu "="
const equalsButton = document.querySelector('[data-equals]');
// Gọi ra Button Delete - Del
const deleteButton = document.querySelector('[data-delete]');
// Gọi ra Button All Clear - AC
const allClearButton = document.querySelector('[data-all-clear]');
// Gọi ra thẻ có nội dung = TOÁN HẠNG TRƯỚC ĐÓ
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// Gọi ra thẻ có nội dung = TOÁN HẠNG HIỆN TẠI
const currentOperandTextElement = document.querySelector('[data-current-operand]')


/* Thực hiện các thao tác, hành vi */
// Gọi ra class máy tính
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

/* Duyệt từng phần tử trong collection Nút dạng số */
numberButtons.forEach(button => {
    // Tạo sự kiện click cho từng số
    button.addEventListener('click', () => {
        // Khi click thì sẽ gọi hàm appendNumber trong class Calculator
        calculator.appendNumber(button.innerText);
        // Cập nhật màn hình
        calculator.updateDisplay();
    })
})

/* Duyệt từng phần tử trong collection Nút dạng toán tử */
operationButtons.forEach(button => {
    // Tạo sự kiện click cho từng toán tử
    button.addEventListener('click', () => {
        // Khi click thì sẽ gọi hàm chooseOperation trong class Calculator
        calculator.chooseOperation(button.innerText);
        // Cập nhật màn hình
        calculator.updateDisplay();
    })
})

/* Thêm sự kiện cho dấu '=' */
equalsButton.addEventListener('click', () => {
    // Gọi hàm tính toán
    calculator.compute();
    // Cập nhật màn hình
    calculator.updateDisplay();
})

/* Thêm sự kiện cho nút AC */
allClearButton.addEventListener('click', () => {
    // Gọi hàm xoá tat cả
    calculator.clear();
    // Cập nhật màn hình
    calculator.updateDisplay();
})

/* Thêm sự kiện cho nút Delete */
deleteButton.addEventListener('click', () => {
    // Gọi hàm xoá 1 ký tự
    calculator.delete();
    // Cập nhật màn hình
    calculator.updateDisplay();
})

