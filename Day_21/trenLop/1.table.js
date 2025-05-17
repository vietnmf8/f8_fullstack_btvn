// Cách 2: Sử dụng Create Element trong DOM

const headers = [
    {name: 'id', text: 'Id', align: 'center'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'age', text: 'Tuổi', align: 'right'},
    {name: 'action', text: 'Hành động', align: 'right'},
]

const employees = [
    {id: 1, name: 'Pham Cong Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Nguyen Nam Tao', address: 'Co Nhue - Ha Noi', age: 27},
    {id: 3, name: 'Pham Xuan Bac', address: 'Soc Son - Ha Noi', age: 27},
]
//PHẦN 1: Tạo header
// Bước 1: Lấy ra <tr> trong <thead>
const tableHeaderE = document.querySelector('table thead tr')
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


