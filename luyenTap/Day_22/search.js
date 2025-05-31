import {headers, employees, provinces} from "./data.js";
import {renderTable} from './renderTable.js'
import {getSearchField, sanitizeInput} from './tienIch.js'

/* Search */


// Truy cập input
const inputE = document.querySelector('.container input[name="search"]')
/* Tạo sự kiện INPUT cho Input */
inputE.addEventListener('input', event => {
    // Lấy giá trị từ ô input là Từ khoá tìm kiếm
    const searchStr = sanitizeInput(event.target.value)
    // Lọc các employee có tên chứa Từ khoá tìm kiếm (không phân biệt hoa thường)
    const filteredEmployees = employees.filter(employee => {
        return employee.searchStr.toLowerCase().includes(searchStr.toLowerCase())
    })

    // Tạo 4 mảng để phân loại nhân viên
    const idEmployees = []
    const nameEmployees = []
    const addressEmployees = []
    const provinceEmployees = []
    const ageEmployees = []
    // Phân loại nhân viên vào các mảng tương ứng
    filteredEmployees.forEach(employee => {
        // Xác định trường tìm kiếm thông qua Từ khoá tìm kiếm
        const searchField = getSearchField(employee, searchStr);
        console.log("[searchField] Trường theo từ khoá: ", searchField)

        // Thêm nhân viên vào mảng với trường tìm kiếm
        switch (searchField) {
            case 'id':
                idEmployees.push(employee);
                break;
            case 'name':
                nameEmployees.push(employee);
                break;
            case 'address':
                addressEmployees.push(employee);
                break;
            case 'province':
                provinceEmployees.push(employee);
                break;
            case 'age':
                ageEmployees.push(employee);
        }
    })

    console.log("[nameEmployees] Mảng tên: ", nameEmployees)
    // Tạo 2 mảng phân loại nhân viên theo tên (chữ cái đầu tiên)
    const nameTopEmployees = [];
    const nameBottomEmployees = [];

    // Phân loại nhân viên trong mảng nameEmployees
    nameEmployees.forEach(employee => {
        // Tách searchStr để lấy phần name (phần tử đầu tiên sau khi split)
        const name = employee.searchStr.split('|')[1].toLowerCase();
        console.log("Trong mảng nameEmployee, lấy phần tên trong thuộc tính searchStr: ", name)

        // Kiểm tra tên đó có bắt đầu bằng từ khoá tìm kiem không
        if (name.startsWith(searchStr.toLowerCase())) {
            // Nếu đúng -> thêm vào topName, ngược lại bottomName
            nameTopEmployees.push(employee);
        } else {
            nameBottomEmployees.push(employee);
        }
    })

    // Kết hợp 2 mảng
    const sortedEmployees = [
        ...idEmployees,
        ...nameTopEmployees,
        ...nameBottomEmployees,
        ...addressEmployees,
        ...provinceEmployees,
        ...ageEmployees,
    ]
    // Test
    console.log("TopName: ", nameTopEmployees)
    console.log("BottomName: ", nameBottomEmployees)
    console.log("Maảng đã lọc", sortedEmployees)
    console.log('***************************')
    // Render trực tiếp
    renderTable(sortedEmployees)
})





