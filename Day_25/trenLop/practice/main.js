// Import class Employee
import {Employee} from "./employee.js";
import {Product} from "./product.js";

// Tạo mảng đối tượng mới
const employees = [];
// Tạo mảng sản phẩm mới
const products = [];

/* Employee */
// Function thêm employee vào mảng -> truyền vào Employee
const createEmployee = (id, name, address) => {
    employees.push(new Employee(id, name, address));
}
// Gọi hàm
createEmployee(1, 'Viet', 'Ha Noi');
// Hàm toString -> log ra đối tượng
for (const emp of employees) {
    console.log(emp.toString());
}

/* Product */
// Function thêm product
const createProduct = (id, name, price) => {
    products.push(new Product(id, name, price));
}
// Gọi hàm
createProduct(1, 'Banh Keo', 100);
// Hàm toString -> log ra đối tượng
for (const product of products) {
    console.log(product.toString());
}



