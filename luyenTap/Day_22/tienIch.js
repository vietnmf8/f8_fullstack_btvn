import {dialogContainerE} from './dialog.js'
import {headers, employees, provinces} from './data.js'
import {renderTable} from './renderTable.js'

/* Xử lý ngăn chặn XSS */
function sanitizeInput(input) {
    return String(input)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}


/* Hàm kiểm tra trường nào đang được tìm kiếm từ searchStr */
const getSearchField = (employee, searchStr) => {
    // Tách searchStr thành mảng cách phần tử
    const fields = employee.searchStr.split('|')
    // Lưu các tên trường tương ứng để xác định
    const fieldNames = ['id', 'name', 'address', 'province', 'age'];
    // Chuyển searchStr về lowerCase để so sánh không phân biệt hoa thường
    const lowerSearchStr = searchStr.toLowerCase();

    // Duyệt qua từng trường để kiểm tra
    for (let i = 0; i < fields.length; i++) {
        // Chuyển giá trị về lowerCase để so sánh không phân biệt hoa thường
        const fieldValue = fields[i].toLowerCase()
        // Kiểm tra xem từ khoá tìm kiếm có nằm trong trường này không
        if (fieldValue.includes(lowerSearchStr)) {
            return fieldNames[i];
        }
    }
    // Không tìm thấy -> trả về null
    return null;
}




// Thêm biến lưu trạng thái của employee có rỗng không (kiểm soát đang ở edit hay addnew)
// mặc định ban đầu là rỗng
let ageInputHandler;
let currentEditingEmployee = null
/* Hàm mở Dialog */
const onOpenDialog = (employee) => {
    dialogContainerE.style.display = 'block'

    // Xử lý khi nhấn Add new -> Thêm nhân viên mới
    //                edit    -> chỉnh sửa nhan viên

    // Lưu employee đang được edit
    currentEditingEmployee = employee;

   // Xử lý trường hợp age ngăn chặn nhập chữ
    const age = document.querySelector('.dialog-content input[name="age"]');

    age.addEventListener('input', (event) => {
        let value = event.target.value;
        // console.log(value)
        const newValue = value.replace(/[^0-9]|[eE]/g, '');
        console.log(newValue)
        event.target.value = newValue;
    });

    console.log("Chỉnh sửa nhân viên: ", currentEditingEmployee);
    // Khi không được truyền employee vào (=== null) -> Thêm mới
    if (employee === null) {
        document.querySelector('.dialog-title').textContent = 'Tạo nhân viên mới'
        document.querySelector('.dialog-content input[name="name"]').value = ''
        document.querySelector('.dialog-content input[name="address"]').value = ''
        document.querySelector('.dialog-content input[name="province"]').value = ''
        document.querySelector('.dialog-content input[name="age"]').value = ''
    } else {
        document.querySelector('.dialog-title').textContent = 'Chỉnh sửa nhân viên'
        document.querySelector('.dialog-content input[name="name"]').value = employee.name
        document.querySelector('.dialog-content input[name="address"]').value = employee.address
        document.querySelector('.dialog-content input[name="province"]').value = employee.province
        document.querySelector('.dialog-content input[name="age"]').value = employee.age
    }

}

/* Hàm đóng Dialog */
const onCloseDialog = () => {
    dialogContainerE.style.display = 'none'
}

// Hàm Lưu
// Nếu thêm mới -> save -> thêm mơi id lớn nhất để thêm mới
// Hàm lấy Id lớn nhất
const getMaxId = () => {
    const idArray = employees.map((employee) => employee.id)
    return Math.max(...idArray) + 1
    // Cộng 1 để thêm mới
}


/* Hàm Lưu Dialog */
const onSave = () => {
    // Thêm mới các thẻ input
    const name = sanitizeInput(document.querySelector('.dialog-content input[name="name"]').value.trim());
    const address = sanitizeInput(document.querySelector('.dialog-content input[name="address"]').value.trim());
    const province = sanitizeInput(document.querySelector('.dialog-content input[name="province"]').value.trim());
    const age = sanitizeInput(document.querySelector('.dialog-content input[name="age"]').value.trim());

    // Kiểm tra xem Tên đã được nhập chưa
    if (!name) {
        alert('Vui lòng nhập tên')
        document.querySelector('.dialog-content input[name="name"]').focus();
        return;
    }

    // Kiểm tra xem Địa chỉ đã được nhập chưa
    if (!address) {
        alert('Vui lòng nhập địa chỉ')
        document.querySelector('.dialog-content input[name="address"]').focus();
        return;
    }

    // Kiểm tra xem Tuổi đã được nhập chưa
    if (!age) {
        alert('Vui lòng nhập tuổi')
        document.querySelector('.dialog-content input[name="age"]').focus();
        return;
    }

    // Kiểm tra tuổi phải là số và lớn hơn 0
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 100) {
        alert('Tuổi phải là số dương và không quá 100')
        return
    }



    // Kiểm tra đang ở chế độ Edit hay thêm mới
    if (currentEditingEmployee !== null) {
        // Chế độ Edit -> Cập nhật employee hiện có
        const index = employees.findIndex(emp => emp.id === currentEditingEmployee.id);
        console.log('Id của nhân viên hiện tại trong mảng dữ liệu: ', index);
        if (index !== -1) {
            // Cập nhật thông tin Employee
            employees[index].name = name;
            employees[index].address = address;
            employees[index].province = province;
            employees[index].age = age;
            // Cập nhật lại với searchStr
            employees[index].searchStr = `${employees[index].id}|${name}|${address}|${province}|${age}`;
        }
    }   else {
        // Id mới cho nhân viên
        const newId = getMaxId();
        // Tạo searchStr
        const searchStr = `${newId}|${name}|${address}|${province}|${age}`;
        // Lấy 3 cái input trong dialog-content
        const employee = {
            id: newId,
            name: name,
            address: address,
            province: province,
            age: age,
            searchStr: searchStr,
        };
        //Push vào mảng employees ban đầu
        employees.push(employee)
    }
    //render lại bảng
    renderTable(employees)
    // Đóng Dialog
    onCloseDialog()
    // Reset biến currentEditingEmployee
    currentEditingEmployee = null;
}

export {sanitizeInput, getSearchField, onOpenDialog, onCloseDialog, onSave}



