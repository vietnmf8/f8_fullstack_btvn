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

const headers = [
    {name: 'name', text: 'Name', align: 'center'},
    {name: 'team', text: 'Team', align: 'center'},
    {name: 'mon', text: 'Mon', align: 'center'},
    {name: 'tue', text: 'Tue', align: 'center'},
    {name: 'wed', text: 'Wed', align: 'center'},
    {name: 'thu', text: 'Thu', align: 'center'},
    {name: 'fri', text: 'Fri', align: 'center'},
]

// Gộp
employees.forEach(employee => {
    employee.team = teams.find(item => item.id === employee.teamId)?.name || 'fullday'
    employee.mon = absences.find(item => item.employeeId === employee.id && item.date === 'mon')?.time || 'fullday'
    employee.tue = absences.find(item => item.employeeId === employee.id && item.date === 'tue')?.time || 'fullday'
    employee.wed = absences.find(item => item.employeeId === employee.id && item.date === 'wed')?.time || 'fullday'
    employee.thu = absences.find(item => item.employeeId === employee.id && item.date === 'thu')?.time || 'fullday'
    employee.fri = absences.find(item => item.employeeId === employee.id && item.date === 'fri')?.time || 'fullday'
})

const employeeGroups = employees.map(employee => {
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
/*
employeeGroups = [
    {
        name: 'Nguyen Minh Viet',
        team: 'Reactjs',
        mon: '8:00-9:00',
        tue: '16:00-17:00',
        wed: 'fullday',
        thu: 'fullday',
        fri: 'fullday'
    },
    {
        name: 'Tran Thuy Quynh',
        team: 'Expressjs',
        mon: 'fullday',
        tue: 'fullday',
        wed: '11:00-12:00',
        thu: 'fullday',
        fri: 'fullday'
    },
    {
        name: 'Tran Cong Tin',
        team: 'Reactjs',
        mon: '8:00-9:00',
        tue: 'fullday',
        wed: 'fullday',
        thu: '11:00-12:00',
        fri: 'fullday'
    },
    {
        name: 'Nguyen Nam Tao',
        team: 'Expressjs',
        mon: 'fullday',
        tue: 'fullday',
        wed: 'fullday',
        thu: 'fullday',
        fri: 'fullday'
    },
    {
        name: 'Bui Kong Minh',
        team: 'Nestjs',
        mon: 'fullday',
        tue: 'fullday',
        wed: 'fullday',
        thu: 'fullday',
        fri: '9:00-11:00'
    }
]
 */

// Render table
function renderTable(employees) {
    // Tạo body

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''
    // Trong tbody có 5tr
    employees.forEach(employee => {
        const tr = document.createElement('tr');
        // Duyệt từng phần tử tạo td
        headers.forEach(header => {
            const td = document.createElement('td');

            if(employee[header.name] === 'fullday') {
                td.innerHTML = `
                    <span class="mdi mdi-office-building"></span>
                    <span>Full Day</span>
                `
            } else {
                td.innerHTML = `
                    <span class="mdi mdi-calendar-remove"></span>
                    <span>${employee[header.name]}</span>
                `
            }

            if (header.name === 'name') {
                td.innerHTML = employee.name;
            }
            if (header.name === 'team') {
                td.innerHTML = employee.team
            }

            // Append
            tr.appendChild(td);
        })
        // Append
        tbody.appendChild(tr);
    })

}

renderTable(employeeGroups)

// Xử lý ngan chặn XSS
function sanitizeInput(input) {
    return String(input)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Gọi ô input
const inputE = document.querySelector('.container input[name="search"]')

// Tạo sự kiện CLICK
inputE.addEventListener('input', (event) => {
    const searchStr = (sanitizeInput(event.target.value));
    console.log(searchStr);

    const filteredEmployees = employeeGroups.filter(employee => {
        return employee.name.toLowerCase().includes(searchStr.toLowerCase())
    })
    renderTable(filteredEmployees)
})