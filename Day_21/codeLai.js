// Cách 2: Sử dụng Create Element trong DOM

const headers = [
    {name: 'id', text: 'Id', align: 'center'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'age', text: 'Tuổi', align: 'right'},
    {name: 'action', text: 'Hành động', align: 'right'},
]

let employees = [
    {id: 1, name: 'Pham Cong Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Nguyen Nam Tao', address: 'Co Nhue - Ha Noi', age: 27},
    {id: 3, name: 'Pham Xuan Bac', address: 'Soc Son - Ha Noi', age: 27},
]

// Id của nhân viên đang được chỉnh sửa/xoá
let currentEmployeeId = null


function renderTable(employees) {

    //PHẦN 1: Tạo header
    // Bước 1: Lấy ra <tr> trong <thead>
    const tableHeaderE = document.querySelector('table thead tr')

    // Reset mặc định, clear cho tr
    tableHeaderE.innerHTML = ''
    /* Kỳ vọng:
    <tr>    <!--Hàng 1-->
        <td>1</td>  <!--Cột-->
        <td>Pham Cong Tin</td>
        <td>Hoai Duc - Ha Noi</td>
        <td>27</td>
    </tr>
    *
    * */

    // Tạo header
    /* Duyệt từng đối tượng trong header */
    headers.forEach(header => {
        /* Tạo các thẻ <th> */
        const th = document.createElement('th')
        /* Thêm nội dung văn bản vào thẻ <th> */
        th.innerText = header.text
        /* AppendChild vào thẻ <tr> */
        tableHeaderE.appendChild(th)
    })

// PHẦN 2: Xây dựng body
// Bước 1: Truy cập vào phần thử <tbody>
    const tableBodyE = document.querySelector('table tbody')
    tableBodyE.innerHTML = ''
    /* Duyệt từng đối tượng trong header */
    employees.forEach(employee => {
        /* Tạo đối tượng <tr> */
        const tr = document.createElement('tr');
        /* Duyệt từng đối tương trong header để tạo cột dựa trên các value của header */
        headers.forEach(header => {
            const td = document.createElement('td')
            /* Nếu cột có tiêu đề là action, thêm 2 nút bấm  */
            if (header.name === 'action') {
                const editBtn = document.createElement('span')
                const delBtn = document.createElement('span')

                /* Dùng thư viện icon -> set thuộc tính */
                editBtn.setAttribute('class', 'mdi mdi-pencil-outline edit-btn')
                delBtn.setAttribute('class', 'mdi mdi-trash-can-outline del-btn')

                /* Thêm sự kiện cho nút edit */
                editBtn.addEventListener('click', () => openEditPopup(employee.id))

                /* Thêm sự kiện cho nút delete */
                delBtn.addEventListener('click', () => openDeletePopup(employee.id))

                /* Đưa vào <td> */
                td.appendChild(editBtn)
                td.appendChild(delBtn)
            } else {
                td.innerText = employee[header.name]
            }

            /* Kiểm tra thuộc tinh text-align cho từng cột theo header*/
            if (header.align) {
                td.setAttribute('class', `text-align-${header.align}`)
            }

            tr.appendChild(td)
        })
        tableBodyE.appendChild(tr)
    })
}

// Gọi hàm
renderTable(employees)

// Xử lý phần header có thể đa ngôn ngữ = thay đổi mảng header
// Xử lý khi thêm cột khong bị xô lệch giao diện -> Thêm vào header align: right như là một thuộc tính
//
// Đặt sẵn trong file css có thuộc tính là
//  .text-align-right {
//       text-align: right;
//   }
// (giống như cách đặt của thư viện, dùng class để style)

// -> Vậy nếu trong vòng lặp, nếu header tồn tại key header.align
// -> Thêm class là text-align-right

// Yêu cầu: Lọc bảng theo giá trị value của input
// Bước 1: Truy cập input
const inputE = document.querySelector('.container input[name="search"]')

//Tạo sự kiện input
inputE.addEventListener('input', event => {
    console.log(event.target.value)
    // toLowerCase -> chuyển hết về chu thường
    // includes -> kiểm tra tính tồn tại
    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filteredEmployees)
    renderTable(filteredEmployees)
})


// Đề bài:
// 1. Click vào <button>Add new</button> sẽ hiện ra một pop-up với tiêu đề là "Thêm nhân viên mới"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, khi nhập xong, nhấn Save thì sẽ sinh ra một hàng mới với id lớn nhất tăng lên 1 đơn vị, nhấn vào Cancel thì ẩn pop-up
// 2. Click vào editBtn -> pop-up đó hiện ra với tiêu đề "Chỉnh sửa thông tin"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, tuy nhiên các trường đã được điền sẵn tên để chỉnh sửa, nhấn vào Cancel thì ẩn pop-up
// 3/ Click vào delBtn -> pop-up hiện ra vơ tiêu đề "Ten của employee" với nội dung "Bạn có chắc chắn xoá dữ liệu này không"
//  - Trong pop-up có 2 nút nút  Yes và No -> Bấm vào yes thì <tr> đó sẽ biến mất và cập nhật lại id cho đúng thứ tự, bấm vào No thì ẩn pop-up

// Yêu cầu 1: Thêm moi nhân viên

// Tạo hàm lấy ID lớn nhất trong danh sách nhân viên
function getMaxId() {
    let maxId = 0
    employees.forEach(employee => {
        if (employee.id > maxId) {
            maxId = employee.id
        }
    })

    return maxId
}


// Lấy các phần tử DOM
const addNewBtn = document.querySelector('.search-bar button')
const employeeFormPopup = document.getElementById('employeeFormPopup')
const cancelBtn = document.getElementById('cancelBtn')
const employeeForm = document.getElementById('employeeForm')
const popupTitle = document.getElementById('popupTitle');

// Mở pop-up thêm nhân viên mới
addNewBtn.addEventListener('click', () => {
    popupTitle.textContent = 'Thêm nhân viên mới';
    employeeForm.reset();
    document.getElementById('employeeId').value = '';
    employeeFormPopup.style.display = 'flex';
})

// Đóng pop-up khi nhấn Cancel
cancelBtn.addEventListener('click', () => {
    employeeFormPopup.style.display = 'none';
})

// Xử lý khi nhấn save
employeeForm.addEventListener('submit', (event) => {
    /* Ngăn hành vi Submit Form mặc định */
    event.preventDefault();
    const name = document.getElementById('name').value
    const address = document.getElementById('address').value
    const age = document.getElementById('age').value
    const idInput = document.getElementById('employeeId').value

    if (idInput) {
        // Sửa thông tin
        const index = employees.findIndex(emp => emp.id === parseInt(idInput))
        employees[index] = {
            id: parseInt(idInput),
            name: name,
            address: address,
            age: age,
        }
    } else {
        // Thêm mới
        const newId = getMaxId() + 1;
        employees.push({
            id: newId,
            name: name,
            address: address,
            age: age,
        })
    }

    // Đóng bảng và cập nhật
    employeeFormPopup.style.display = 'none';
    renderTable(employees);
})


// Yêu cầu 2: Chỉnh sửa nhân viên
// Tạo một hàm để hiện trạng thái sua nhân viên
function openEditPopup(employeeId) { // Đối số employee.id
    const employee = employees.find(emp => emp.id === employeeId)
    if (!employee) return console.error('Không tìm thấy nhân viên')

    popupTitle.textContent = "Chỉnh sửa thông tin"
    document.getElementById('employeeId').value = employee.id;
    document.getElementById('name').value = employee.name;
    document.getElementById('address').value = employee.address;
    document.getElementById('age').value = employee.age;

    employeeFormPopup.style.display = 'flex';
}


// Yêu cầu 3: Xoá nhân viên


const deleteConfirmPopup = document.getElementById('deleteConfirmPopup')
const noDeleteBtn = document.getElementById('noDeleteBtn')
const yesDeleteBtn = document.getElementById('yesDeleteBtn')
const deleteTitle = document.getElementById('deleteTitle')

// Mở pop-up xác nhận xoá
function openDeletePopup(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId)
    if (!employee) return console.error('Không tìm thấy nhân viên')

    currentEmployeeId = employeeId;
    deleteTitle.textContent = employee.name;
    deleteConfirmPopup.style.display = 'flex';
}

// Đóng pop-up -> No
noDeleteBtn.addEventListener('click', event => {
    deleteConfirmPopup.style.display = 'none'
    currentEmployeeId = null;
})

// Xoá nhân viên -> yes
yesDeleteBtn.addEventListener('click', () => {
    if (currentEmployeeId) {
        // Xoá nhân viên khỏi mảng
        employees = employees.filter(emp => emp.id !== currentEmployeeId)

        // Cập nhật thứ tự id
        employees = employees.map((emp, index) => {
            return {...emp, id: index + 1};
        })

        //Đóng pop-up và cập nhật bảng
        deleteConfirmPopup.style.display = 'none';
        currentEmployeeId = null
        renderTable(employees)
    }
})

