// Teams
const teams = [
    { id: 1, name: "Reactjs" },
    { id: 2, name: "Expressjs" },
    { id: 3, name: "Nestjs" }
];

// Employees
const employees = [
    { id: 1, name: "Nguyen Minh Viet", teamId: 1 },
    { id: 2, name: "Tran Thuy Quynh", teamId: 2 },
    { id: 3, name: "Tran Cong Tin", teamId: 1 },
    { id: 4, name: "Nguyen Nam Tao", teamId: 2 },
    { id: 5, name: "Bui Kong Minh", teamId: 3 }
];

// Absence Times
const absences = [
    { id: 1, employeeId: 1, date: "mon", time: "8:00-9:00" },
    { id: 2, employeeId: 1, date: "tue", time: "16:00-17:00" },
    { id: 3, employeeId: 3, date: "thu", time: "11:00-12:00" },
    { id: 4, employeeId: 2, date: "wed", time: "11:00-12:00" },
    { id: 5, employeeId: 5, date: "fri", time: "9:00-11:00" },
    { id: 6, employeeId: 3, date: "mon", time: "8:00-9:00" }
];

const absencesSort = absences.sort((a, b) => a.employeeId - b.employeeId);


/* Merge Join */
// Sắp xếp mảng teams theo id để sử dụng thuật toán Binary Search
teams.sort((a, b) => a.id - b.id);
function binarySearch(array, targetID) {
    let left = 0;
    let right = array.length - 1;

    //Bước 1: Tìm teamId (id của teams) = targetId (targetId = flower.teamId)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        //Bước 2: Kiểm tra mid, so sánh array[mid].id với targetId
        if (array[mid].id === targetID) {
            return array[mid];
        } else if (array[mid].id < targetID) {
            // id nhỏ hơn target -> duyệt tiếp bên phải
            left = mid + 1;
        } else { // id lớn hơn target -> tìm bên trái
            right = mid - 1;
        }
    }

    return null // Không tìm thấy
}
// Bước 2: Merge - duyệt các đối tượng trong employees, và tìm color trong teams tương ứng
const mergedEmployees = [];
employees.forEach(employee => {

    employee.team = teams.find(t => t.id === employee.teamId)?.name
    employee.mon = absences.find(a => a.employeeId === employee.id && a.date === 'mon')?.time || 'fullday'
    employee.tue = absences.find(a => a.employeeId === employee.id && a.date === 'tue')?.time || 'fullday'
    employee.wed = absences.find(a => a.employeeId === employee.id && a.date === 'wed')?.time || 'fullday'
    employee.thu = absences.find(a => a.employeeId === employee.id && a.date === 'thu')?.time || 'fullday'
    employee.fri = absences.find(a => a.employeeId === employee.id && a.date === 'fri')?.time || 'fullday'


})

// console.log(employees);
const employeeContent = employees.map(employee => {
    return {
        name: employee.name,
        team: employee.team,
        mon: employee.mon,
        tue: employee.tue,
        wed: employee.wed,
        thu: employee.thu,
        fri: employee.fri,
    }
})

const headers = [
    {name: 'name', text: 'Name'},
    {name: 'team', text: 'Team'},
    {name: 'mon', text: 'Mon'},
    {name: 'tue', text: 'Tue'},
    {name: 'wed', text: 'Wed'},
    {name: 'thu', text: 'Thu'},
    {name: 'fri', text: 'Fri'},
]

console.log(employeeContent)

// Render table
function renderTable(employees) {

// PHẦN 2: Xây dựng body
// Bước 1: Truy cập vào phần thử <tbody>
    const tableBodyE = document.querySelector('table tbody')
    tableBodyE.innerHTML = ''
    // Duyệt từng phần tử trong employees
    employees.forEach(employee => {
        /* Tạo đối tượng <tr> */
        const tr = document.createElement('tr');
        /* Duyệt từng đối tương trong header để tạo cột dựa trên các value của header */
        headers.forEach(header => {

            const td = document.createElement('td')
            const span = document.createElement('span')

            if (employee[header.name] === 'fullday') {
                td.innerHTML = `<span class ="mdi mdi-office-building"></span> <span>Full Day</span>`
            } else  {
                td.innerHTML = `<span class ="mdi mdi-calendar-remove"></span> <span>${employee[header.name]}</span>`
            }
            if (header.name === 'name') {
                td.innerHTML = employee.name
            }
            if (header.name === 'team') {
                td.innerHTML = employee.team
            }
            // const icon = document.createElement('span');
            // icon.classList.add('mdi','mdi-office-building')
            // tr.appendChild(icon)
            tr.appendChild(td)
        })
        tableBodyE.appendChild(tr)
    })
}

// Gọi hàm
renderTable(employeeContent)

// Xử lý ngăn chặn XSS
function sanitizeInput(input) {
    return String(input)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

console.log(employeeContent)



const inputE = document.querySelector('.container input[name="search"]')


inputE.addEventListener('input', event => {
    const searchStr = sanitizeInput(event.target.value)
    console.log(searchStr)
    if (!searchStr) {
        return renderTable(employeeContent)
    }
    // Lọc các nhan viên có tên chứa từ khoá tìm kiếm (không phân biệt hoa thường)
    const filteredEmployees = employeeContent.filter((employee) => {
        return employee.name.toLowerCase().includes(searchStr.toLowerCase())
    })
    renderTable(filteredEmployees)
})



