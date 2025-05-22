/* Module quản lý hiển thị màn hình máy tính */
/* Cập nhật và hiển thị nội dung trên màn hình */
/*-----------------------------------------------*/


/* Class quản lý hiển thị màn hình */
class DisplayManager {
    // Tạo một obj mới từ DisplayManager = {...}
    constructor(screenElement) {
        // Lưu tham chiếu đến phần tử màn hình
        this.screenElement = screenElement;
        // Nội dung hiển thị trên màn hình
        this.displayValue = "";
        // Render giá trị hiển thị ban đầu
        this.updateDisplay();
    }

    // Tạo hàm cập nhật nội dung hiển thị trên màn hình
    updateDisplay() {
        this.screenElement.innerText = this.displayValue || "0";
    }

    // Them ký tự vào chuỗi hiển thị
    appendValue(value) {
        this.displayValue += value;
        this.updateDisplay();
    }

    // Xoá tất cả nội dung trên màn hình
    clearDisplay() {
        this.displayValue = "";
        this.updateDisplay();
    }

    // Xoá ký tự cuối cùng của chuỗi hiển thị
    deleteLastCharacter() {
        this.displayValue = this.displayValue.slice(0, -1);
        this.updateDisplay();
    }

    // Thiết lập nội dung hiển thị trên màn hình
    setDisplay(value) {
        this.displayValue = value.toString();
        this.updateDisplay();
    }

    // Lấy giá trị hiện tại trên màn hình
    getCurrentValue() {
        return this.displayValue;
    }
}

export default DisplayManager;




