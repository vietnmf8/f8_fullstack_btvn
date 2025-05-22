/* Module tính toán biểu thức */

// Đưa hàm calculate có chức năng thực hiện phép tính

/* Class tính toán biểu thức */
import {calculate} from "./mathOperations.js";

class ExpressionEvaluator { // Tạo đối tượng Expression Evaluator
    constructor() {
        // Định nghĩa thứ tự ưu tiên của các phép toán
        this.precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        }
    }

    /* Phân tích biểu thức để tách các toán hạng và toán tử */
    tokenize(expression) {
        const tokens = [];
        let currentNumber = '';

        // Duyệt từng ký tự trong biểu thức
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            // Nếu la số hặc dấu chấm thập phân, thêm vào số hiện tại
            if (/[0-9.]/.test(char)) {
                currentNumber += char;
            }
            // Nếu là toán tử
            else if (['+', '-', '*', '/'].includes(char)) {
                // Nếu có số đang xây dựng, thêm vào tokens
                if (currentNumber !== '') {
                    tokens.push(parseFloat(currentNumber));
                    currentNumber = '';
                }
                // Xử lý trường hợp số âm (dấu '-' đầu biểu thức hoặc sau toán tử khác)
                if (char === '-' && (tokens.length === 0 || typeof tokens[tokens.length - 1] !== 'number')) {
                    currentNumber = '-';
                } else {
                    tokens.push(char);
                }
            }
        }

        // Thêm số cuối cùng vào tokens nếu có
        if (currentNumber !== '') {
            tokens.push(parseFloat(currentNumber));
        }
        return tokens;
    }

    /* Tính toán biểu thức theo thứ tự ưu tiên */
    evaluateTokens(tokens) {
        // Trường hợp không có tokens
        if (tokens.length === 0) {
            return 0;
        }
        // Trường hợp chỉ có một token (một số)
        if (tokens.length === 1) {
            return tokens[0];
        }

        // Bắt đầu tính toán theo thứ tự ưu tiên
        // Đầu tiên tính các phép nhân và chia
        for (let priority = 2; priority > 0; priority--) {
            for (let i = 1; i < tokens.length - 1; i += 2) {
                const operator = tokens[i];
                // Nếu toán tử có thứ tự ưu tiên phù hợp
                if (this.precedence[operator] === priority) {
                    const leftOperand = tokens[i - 1];
                    const rightOperand = tokens[i + 1];

                    // Tính toán kết quả của phép tính hiện tại
                    const result = calculate(operator, leftOperand, rightOperand);

                    // Nếu là lỗi chia cho 0, trả về thông báo lỗi
                    if (typeof result === 'string' && result.includes('Error')) {
                        return result;
                    }

                    // Thay thế  3 phần tu (số - toán tử - số) = kết quả
                    tokens.splice(i - 1, 3, result);

                    // Điều chỉnh chỉ số vì mảng đã thay đổi
                    i -= 2;
                }
            }
        }
        // Kết quả  cuối cùng là phần tử duy nhất còn lại trong mảng
        return tokens[0]
    }

    /* Tính toán giá trị biểu thức */
    evaluate(expression) {
        // Phân tích biểu thức thành các token
        const tokens = this.tokenize(expression);
        // Tính toán kết quả từ token
        const result = this.evaluateTokens(tokens);
        // Nếu kết qua là số thì format lại để hiện thị đẹp hơn
        if (typeof result === 'number') {
            // Làm tròn số lẻ
            const roundedResult = parseFloat(result.toFixed(10));

            // Nếu là số nguyên, hiển thị không có phần thập phân
            if (Number.isInteger(roundedResult)) {
                return roundedResult;
            }
            return roundedResult;
        }
        return result;
    }
}

export default ExpressionEvaluator;

