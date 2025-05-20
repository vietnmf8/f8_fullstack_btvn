// Cách 2: Sử dụng Create Element trong DOM

const headers = [
    {name: 'id', text: 'Id', align: 'center'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'age', text: 'Tuổi', align: 'right'},
    {name: 'action', text: 'Hành động', align: 'right'},
]

let employees = [
    {id: 1, name: 'Cong Pham Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Pham Le Nam', address: 'Co Nhue - Ha Noi', age: 27},
    {id: 3, name: 'Tran Xuan Tran', address: 'Soc Son - Ha Noi', age: 27},
]

// Id của nhân viên hiện tại -> dùng để xoá nhân viên
let currentEmployeeId = null

// Function tạo bảng
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

//-------------------------------------------------------------------------------------------------------

// Yêu cầu: Lọc bảng theo giá trị value của input
// Bước 1: Truy cập input
const inputE = document.querySelector('.container input[name="search"]')

//Tạo sự kiện input
inputE.addEventListener('input', event => {
    // Chuyển thanh chữ thường + xoá khoảng trắng ở đầu và cuối
    const searchTerm = event.target.value.toLowerCase().trim();
    if (!searchTerm) {
        const sortedByIdEmployees = [...employees].sort((a, b) => a.id - b.id);
        renderTable(sortedByIdEmployees);
        // Nếu ô tìm kiếm trống -> giữ nguyên bảng
        renderTable(employees)
        return;
    }

    // toLowerCase -> chuyển hết về chu thường
    // includes -> kiểm tra tính tồn tại

    // Lọc tên nhân viên có tên chứa từ khoá tìm kiếm (như code cũ)
    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(searchTerm)
    })

    // Bước 2: Sắp xếp kết quả dựa trên vị trí xuất hiện của từ khóa trong tên
    const sortedEmployees = filteredEmployees.sort((a, b) => {
        // Chuyển tên về chữ thường để so sánh không phân biệt hoa thường
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        // Tìm vị trí đầu tiên của từ khóa trong tên
        const posA = nameA.indexOf(searchTerm);
        const posB = nameB.indexOf(searchTerm);

        // Kiểm tra nếu từ khóa nằm ở đầu tên
        const isAtStartA = posA === 0;
        const isAtStartB = posB === 0;

        // Quy tắc sắp xếp:
        // 1. Ưu tiên từ khóa ở đầu tên
        if (isAtStartA && !isAtStartB) return -1; // a lên trước
        if (!isAtStartA && isAtStartB) return 1;  // b lên trước

        // 2. Nếu cùng vị trí (đầu/không đầu), sắp xếp theo vị trí xuất hiện của từ khóa
        if (posA !== posB) return posA - posB;

        // 3. Nếu cùng vị trí xuất hiện, sắp xếp theo độ dài tên (ngắn lên trước)
        return nameA.length - nameB.length;
    });

    // Hiển thị lại bảng đã sap xếp
    renderTable(sortedEmployees)
})

//--------------------------------------------------------------------------------------------------------

// Đề bài:
// 1. Click vào <button>Add new</button> sẽ hiện ra một pop-up với tiêu đề là "Thêm nhân viên mới"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, khi nhập xong, nhấn Save thì sẽ sinh ra một hàng mới với id lớn nhất tăng lên 1 đơn vị, nhấn vào Cancel thì ẩn pop-up
// 2. Click vào editBtn -> pop-up đó hiện ra với tiêu đề "Chỉnh sửa thông tin"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, tuy nhiên các trường đã được điền sẵn tên để chỉnh sửa, nhấn vào Cancel thì ẩn pop-up
// 3/ Click vào delBtn -> pop-up hiện ra vơ tiêu đề "Ten của employee" với nội dung "Bạn có chắc chắn xoá dữ liệu này không"
//  - Trong pop-up có 2 nút nút  Yes và No -> Bấm vào yes thì <tr> đó sẽ biến mất và cập nhật lại id cho đúng thứ tự, bấm vào No thì ẩn pop-up

// Yêu cầu 1: Thêm moi nhân viên

// Function tìm Id lớn nhất trong danh sách nhân viên
function getMaxId() {
    let maxId = 0
    // Duyệt qua tưn nhân viên và tìm ID lớn nhất
    employees.forEach(employee => {
        if (employee.id > maxId) {
            maxId = employee.id
        }
    })
    return maxId
}

// Bước 1: Lấy các phần tử DOM cần thiết
// Nút "Add new" để mở pop-up
const addNewBtn = document.querySelector('.search-bar button')
//Pop-up form thêm/sửa nhân viên (overlay)
const employeeFormPopup = document.getElementById('employeeFormPopup')
// Nút cancel trong Form
const cancelBtn = document.getElementById('cancelBtn')
// Form nhập liệu
const employeeForm = document.getElementById('employeeForm')
// Tiêu đề của pop-up
const popupTitle = document.getElementById('popupTitle')


// Bước 2: Xử lý sự kiện khi click vào nút "Add new"
addNewBtn.addEventListener('click', employee => {
    // Đặt tiêu đề pop-up là "Thêm nhân viên mới"
    popupTitle.textContent = "Thêm nhân viên mới";
    // Reset form để xoá dữ liệu cũ
    employeeForm.reset()
    // Xoá giá trị của trường ID ẩn (Trường này chỉ có giá trị khi sửa nhân viên)
    document.getElementById('employeeId').value = ''
    // Hiển thị pop-up bằng cách đặt display: flex
    employeeFormPopup.style.display = 'flex'
})

// Bước 3: Xử lý sự kiện click vào "Cancel"
cancelBtn.addEventListener('click', () => {
    // Ẩn pop-up
    employeeFormPopup.style.display = 'none'
})

// Bước 4: Xử lý sự kiện submit form (khi nhấn Save)
employeeForm.addEventListener('submit', (event) => {
    // Ngăn chặn hành vi mặc định của form (tải lại trang)
    event.preventDefault()

    // Lấy giá trị từ các trường input
    const name = document.getElementById('name').value // Trường tên
    const address = document.getElementById('address').value // Trường địa chỉ
    const age = document.getElementById('age').value // Trường tổi
    // Lấy giá trị ID (có giá trị khi sửa, không có giá trị khi thêm mới)
    const idInput = document.getElementById('employeeId').value

    // Kiểm tra xem form ở chế độ thêm mới/ hay chỉnh sửa (dựa vào trường Id)
    if (idInput) {
        // TRƯỜNG HỢP: IdInput có giá trị
        // Tìm vị trị của nhân viên trong mảng theo ID
        const index = employees.findIndex(emp => emp.id === parseInt(idInput))
        // Cập nhật thông tin
        employees[index] = {
            id: parseInt(idInput),
            name: name,
            address: address,
            age: age,
        }
    } else {
        // TRƯỜNG HỢP THÊM MỚI: idInput không có giá trị
        //  Tạo ID mới bằng ID lớn nhất + 1
        const newId = getMaxId() + 1
        // Thêm nhân viên moi vao mảng
        employees.push({
            id: newId,
            name: name,
            address: address,
            age: age,
        })
    }

    //Ẩn pop-up sau khi hoàn thành
    employeeFormPopup.style.display = 'none'
    // Cập nhật lại bảng dữ liệu mới
    renderTable(employees)
})


// Chỉnh sửa nhân viên
// Hàm mở pop-up chỉnh sửa nhân viên
function openEditPopup(employeeId) {
    // Tìm nhân viên theo Id
    const employee = employees.find(emp => emp.id === employeeId)
    // Nếu không tìm thấy thì hiển thị loi vào thoát hàm
    if (!employee) return console.error('Không tìm thấy nhân viên nào')

    // Đặt tiêu đề pop-up
    popupTitle.textContent = "Chỉnh sửa thông tin"

    // Điền sẵn thông tin nhân viên vào form
    document.getElementById('employeeId').value = employee.id // Trường Id ẩn
    document.getElementById('name').value = employee.name // Trường Tên
    document.getElementById('address').value = employee.address // Trường Địa chỉ
    document.getElementById('age').value = employee.age // Trường Tuổi

    // Hiển thị pop-up
    employeeFormPopup.style.display = 'flex'
}

// Xoá nhân viên
// Bước 1: Lây các phần tử DOM cần thiét
// Pop-up xác nhận xoá
const deleteConfirmPopup = document.getElementById('deleteConfirmPopup')
// Nút "No" trong pop-up xác nhận
const noDeleteBtn = document.getElementById('noDeleteBtn')
// Nút "Yes" trong pop-up xác nhận
const yesDeleteBtn = document.getElementById('yesDeleteBtn')
// Tiêu đề của pop-up xác nhận (sẽ hiển thị tên nhân viên)
const deleteTitle = document.getElementById('deleteTitle')

// Tạo hàm mở pop-up xác nhận xoá nhân viên
function openDeletePopup(employeeId) {
    // Tìm nhân viên theo Id
    const employee = employees.find(emp => emp.id === employeeId)
    // Nếu không tìm thấy, hiển thị lỗi và thoát hàm
    if (!employee) return console.error('Không tìm thấy nhân viên nào')
    // Lưu Id của nhn viên đang chuẩn bị xoá vào biến toàn cục
    currentEmployeeId = employeeId
    // Đặt tên nhân vien làm tiêu đề pop-up
    deleteTitle.textContent = employee.name
    // Hiển thị pop-up
    deleteConfirmPopup.style.display = 'flex'
}

// Bước 2: Xử lý sự kiện khi nhấn vào nút "No"
noDeleteBtn.addEventListener('click', (event) => {
    // Ẩn pop-up
    deleteConfirmPopup.style.display = 'none'
    // Reset biến currentEmployeeId
    currentEmployeeId = null
})

// Bước 3: Xử lý sự kiến khi nhấn vào nút "Yes"
yesDeleteBtn.addEventListener('click', (event) => {
    if (currentEmployeeId) {
        // Lọc mảng employees để loại bỏ nhân viên có ID trùng với currentEmployeeId
        employees = employees.filter(emp => emp.id !== currentEmployeeId)

        // Ẩn pop-up
        deleteConfirmPopup.style.display = 'none'
        // Reset biến currentEmployeeId
        currentEmployeeId = null
        // Cập nhật lại bảng
        renderTable(employees)

    }
})


