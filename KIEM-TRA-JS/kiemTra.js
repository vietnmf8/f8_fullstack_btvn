const employees = [
    {id: 1, name: "Alice", age: 23, status: 'working'},
    {id: 2, name: "Bob", age: 25, status: 'working'},
    {id: 3, name: "John", age: 27, status: 'working'},
    {id: 4, name: "David", age: 23, status: 'quited'},
    {id: 5, name: "Eve", age: 20, status: 'working'},
];


const products = [
    {id: 1, name: "Phone", price: 1200},
    {id: 2, name: "Laptop", price: 3000},
    {id: 3, name: "Tab", price: 2000},
    {id: 4, name: "PC", price: 800},
    {id: 5, name: "Monitor", price: 1500},
]


const orders = [
    {id: 1, employeeId: 1, productId: 4, quantity: 1},
    {id: 2, employeeId: 2, productId: 2, quantity: 4},
    {id: 3, employeeId: 1, productId: 5, quantity: 1},
    {id: 4, employeeId: 3, productId: 1, quantity: 2},
    {id: 5, employeeId: 2, productId: 5, quantity: 3},
    {id: 6, employeeId: 4, productId: 1, quantity: 1},
    {id: 7, employeeId: 5, productId: 3, quantity: 2},
];

//Tạo hàm tìm số LỚN NHẤT trong mảng
function getMaxNumber(array) {
    let max = array[0];
    let maxIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            maxIndex = i;
        }
    }
    return max;
}

// Tạo hàm tím số NHỎ NHẤT trong mảng
function getMinNumber(array) {
    let min = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        }
    }
    return min;
}

// Tao hàm tính tổng các phần tử trong mảng
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

/*-----------------------------------------------------------------------*/

/*
Bài 1: Lấy ra danh sách nhân viên làm việc -> dựa vào status

Đáp án:
// { id: 1, name: 'Alice', age: 23, status: 'working' }
// { id: 1, name: 'Alice', age: 23, status: 'working' }
// { id: 1, name: 'Alice', age: 23, status: 'working' }
// { id: 1, name: 'Alice', age: 23, status: 'working' }
// { id: 1, name: 'Alice', age: 23, status: 'working' }

 */
for (const employee of employees) {
    const workingEmployees = employees.find((employee) => employee.status === 'working');
}

/*
Bài 2: Lấy ra nhân viên lớn tuổi nhất

Kết quả:
{ id: 3, name: 'John', age: 27, status: 'working' }
 */
const ageOfEmployee = employees.map((employee) => employee.age);
const oldestEmployee = employees.find((employee) => employee.age === getMaxNumber(ageOfEmployee))


/* Bài 3: Lấy ra sản phẩm giá rẻ nhất

Kết quả:
{ id: 4, name: 'PC', price: 800 }
 */
const priceOfProducts = products.map((product) => product.price);
const cheapestProduct = products.find((product) => product.price === getMinNumber(priceOfProducts))


/* Bài 4: Tìm ra sản phẩm bán chạy nhất
[
  { id: 2, name: 'Laptop', price: 3000, quantity: 4 },
  { id: 5, name: 'Monitor', price: 1500, quantity: 4 }
]


 */
//Duyệt từng đối tượng trong mảng products
for (const product of products) {
    const productId = product.id;
    // Lọc các orderProducts với điều kiện order.productId = product.id
    const orderProducts = orders.filter((order) => order.productId === productId);
    // Lấy ra số lượng của mỗi sản phẩm
    const orderProductsQuantity = orderProducts.map((orderProduct) => orderProduct.quantity);
    // Tính tổng số lượng của mỗi sản phẩm
    // Nối quantity vào product
    product.quantity = sumArray(orderProductsQuantity); // Tổng số lượng sản phâẩm
    // Lọc ra các sản phẩm có số lượng lớn nhất
}
// Lấy ra quantity
const sellingProducts = products.map((product) => product.quantity);
// Tìm ra sản phẩm có quantity nhiều nhat
const bestSellingProduct = products.filter((product) => product.quantity === getMaxNumber(sellingProducts))


/* Bài 5: Tìm ra sản phẩm có doanh thu cao nhất

 */
const revenue = products.map((product) => product.price * product.quantity);
const highRevenueProduct = products.find((product) => product.price * product.quantity === getMaxNumber(revenue))


/*
Bài 6: Tìm ra nhân viên ban nhiều hàng nhất
Đáp án:
[
  { id: 2, name: 'Bob', age: 25, status: 'working' },
  { id: 5, name: 'Eve', age: 20, status: 'working' }
]

 */
// Tạo mảng chứa các nhân viên bán được nhiều hàng nhất
const bestSellingPeoples = [];
// Tìm các nhân viên bán được nhiều nhất và thêm vào mảng chứa
for (const item of bestSellingProduct) {
    const bestSellingPeople = employees.find((employee) => employee.id === item.id)
    bestSellingPeoples.push(bestSellingPeople);
}

/* Bài 7: Tìm ra nhân viên có doanh thu cao nhất

Đáp an:
{ id: 2, name: 'Bob', age: 25, status: 'working' }

 */
const bestRevenueEmployee = employees.find((employee) => employee.id === highRevenueProduct.id)


/* Bài 4: Tìm ra sản phẩm bán chạy nhất
[
  { id: 2, name: 'Laptop', price: 3000, quantity: 4 },
  { id: 5, name: 'Monitor', price: 1500, quantity: 4 }
]


 */
//Duyệt từng đối tượng trong mảng products
for (const product of products) {
    product.totalSpent = product.quantity * product.price;
}


/*
Bài 10: Sắp xếp nhân viên theo thứ tự giảm dần theo doanh thu
Kết quả:
[
  {
    id: 2,
    name: 'Laptop',
    price: 3000,
    quantity: 4,
    totalSpent: 12000
  },
  {
    id: 5,
    name: 'Monitor',
    price: 1500,
    quantity: 4,
    totalSpent: 6000
  },
  { id: 3, name: 'Tab', price: 2000, quantity: 2, totalSpent: 4000 },
  { id: 1, name: 'Phone', price: 1200, quantity: 3, totalSpent: 3600 },
  { id: 4, name: 'PC', price: 800, quantity: 1, totalSpent: 800 }
]

 */
const revenueEmployee = products.sort((a, b) => b.totalSpent - a.totalSpent);


/* Bài 9
* Kết quả:
*
* */
for (const product of products) {
    product.bonusTotalSpent = product.totalSpent * 0.03;
}










