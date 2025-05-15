const data = [
    {id: 1, name: 'Nguyễn Văn A', age: 22, email: 'a@example.com'},
    {id: 2, name: 'Trần Thị B', age: 21, email: 'b@example.com'},
    {id: 3, name: 'Lê Văn C', age: 23, email: 'c@example.com'}
];

const positions = [
    {id: 1, position: 'Giám đốc'},
    {id: 2, position: 'Nhân viên'},
    {id: 3, position: 'Quản lý'}
];


//PHẦN 1: Nối dữ liệu -> hashMap

// Bước 1: Tạo hashmap từ mảng nhỏ hơn (mảng position)
const positionMap = {};
positions.forEach(pos => {
    positionMap[pos.id] = pos.position;
})
/* Kết quả positionMap:
{
  '1': 'Giám đốc',
  '2': 'Nhân viên',
  '3': 'Quản lý'
}
*/

// Bước 2: Kết hợp data + position
const mergedData = data.map(person => {
    return {
        /*...person,*/
        id: person.id,
        name: person.name,
        age: person.age,
        email: person.email,
        position: positionMap[person.id],
    }
})
/* Kết quả:
[
{
id: 1,
name: 'Nguyễn Văn A',
age: 22,
email: 'a@example.com',
position: 'Giám đốc'
},
{
id: 2,
name: 'Trần Thị B',
age: 21,
email: 'b@example.com',
position: 'Nhân viên'
},
{
id: 3,
name: 'Lê Văn C',
age: 23,
email: 'c@example.com',
position: 'Quản lý'
}
]
*/


// PHẦN 2: Tạo bảng

// Bước 1: Tạo bảng:
/* Tạo bảng */
const table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('width', '100%');
table.setAttribute('cellSpacing', '0');
table.setAttribute('cellPadding', '10');


// Tạo phần header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['ID', 'Tên', 'Tuổi', 'Email', 'Chức vụ'] /* Các tiêu đề cột */
/* Tô màu cho hàng đầu tiên */
headerRow.style.backgroundColor = 'f5f5f5';

/* Duyệt từng đối tượng trong header -> Tạo các cột (th) trong hàng đầu tiên (tr) */
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
})

thead.appendChild(headerRow);
table.appendChild(thead);

// Tạo phần body

/* Tạo body */
const tbody = document.createElement('tbody');

// Thêm dữ liệu vào bảng
mergedData.forEach(person => {
    /* Thêm hàng */
    const row = document.createElement('tr');

    /* Thêm cột Id */
    const tdId = document.createElement('td');
    tdId.textContent = person.id;
    row.appendChild(tdId);

    /* Thêm cột Name */
    const tdName = document.createElement('td');
    tdName.textContent = person.name;
    row.appendChild(tdName);

    /* Thêm cột Age */
    const tdAge = document.createElement('td');
    tdAge.textContent = person.age;
    row.appendChild(tdAge);

    /* Thêm cột Email */
    const tdEmail = document.createElement('td');
    tdEmail.textContent = person.email;
    row.appendChild(tdEmail);

    /* Thêm cột Chức vụ */
    const tdPosition = document.createElement('td');
    tdPosition.textContent = person.position;
    row.appendChild(tdPosition);

    // Thêm các row (tr) vào trong tbody
    tbody.appendChild(row);
})

table.appendChild(tbody);

/* Thêm bảng vao container */
document.getElementById('tableContainer').appendChild(table);







