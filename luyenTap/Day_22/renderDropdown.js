import {headers, employees, provinces} from "./data.js";
import {sanitizeInput, getSearchField, onOpenDialog, onCloseDialog, onSave} from './tienIch.js';
// // Biến cursor để theo dõi vị trí con trỏ trong dropdown
// let cursor = null;
// // Biến để lưu các mục đã lọc hiện tại
// let filteredProvinces = []

/* Render Dropdown */
const renderDropdown = (items) => {
    // Lấy ra dropdown container
    const container = document.querySelector('.autocomplete .dropdown')
    // Reset nội dung dropdown
    container.innerHTML = ''
    // Lưu các mục đã lọc hiện tại để sử dụng với phím mũi tên
    // filteredProvinces = items
    if (items.length === 0) {
        return container.style.display = 'none';
    }
    //Hiển thị dropdown
    container.style.display = 'block';

    // Duyệt từng đối tượng trong items để tạo các mục dropdown
    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = 'dropdown-item';
        div.textContent = item

        // Thêm sự kiện click cho mỗi mục dropdown
        div.addEventListener('click', () => {
            // Khi click vào  item , điền giá trị vào input
            document.querySelector('.autocomplete input[name="province"]').value = item;
            // Ẩn drop down sau khi chọn
            container.style.display = 'none';
        })

        container.appendChild(div)
    })


}

// Thêm sự kiện input cho ô input trong province
const provinceInput = document.querySelector('.autocomplete input[name="province"]')
provinceInput.addEventListener('input', (event) => {
    // Lấy giá trị từ input làm từ khoá tìm kiếm
    const searchStr = sanitizeInput(event.target.value.toLowerCase());
    console.log(searchStr)
    // Lọc các thành phố theo từ khoá tìm kiếm
    const filteredItems = provinces.filter(item => {
        return item.toLowerCase().includes(searchStr);
    })
    renderDropdown(filteredItems);
})

// Thêm sự kiện focus cho provinces
provinceInput.addEventListener('focus', (event) => {
    renderDropdown(provinces)
})