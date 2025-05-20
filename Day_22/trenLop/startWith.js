const employees = [
    {id: 1, name: 'Tran Pham Tin', address: 'Hoai Duc - Ha Noi', age: 27},
    {id: 2, name: 'Pham Nguyen Bac', address: 'Co Nhue - Ha Noi', age: 27},
    {id: 3, name: 'Nguyen Nam Tao', address: 'Soc Son - Ha Noi', age: 27},
    {id: 5, name: 'Tran Nguyen Tri Trinh', address: 'Co Nhue - Ha Noi', age: 27},
]
// Gọi chuỗi cần tìm
const searchStr = "Nguyen"

// Lọc ra nhân viên có tên bao gồm chữ "Nguyen"
const filteredEmployee = employees.filter((employee) => {
    return employee.name.includes(searchStr)
})
// Gọi 2 mảng nhân viên, mảng thứ nhất có tên nhân viên bắt đầu bằng "Nguyen", mảng thứ 2 là các tên còn lại
const topEmployees = [];
const bottomEmployees = [];

// Trong mảng nhân viên được lọc, kiểm tra xem các nhân viên đó có tên bắt đầu băn "Nguyen" không?
filteredEmployee.forEach((employee) => {
    if (employee.name.startsWith(searchStr)) {
        topEmployees.push(employee);
    } else {
        bottomEmployees.push(employee);
    }
})

console.log([...topEmployees, ...bottomEmployees])


//Nối 2 mảng đó thành 1 -> dùng...
