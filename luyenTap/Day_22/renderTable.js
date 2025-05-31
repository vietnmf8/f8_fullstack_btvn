import {headers, employees, provinces} from "./data.js";
import {sanitizeInput, getSearchField, onOpenDialog, onCloseDialog} from "./tienIch.js";

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
                    console.log('Đã hiện Dialog Edit thành công!')
                })

                // Thêm sự kiện click cho nút xoá
                delBtn.addEventListener('click', () => {
                    // onOpenDeleteConfirm(employee)
                    console.log('delete')
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
export {renderTable}


/* Search */




