/* Module chính của máy tính */
import DisplayManager from "./displayManager.js";
import ExpressionEvaluator from "./expressionEvaluator.js";
import {isValidDecimalPoint, isValidExpression, isValidOperator} from "./expressionValidator.js";

class Calculator {
    // Khởi tạo đối tượng Calculator
    constructor(screenElement) {
        // Khoi tạo các đối tượng cần thiết
        this.displayManager = new DisplayManager(screenElement);
        this.expressionEvaluator = new ExpressionEvaluator();

        // Trạng thái của máy tính
        this.lastResultCalculated = false // Đánh dấu phép tính vừa thuc hiện xong
    }

    /* Xử lý sự kiện nhấn nút số */
    handleDigit(digit) {
        // Nếu vừa tính toán xong, xoá màn hình khi nhập số mới
        if (this.lastResultCalculated) {
            this.displayManager.clearDisplay()
            this.lastResultCalculated = false;
        }
        this.displayManager.appendValue(digit);
    }

    /* Xử lý sự kiện nhấn nút phép toán */
    handleOperator(operator) {
        // Lấy biểu thức hiện tại
        const currentExpression = this.displayManager.getCurrentValue();
        // Nếu vừa tính toán xong, reset lại trạng thái
        if (this.lastResultCalculated) {
            this.lastResultCalculated = false;
        }
        // Kiểm tra tính hợp lệ của phép toán
        if (isValidOperator(currentExpression, operator)) {
            this.displayManager.appendValue(operator);
        }
    }

    /* Xử lý sự kiện nhấn nút dấu chấm thập phân */
    handleDecimalPoint() {
        // Nếu vừa tính toán xong, xoá màn hình và thêm '0.'
        if (this.lastResultCalculated) {
            this.displayManager.clearDisplay();
            this.displayManager.appendValue("0.");
            this.lastResultCalculated = false;
            return;
        }

        // Kiểm tra tính hợp lệ của dấu .
        const currentExpression = this.displayManager.getCurrentValue();
        if (isValidDecimalPoint(currentExpression)) {
            // Nếu biểu thức rỗng hoặc kết thúc bằng phép toán, thêm "0."
            const lastChar = currentExpression.slice(-1);
            if (currentExpression === "" || ['+', '-', '*', '/'].includes(lastChar)) {
                this.displayManager.appendValue("0.");
            } else {
                this.displayManager.appendValue(".");
            }
        }
    }

    /* Xử lý sự kiện nhấn nút xoá tất cả (AC) */
    handleClear() {
        this.displayManager.clearDisplay();
        this.lastResultCalculated = false;
    }

    /* Xử lý sự kiện nhấn nút xoá một ký tự (Del) */
    handleDelete() {
        // Nếu vừa tính toán xong, xoá toàn bộ màn hình
        if (this.lastResultCalculated) {
            this.displayManager.clearDisplay();
            this.lastResultCalculated = false;
            return;
        }
        this.displayManager.deleteLastCharacter()
    }

    /* Xử lý sự kiện nhấn nút = */
    handleEquals() {
        const expression = this.displayManager.getCurrentValue()
        // Kiểm tra tính hợp lệ của biểu thức
        if (!isValidExpression(expression)) {
            return;
        }

        // Tính toán kết quả
        const result = this.expressionEvaluator.evaluate(expression);

        // Hiển thị kết quả
        this.displayManager.setDisplay(result);

        // Đánh dấu vừa tính toán xong
        this.lastResultCalculated = true;
    }

    /* Xử lý các sự kiện nhấn nút */
    handleButtonClick(value) {
        if (typeof value === 'number' || value === 0) {
            this.handleDigit(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            this.handleOperator(value);
        } else if (value === '.') {
            this.handleDecimalPoint();
        } else if (value === 'AC') {
            this.handleClear();
        } else if (value === 'Del') {
            this.handleDelete();
        } else if (value === '=') {
            this.handleEquals();
        }
    }
}

export default Calculator;