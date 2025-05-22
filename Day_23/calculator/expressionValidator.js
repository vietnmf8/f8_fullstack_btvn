/* Module kiểm tra tính hợp lệ của biểu thức */
/* Đảm bảo biểu thức không có lỗi cú pháp */


/* Kiểm tra phép toán có thể thêm vào biểu thức hay không */
// Tạo function kiểm tra tính hợp lệ của phép toán -> truyền 2 tham số (biểu thức hiện tại, phép toán)
const isValidOperator = (currentExpression, operator) => {
    // Nếu biểu thức RỖNG và là phép toán thì không hợp lệ (trừ dấu "-" đại diện cho số âm)
    if (currentExpression === "" && operator !== "-") {
        return false;
    }

    // Lấy ký tự cuối của biểu thức
    const lastChar = currentExpression.slice(-1);

    // Kiểm tra có phải hai phép toán liên tiếp không
    // Ký tự cuối là phép toán và ky tự mới cũng là phép toán thì không hợp lệ
    if (["+", "-", "*", "/", "."].includes(lastChar) && ["+", "-", "*", "/", "."].includes(operator)) {
        return false;
    }

    // Các phép toán và biểu thức hợp lệ
    return true;
};

/* Kiểm tra dấu chấm có thể thêm vào biểu thức hay không */
const isValidDecimalPoint = (currentExpression) => {
    // Nếu biểu thức Rỗng -> có thể thêm dấu . (sẽ hiển thị là 0.)
    if (currentExpression === "") {
        return true;
    }

    // Lấy ký tự cuối của biểu thức
    const lastChar = currentExpression.slice(-1);

    // Không thể thêm dấu chấm sau một phép toán
    if (["+", "-", "*", "/"].includes(lastChar)) {
        return false;
    }

    // Kiểm tra từ vị trí phép toán cuối cùng đến cuối biểu thức
    // Nếu đã có dấu chấm thì không thể thêm dấu chấm mới
    let lastOperatorIndex = Math.max(
        currentExpression.lastIndexOf("+"),
        currentExpression.lastIndexOf("-"),
        currentExpression.lastIndexOf("*"),
        currentExpression.lastIndexOf("/"),
    )

    // Nếu không tìm thấy phép toan -> kiểm tra toàn bộ biểu thức
    if (lastOperatorIndex === -1) {
        return !currentExpression.includes(".");
    }

    // Kiểm tra từ vị trí phép toán cuối cùng đến cuối biểu thức
    return !currentExpression.substring(lastOperatorIndex).includes(".");
}

/* Kiểm tra biểu thức có hợp lệ để thực hiện tính toán không */
const isValidExpression = (expression) => {
    // Biểu thức RỖNG -> không hợp lệ
    if (!expression || expression === "") {
        return false;
    }

    // Biểu thức kết thúc bằng phép toán không hợp lệ
    const lastChar = expression.slice(-1);
    if (["+", "-", "*", "/", "."].includes(lastChar)) {
        return false;
    }
    return true;
}

export { isValidOperator, isValidDecimalPoint, isValidExpression };