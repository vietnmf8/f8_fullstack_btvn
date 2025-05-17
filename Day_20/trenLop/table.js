const headers = ['id', 'name', 'address', 'age']

const employees = [
    {id: 1, name: 'Pham Cong Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Nguyen Nam Tao', address: 'Co Nhue - Ha Noi', age: 27},
    {id: 3, name: 'Pham Xuan Bac', address: 'Soc Son - Ha Noi', age: 27},
]
// PHẦN 1: Build Header
// Bước 1: Gọi ra selector -> table thead tr -> thẻ <tr> trong <thead> trong <table>
const tableHeaderE = document.querySelector('table thead tr')

// Bước 2:
/* Kỳ vọng:
    <tr>
        <th>id</th>
        <th>name</th>
        <th>address</th>
        <th>age</th>
    </tr>
* */

/* Gọi đoạn mã HTML mới cần build -> thHtmlCode (bao gồm các thẻ <th>) */
let thHtmlCode = ''

/* Duyệt từng phần tử trong mảng headers -> lấy tên cho các cột đầu tiên */
for (const header of headers) {
    /* Thêm dần "+=" vào trong thẻ đoạn mã HTML các thẻ <th> có nội dung là các phần tử trong header */
    thHtmlCode += `<th>${header}</th>`
}
/* htmlCode:
<th>id</th><th>name</th><th>address</th><th>age</th>
*/

/* Thêm đoạn mã HTML mới này vào trong thẻ <tr> */
tableHeaderE.innerHTML = thHtmlCode

// Cách ngắn gọn hơn:
// for (const header of headers) {
//     tableHeaderE.innerHTML += `<th>${header}</th>`
// }

//---------------------------------------------------------------------------
// PHẦN 2: Build body
// Bước 1: Gọi / Truy cập đến thẻ <tbody>
const tableBodyE = document.querySelector('table tbody')

// Bước 2:
/* Kỳ vọng:
    <tr>    <!--Hàng 1-->
        <td>1</td>  <!--Cột-->
        <td>Pham Cong Tin</td>
        <td>Hoai Duc - Ha Noi</td>
        <td>27</td>
    </tr>

    <tr>    <!--Hàng 2-->
        <td>1</td>
        <td>Pham Cong Tin</td>
        <td>Hoai Duc - Ha Noi</td>
        <td>27</td>
    </tr>

    <tr>    <!--Hàng 3-->
        <td>1</td>
        <td>Pham Cong Tin</td>
        <td>Hoai Duc - Ha Noi</td>
        <td>27</td>
    </tr>
* */

/* Nhận thấy, có thể lặp <tr> và <td>*/
// Cách 1:
// Duyệt từng phần tử trong employees
// employees.forEach(employee => {
//     /* Tạo từng row <tr> */
//     tableBodyE.innerHTML += `
//         <tr>
//             <td>${employee.id}</td>
//             <td>${employee.name}</td>
//             <td>${employee.address}</td>
//             <td>${employee.age}</td>
//         </tr>
// `
// })

/* Gọi đoạn mã HTML mới cần build -> trHtmlCode (bao gồm các thẻ <tr>) */
let trHtmlCode = ''
/* Duyệt từng đối tượng trong mảng employees */
employees.forEach(employee => {
    /* Phần tử <tr> được lặp */
    trHtmlCode += `<tr>` /* Thẻ mở */

    /* Phần tử <td> được lặp */
    headers.forEach(header => {
        //VALUE trong mảng Array đang TRÙNG với KEY trong Object
        // -> Truy cập key = value trong mảng header
        trHtmlCode += `<td>${employee[header]}</td>`
    })

    trHtmlCode += `<tr>` /* Thẻ đóng */
})

tableBodyE.innerHTML = trHtmlCode


