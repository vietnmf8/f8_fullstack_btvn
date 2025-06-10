/* Xử lý các sự kiện của nút bấm */

// Tạo hàm tính tổng
const sum = (a, b) => a + b;

// Tạo hàm tính hiệu
const minus = (a, b) => a - b;

// Tạo hàm tính tích
const times = (a, b) => a * b;

// Tạo hàm tính tổng
const divide = (a, b) => a / b;

// Tạo một obj -> Open/Close
const action = {
    '+': sum,
    '-': minus,
    '*': times,
    '/': divide,
}

// Tạo hàm kết quả sau khi tính toán
const getResult = (value) => {
    // Tạo biến kết quả
    let result = null;
    // Duyệt từng key trong object action
    Object.keys(action).forEach(key => {
        if (value.includes(key)) {
            const [a, b] = value.split(key);
            result = action[key](Number(a), Number(b))
        }
    })
    console.log(result)
    return result;

}




// Tạo hàm trả về giá trị khi sự kiện click được gọi
const onClickBtn = (value) => { //value = btn.value
    // Truy cập phần tử: <div class="calculate-screen"></div>
    const screenRef = document.querySelector('.calculate-screen')

    // Xử lý khi click vào dấu "="
    // Nếu nhập dấu "=" thì sẽ không hiển thị trên màn hình
    if (value === '=') {
        // Thực hiện chức năng tính toán -> gọi hàm tính toán
        // truyền tham số là phép tính trên màn hình, đồng thời thêm vào màn hình
        screenRef.innerText = getResult(screenRef.innerText)
        return
    }
    // Thêm vào màn hình
    screenRef.innerText += value


}



// Đưa hàm này ra ngoài
export {onClickBtn}