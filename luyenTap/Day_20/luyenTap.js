/* Su dung "Create Element" trong DOM */

/* Buoc 1: Tao mang du lieu */
// Mang Header - Tieu de tung cot cua table
const headers = [
    {name: 'id', text: 'Id'},
    {name: 'name', text: 'Ten'},
    {name: 'address', text: 'Dia chi'},
    {name: 'age', text: 'Tuoi'}
]

// Mang danh sach nhan vien
const employees = [
    {id: 1, name: 'Pham Cong Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Nguyen Nam Tao', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 1, name: 'Pham Xuan Bac', address: 'Hoai Duc - Ha Noi', age: 27},
]

/* Buoc 2: Tao table */

/* Thead */
// Truy cap the <tr> trong <thead>
const tr = document.querySelector('table thead tr')
// Duyet tung doi tuong trong mang headers
headers.forEach((header) => {
    // Tao the <th> dua tren mang headers
    const th = document.createElement('th')
    // Tao noi dung trong the <th>
    th.innerText = header.text
    // Append vao the <tr>
    tr.appendChild(th)
})

/* Tbody */
// Truy cap the <tbody>
const tbody = document.querySelector('tbody')
// Tao 3 the <tr> tuong ung voi 3 employee
employees.forEach((employee) => {
    const tr = document.createElement('tr')
    // Trong moi hang lai co 4 cot <td> dua theo headers
    headers.forEach((header) => {
        const td = document.createElement('td')
        // Them noi dung vao the <td>
        td.innerText = employee[header.name]
        // Append <td> vao <tr>
        tr.appendChild(td)
    })
    tbody.appendChild(tr)
})









