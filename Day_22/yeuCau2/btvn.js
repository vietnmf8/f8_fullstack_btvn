// Cách 2: Sử dụng Create Element trong DOM

const headers = [
    {name: 'id', text: 'Id', align: 'center'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'province', text: 'Thành Phố'},
    {name: 'age', text: 'Tuổi', align: 'right'},
    {name: 'action', text: 'Hành động', align: 'right'},
]

const employees = [
    {
        id: 1,
        name: 'Cong Pham Tin',
        address: 'Vinh Tuong',
        province: 'Vinh Phuc',
        age: 27,
        searchStr: 'Cong Pham Tin|Vinh Tuong|Vinh Phuc|27'
    },
    {
        id: 2,
        name: 'Nguyen Nam Tao',
        address: 'Co Nhue',
        province: 'Ha Noi',
        age: 27,
        searchStr: 'Nguyen Nam Tao|Co Nhue|Ha Noi|27'
    },
    {
        id: 3,
        name: 'Pham Xuan Bac',
        address: 'Duy Tien',
        province: 'Ha Nam',
        age: 27,
        searchStr: 'Pham Xuan Bac|Duy Tien|Ha Nam|27'
    },
]

// Tạo dữ diệu từ drop-down
const provinces = [
    "Ha Noi",
    "Ha Nam",
    "Vinh Phuc",
    "Phu Tho",
    "Bac Blinh",
    "Bac Giang",
    "Vinh Phuc",
    "Phu Tho",
    "Bac Blinh",
    "Bac Giang"
]

// Biến cursor để theo dõi vị trí con trỏ trong dropdown
let cursor = null;
// Biến để lưu các mục đã lọc hiện tại
let filteredProvinces = []

// Hàm render dropdown cho autocomplete
const renderDropdown = (items) => {
    // Lấy ra dropdown container
    const container = document.querySelector('.autocomplete .dropdown');
    // Reset nội dung dropdown
    container.innerHTML = '';
    // Lưu các mục đã lọc hiện tại để sử dụng với phím mũi tên
    filteredProvinces = items
    // Nếu không có items, ẩn dropdown
    if (items.length === 0) {
        return container.style.display = 'none';
    }
    // Hiển thị dropdown
    container.style.display = 'block';

    // Duyệt từng đối tượng trong items để tạo các mục dropdown
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.textContent = item;

        // Thêm sự kiện click cho mỗi mục dropdown
        div.addEventListener('click', () => {
            //Khi click vào item, điền giá trị vào input
            document.querySelector('.autocomplete input[name="province"]').value = item;
            // Ẩn dropdown sau khi chọn
            container.style.display = 'none';
            // Reset cursor
            cursor = null;
        })
        container.appendChild(div)
    })
}

renderDropdown(provinces);

// Hàm reset background
const resetBackground = () => {
    const itemsE = document.querySelectorAll('.dropdown-item');
    itemsE.forEach(itemE => {
        itemE.classList.remove('active');
        itemE.style.backgroundColor = '#fff'; // fix tạm theo màu sắc
    })
}


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

                //Nếu mà thêm sự kiện ở dưới, thì sẽ phải dùng vòng lặp để duyệt các button để thêm sự kiện
                // -> thêm trực tiếp
                editBtn.addEventListener('click', () => {
                    onOpenDialog(employee) // HIển thị dialog ở trạng thái edit -> truyền thẳng vào employee
                })

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

// Hàm kiểm tra trường nào đang được tìm kiếm từ searchStr
const getSearchField = (employee, searchStr) => {
    // Tách searchStr thành mảng cách phần tử
    const fields = employee.searchStr.split('|')
    // Lưu các tên trường tương ứng để xác định
    const fieldNames = ['name', 'address', 'province', 'age'];
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

//Tạo sự kiện input
inputE.addEventListener('input', event => {
// Lấy giá trị từ ô input làm từ khoá tìm kiếm
    const searchStr = event.target.value
// Kiểm tra nếu không có từ khoá tìm kiếm th hiển thị toan bộ danh sách
    if (!searchStr) {
        return renderTable(employees)
    }

// Lọc các nhan viên có tên chứa từ khoá tìm kiếm (không phân biệt hoa thường)
    const filteredEmployees = employees.filter((employee) => {
        return employee.searchStr.toLowerCase().includes(searchStr.toLowerCase())
    })

// Tạo 4 mảng để phân loại nhân viên:
    //- nameEmployees: chứa nhân viên có Tên chứa từ khoá tìm kiếm
    //- addressEmployees: chứa nhân viên có Địa chỉ chứa từ khoá tìm kiếm
    //- ageEmployees: chứa nhân viên có Tuổi chứa từ khoá tìm kiếm
    //- provinceEmployees: chứa nhân viên có Thành phố chứa từ khoá tìm kiếm
    const nameEmployees = [];
    const addressEmployees = [];
    const provinceEmployees = [];
    const ageEmployees = [];
    // Phân loại nhân viên vào các mảng tương ứng
    filteredEmployees.forEach(employee => {
        // Xác định trường được tìm kiếm
        const searchField = getSearchField(employee, searchStr);

        //  Thêm nhân viên vào mảng với trường tìm kiếm
        if (searchField === 'name') {
            nameEmployees.push(employee);
        } else if (searchField === 'address') {
            addressEmployees.push(employee);
        } else if (searchField === 'province') {
            provinceEmployees.push(employee);
        } else if (searchField === 'age') {
            ageEmployees.push(employee);
        }
    })

// Tạo 2 mảng ể phân loại nhan viên:
//  - Mảng topEmployees: chứa nhân viên có tên BẮT ĐẦU bằng từ khoá tìm kiếm
//  - Mảng bottomEmployees: chứa nhân viên có tên Chứa từ khoá tìm kiếm nhưng không bắt đầu bằng từ khoá

// //Cũ
//     const topEmployees = [];
//     const bottomEmployees = [];
//
// // Phân loại nhân viên va 2 mảng dựa trên điều kiện bắt đầu bằng từ khoá tìm kiếm
//     filteredEmployees.forEach(employee => {
//         // Kiểm tra xem tên nhân viên có bắt đầu bằng từ khoá tìm kiếm hay không (không phân biệt hoa thường)
//         if (employee.name.toLowerCase().startsWith(searchStr.toLowerCase())) {
//             // Nếu bắt đầu bằng từ khoá tìm kiếm,  thêm vào mảng topEmployees
//             topEmployees.push(employee)
//         } else {
//             // Nếu không bắt đầu bằng từ khoa nhưng vẫn chứa từ khoá, thêm vào mảng bottomEmployees
//             bottomEmployees.push(employee)
//         }
//     })

// Mới
    const nameTopEmployees = [];
    const nameBottomEmployees = [];

    // Phân loại nhân viên trong mảng nameEmployees
    nameEmployees.forEach(employee => {
        // Tách searchStr để lấy phần name (phần tử đầu tiên sau khi split)
        const name = employee.searchStr.split('|')[0].toLowerCase();
        console.log(name)

        // Kiểm tra xem tên có bắt đầu bằng từ khoá tìm kiếm không
        if (name.startsWith(searchStr.toLowerCase())) {
            // neu bắt đầu bằng từ khoá -> thêm vào mảng nameTop
            nameTopEmployees.push(employee);
        } else {
            // Nếu không bắt đầu bằng từ khoá nhưng vẫn chứa từ khoá
            nameBottomEmployees.push(employee);
        }
    })


// Kết hợp 2 mảng : nhân viên bắt đầu tìm kiếm từ khoá sẽ hiển thị trước
    const sortedEmployees = [
        ...nameTopEmployees,
        ...nameBottomEmployees,
        ...addressEmployees,
        ...provinceEmployees,
        ...ageEmployees]
// Hiển thị danh sách nhân viên được sắp xếp
    renderTable(sortedEmployees)
})


// Đề bài:
// 1. Click vào <button>Add new</button> sẽ hiện ra một pop-up với tiêu đề là "Thêm nhân viên mới"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, khi nhập xong, nhấn Save thì sẽ sinh ra một hàng mới với id lớn nhất tăng lên 1 đơn vị, nhấn vào Cancel thì ẩn pop-up
// 2. Click vào editBtn -> pop-up đó hiện ra với tiêu đề "Chỉnh sửa thông tin"
//  - Trong pop-up có trường Tên, Địa Chỉ, Tuổi giống như tiêu đề ở bảng, 2 nút Cancel và Save, tuy nhiên các trường đã được điền sẵn tên để chỉnh sửa, nhấn vào Cancel thì ẩn pop-up
// 3/ Click vào delBtn -> pop-up hiện ra vơ tiêu đề "Ten của employee" với nội dung "Bạn có chắc chắn xoá dữ liệu này không"
//  - Trong pop-up có 2 nút nút  Yes và No -> Bấm vào yes thì <tr> đó sẽ biến mất và cập nhật lại id cho đúng thứ tự, bấm vào No thì ẩn pop-up

// Dialog
// Lấy dialog
const dialogContainerE = document.querySelector('.dialog-container')
const cancelBtnE = document.querySelector('.dialog-action .cancel-btn')
const saveBtnE = document.querySelector('.dialog-action .save-btn')

// Hàm Javascript Inline để mở dialog
const onOpenDialog = (employee) => {
    dialogContainerE.style.display = 'block'
    // Reset cursor khi mo dialog
    cursor = null;

    // Ẩn dropdown ban đâu
    document.querySelector('.dialog-content .dropdown').style.display = 'none';

    // Lấy input cho province
    const provinceInput = document.querySelector('.dialog-content input[name="province"]');

    // Thêm sự kiện input cho ô input trong province
    provinceInput.addEventListener('input', (event) => {
        // Lấy giá trị từ input làm từ khoá tìm kiếm
        const searchStr = event.target.value.toLowerCase()
        // Lọc các thành phố theo từ khoá tìm kiếm
        const filteredItems = provinces.filter(item => {
            return item.toLowerCase().includes(searchStr)
        })
        cursor = null
        console.log(cursor)
        // Render lại dropdown với các mục đã lọc
        renderDropdown(filteredItems);
    })

    // Thêm sự kiện focus cho provinces
    provinceInput.addEventListener('focus', (event) => {
        // Khi focus vào input, hiển thị tất cả thành phố
        renderDropdown(provinces)
    })

    // Thêm sự kiện blur cho provinces
    provinceInput.addEventListener('blur', (event) => {
        // Thêm độ trễ nhỏ để có thể click vào dropdown trước khi nó biến mâ
        setTimeout(() => {
            document.querySelector('.dialog-content .dropdown').style.display = 'none';
        }, 150)
    })

    // Thêm sự kiện keydown cho province
    provinceInput.addEventListener('keydown', (event) => {
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        // Xử lý phím mũi tên xuống
        if (event.key === 'ArrowDown') {
            // Ngăn không cho trình duyệt cuộn trang
            event.preventDefault();
            if (cursor === null) {
                cursor = 0
            } else if (cursor >= filteredProvinces.length - 1) {
                cursor = 0
            } else {
                cursor++
            }

            console.log(cursor)

            // reset background
            resetBackground()
            if (dropdownItems[cursor]) {
                dropdownItems[cursor].classList.add('active');
                dropdownItems[cursor].style.backgroundColor = '#ccc'; // Fix tạm bằng màu sắc
                // Đảm bảo item đang active hiển thị trong vùng nhìn thấy
                dropdownItems[cursor].scrollIntoView({block: 'nearest'});
            }
        }

        // Xử lý phím mũi tên đi lên
        else if (event.key === 'ArrowUp') {
            // Ngăn không cho trình duyệt cuộn trang
            event.preventDefault();

            if (cursor === null) {
                cursor = filteredProvinces.length - 1;
            } else if (cursor <= 0) {
                cursor = filteredProvinces.length - 1;
            } else {
                cursor--;
            }
            console.log(cursor)

            resetBackground()
            if (dropdownItems[cursor]) {
                dropdownItems[cursor].classList.add('active');
                dropdownItems[cursor].style.backgroundColor = '#ccc'; // Fix tạm bằng màu sắc
                dropdownItems[cursor].scrollIntoView({block: 'nearest'});
            }
        }

        // Xử lý phím enter
        else if (event.key === 'Enter') {
            // Ngăn không cho form submit
            event.preventDefault();

            if (cursor !== null && filteredProvinces[cursor]) {
                // Điền giá trị được chọn vào ô input
                provinceInput.value = filteredProvinces[cursor];
                // Ẩn Dropdown
                document.querySelector('.dialog-content .dropdown').style.display = 'none';
                // Reset cursor
                cursor = null;
            }
        }
    })

    // Khi dialog không được truyền employee vào
    if (employee === null) {
        document.querySelector('.dialog-content input[name="name"]').value = ''
        document.querySelector('.dialog-content input[name="address"]').value = ''
        document.querySelector('.dialog-content input[name="province"]').value = ''
        document.querySelector('.dialog-content input[name="age"]').value = ''
    } else {
        document.querySelector('.dialog-title').textContent = 'Edit Employee'
        // Fill dữ liệu từ 3 cái input trong dialog-content
        document.querySelector('.dialog-content input[name="name"]').value = employee.name
        document.querySelector('.dialog-content input[name="address"]').value = employee.address
        document.querySelector('.dialog-content input[name="province"]').value = employee.province
        document.querySelector('.dialog-content input[name="age"]').value = employee.age
    }


}

// Hàm đóng dialog
const onCloseDialog = () => {
    dialogContainerE.style.display = 'none'
}

// Hàm Save
// Khi save thì phải lấy id lớn nhất đẻ thêm mới
const getMaxId = () => {
    const ids = employees.map(emp => emp.id)
    return Math.max(...ids) + 1
}


const onSave = () => {
    // Lấy 3 cái input trong dialog-content
    const employee = {
        id: getMaxId(),
        name: document.querySelector('.dialog-content input[name="name"]').value,
        address: document.querySelector('.dialog-content input[name="address"]').value,
        province: document.querySelector('.dialog-content input[name="province"]').value,
        age: document.querySelector('.dialog-content input[name="age"]').value,
    };

    // Tạo searchStr mới bao gồm cả thành phố

    //Push vào mảng employees ban đầu
    employees.push(employee)

    //Render lại bảng
    renderTable(employees)
    //Đóng Dialog
    onCloseDialog()
}



