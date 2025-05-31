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

/* Muc tieu: Noi 2 mang voi nhau */
// Tao hashmap: Positions
const positionMap = {};
// Duyet tung phan tu trong positions
positions.forEach((pos) => {
    positionMap[pos.id] = pos.position;
})

// Tao mang moi  = bien doi mang goc
const mergedData = data.map((data) => {
    return {
        ...data,
        position: positionMap[data.id],
    }
})

/* Tao table */
// Truy cap the div.tableContent
const tableContent = document.querySelector('.tableContent');
// Tao the <table>
const table = document.createElement('table');
// Set Attribute
table.setAttribute('border', '1');
table.setAttribute('cellSpacing', '0');
table.setAttribute('cellpadding', '10');
table.setAttribute('width', '100%');
//Append
tableContent.appendChild(table);

/* Tao thead */
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const headers = [
    // text -> Ten hien thi
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'age', text: 'Tuoi'},
    {name: 'email', text: 'Email'},
    {name: 'position', text: 'Chuc vu'},
]
// Duyet qua tung phan tu trong header -> tao tieu de
headers.forEach((header) => {
    // Tao <th>
    const th = document.createElement('th');
    // Them noi dung vao the <th>
    th.innerText = header.text;
    // Append
    tr.appendChild(th);
})
// Append
thead.appendChild(tr);
table.appendChild(thead);

/* Tbody */
// Tao tbody
const tbody = document.createElement('tbody');
// Trong tbody co 3 <tr> tuong ung voi so luong phan tu trong mang mergedData
// Duyet tung phan tu trong mergedData
mergedData.forEach((data) => {
    const tr = document.createElement('tr');
    // Trong moi <tr> lai co 5 <td> tuong ung voi cac truong trong headers
    headers.forEach((header) => {
        const td = document.createElement('td');
        td.innerText = data[header.name];
        // Append
        tr.appendChild(td);
    })
    tbody.appendChild(tr);
})
table.appendChild(tbody);

