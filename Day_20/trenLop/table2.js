// Cách 2: Sử dụng Create Element trong DOM

const headers = [
    {name: 'id', text: 'Id'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'age', text: 'Tuổi'},
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
        td.innerText = employee[header.name]
        tr.appendChild(td)
    })
    tableBodyE.appendChild(tr)
})


// Xử lý phần header có thể đa ngôn ngữ


