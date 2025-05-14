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
];
const orders = [
    {id: 1, employeeId: 1, productId: 4, quantity: 1},
    {id: 2, employeeId: 2, productId: 2, quantity: 4},
    {id: 3, employeeId: 1, productId: 5, quantity: 1},
    {id: 4, employeeId: 3, productId: 1, quantity: 2},
    {id: 5, employeeId: 2, productId: 5, quantity: 3},
    {id: 6, employeeId: 4, productId: 1, quantity: 1},
    {id: 7, employeeId: 5, productId: 3, quantity: 2},
];

/* Bài 1: Lấy ra danh sách nhân viên đang làm việc -> status: 'working'
* Kết quả:
* // [
//     { id: 1, name: 'Alice', age: 23, status: 'working' },
//     { id: 2, name: 'Bob', age: 25, status: 'working' },
//     { id: 3, name: 'John', age: 27, status: 'working' },
//     { id: 5, name: 'Eve', age: 20, status: 'working' }
// ]
* */
const workingEmployees = employees.filter(employee => employee.status === 'working');


/* Bài 2: Lấy ra nhân viên lớn tuổi nhất
* { id: 3, name: 'John', age: 27, status: 'working' }
* */
// Bước 1: Giả sử gọi người lớn tuổi nhất là người đầu tiên trong mảng employees
let oldestEmployees = employees[0]
// Bước 2: Duyệt từng thành viên trong mảng employees
for (let employee of employees) {
    /*Nếu tuổi của thành viên đó lớn hơn tuổi của người lớn tuổi nhất*/
    if (employee.age > oldestEmployees.age) {
        /*Thì người lớn tuổi nhất chính là thành viên đó*/
        oldestEmployees = employee
    }
}

/* Bài 3: Lấy ra sản phẩm giá rẻ nhất
* Kết quả:
* { id: 4, name: 'PC', price: 800 }
* */
// Bước 1: Giả sử sản phẩm có giá rẻ nhất là sản phẩm đầu tiên trong mảng products
let cheapestProduct = products[0]
// Bước 2: Duyệt từng sản phẩm trong mảng products
for (let product of products) {
    /* Nếu sản phẩm đó có giá rẻ hơn (< hơn) sản phẩm có giá rẻ nhất*/
    if (product.price < cheapestProduct.price) {
        /* Thì sản phẩm có giá rẻ nhất chính là sản phẩm đó*/
        cheapestProduct = product
    }
}

/* Bài 4: Tìm ra sản phẩm bán chạy nhất (quantity nhiều nhất)
* Kỳ vọng:
* [
*   { id: 2, name: "Laptop", price: 3000  }
*   { id: 5, name: "Monitor", price: 1500  },
* ]
*  */
// Bước 1: - Gom các quantity về chung productId
// - Tính tổng quantity của mỗi sản phẩm (productId) từ mảng orders
/* Tạo một mảng đối tượng chỉ chứa số lượng của các sản phẩm -> hashMap*/
const productQuantities = {}    //{ '1': 3, '2': 4, '3': 2, '4': 1, '5': 4 }
/* Duyệt từng đối tượng trong mảng order  */
for (let order of orders) {
    /* Nếu trong mảng đối tượng chưa có key là order.productId */
    if (!productQuantities[order.productId]) {
        /* Thì ta có order.productId: 0 - lúc này value của order.productId = 0  */
        productQuantities[order.productId] = 0;
    }
    /* Cộng quantity vào từng productId */
    productQuantities[order.productId] += order.quantity;
}

// Bước 2: Tìm ra quantity lớn nhất
/* Giá sử sản phẩm có số lượng quantity lớn nhất là sản phẩm đầu tiên */
let maxQuantity = 0;    // 4
/* Duyệt qua từng key (productId) trong mảng đối tượng hashMap productQuantities */
for (let productId in productQuantities) {
    /* Nếu value của productId > maxQuantity  */
    if (productQuantities[productId] > maxQuantity) {
        /* Thì maxQuantity = productQuantities[productId] */
        maxQuantity = productQuantities[productId]
    }
}

// Bước 3: Lọc ra các sản phẩm có quantity bằng với quantity lớn nhất
/* Tạo một mảng chứa các đối tượng là các sản phẩm có quantity nhỏ nhất */
const bestSellingProducts = [];
/* Duyệt từng key trong mảng đối tượng productQuantities */
for (let productId in productQuantities) {
    /* Nếu trong mảng đối tượng key có value = maxQuantity*/
    if (productQuantities[productId] === maxQuantity) {
        /* Thì lại duyệt từng đối tượng trong mảng products để ánh xạ */
        for (let product of products) {
            /* Nếu trong mỗi đối tượng có id = key của mảng đối tượng productQuantities */
            if (product.id === parseInt(productId)) {
                /* Thì sẽ thêm đối tượng đó và mảng bestSellingProducts */
                bestSellingProducts.push(product);
                /* Đồng thời thoát vòng lặp vì id chỉ có duy nhất, không cần duyệt hết nữa */
                break;
            }
        }
    }
}


/*  Câu 5: Tìm ra sản phẩm có doanh thu cao nhất
* Kỳ vọng:
* { id: 2, name: "Laptop", price: 3000  }
*  */

// Bước 1: Tính doanh thu cho từng sản phẩm
/* Tạo một mảng đối tượng {} chứa doanh thu của từng sản phẩm -> hashMap */
const productRevenues = {};     //{ '1': 3600, '2': 12000, '3': 4000, '4': 800, '5': 6000 }
/* Duyệt từng đối tượng trong orders */
for (let order of orders) {
    /* Nếu key (productId) chưa có trong hashMap productRevenues */
    if (!productRevenues[order.productId]) {
        /* Thì value = 0 */
        productRevenues[order.productId] = 0;
    }

    /* Tìm giá của sản phẩm từ mảng products */
    /* Giả sử giá ban đầu của sản phẩm = 0 */
    let productPrice = 0; // 800 3000 1500 1200 1500 1200 2000
    /* Duyệt từng đối tượng trong mảng products */
    for (let product of products) {
        /* Nếu id = productId */
        if (product.id === order.productId) {
            productPrice = product.price;
            break;
        }
    }

    /* Tính doanh thu = số lượng * giá */
    productRevenues[order.productId] += (order.quantity * productPrice);
}

// Bước 2: Tìm doanh thu cao nhất và productId tương ứng
/* Giả sử doanh thu lớn nhất = 0, và key (productId) có doanh thu lớn nhất, ban đầu = 0 */
let maxRevenue = 0;     // 12000
let bestProductId = 0;  // 2
/* Duyệt qua các key trong đối tượng productRevenues */
for (let productId in productRevenues) {
    /* Nếu value > maxRevenue */
    if (productRevenues[productId] > maxRevenue) {
        /* Thì maxRevenue chính là value của key đó */
        maxRevenue = productRevenues[productId];
        /* Đồng thời bestProductId cũng sẽ chính là key đó */
        bestProductId = productId
    }
}


// Bước 3: Tìm thông tin chi tiết của sản phẩm có doanh thu cao nhất
/* Giả sử sản phẩm có doanh thu cao nhất = 0 */
let bestSellingProduct = 0;
/* Duyệt qua từng đối tượng trong mảng products */
for (let product of products) {
    /* Nếu id mà trùng với key trong bestProductId (hashMap productRevenues) */
    if (product.id === parseInt(bestProductId)) {
        bestSellingProduct = product;
        break;
    }
}

/* Câu 6: Tìm ra nhân viên bán nhiều hàng nhất (quantity nhiều nhất)
* Kỳ vọng:
* { id: 2, name: 'Bob', age: 25, status: 'working' }

* */
// Bước 1: Tính tổng quantity cho từng nhân viên
/* Gọi {} chứa tổng số lượng sản phẩm của từng nhân viên */
const employeeQuantities = {}       //{ '1': 2, '2': 7, '3': 2, '4': 1, '5': 2 }
/* Duyệt từng đối tượng trong mảng orders */
for (let order of orders) {
    /* Nếu key (order.employeeId) chưa có trong {} */
    if (!employeeQuantities[order.employeeId]) {
        /* Thêm key với value (quantity) = 0 */
        employeeQuantities[order.employeeId] = 0;
    }
    /* Cộng quantity cho từng nhân viên */
    employeeQuantities[order.employeeId] += order.quantity;
}

// Bước 2: Tìm quantity lớn nhất và employeeId tương ứng
/* Giả sử quantity lớn nhất = 0 (value) và nhân viên bán được nhiều hàng nhất cũng = 0 (key) */
let highestSalesQuantity = 0;   //7
let topEmployeeId = 0;  //2
/* Duyệt qua từng key trong mảng đối tượng {} */
for (let empId in employeeQuantities) {
    if (employeeQuantities[empId] > highestSalesQuantity) {
        highestSalesQuantity = employeeQuantities[empId];
        topEmployeeId = parseInt(empId)
    }
}

// Bước 3: Tìm thông tin chi tiết của nhân viên bán nhiều han nhất
/* Giả sử nhân viên bán được nhiều hàng nhất là 0 */
let topEmployee = 0;
for (let employee of employees) {
    if (employee.id === topEmployeeId) {
        topEmployee = employee;
        break;
    }
}


/*Câu 7: Tìm ra nhân viên có doanh thu cao nhất
* Kỳ vọng:
* { id: 2, name: 'Bob', age: 25, status: 'working' }
* */

// Bước 1: Tính tổng doanh thu cho từng nhân viên
/* Tạo {} chứa doanh thu của từng nhân viên */
const employeeRevenues = {};    // { '1': 2300, '2': 16500, '3': 2400, '4': 1200, '5': 4000 }
for (let order of orders) {
    if (!employeeRevenues[order.employeeId]) {
        employeeRevenues[order.employeeId] = 0;
    }

    /* Tìm giá của sản phẩm */
    let productPrice = 0;
    for (let product of products) {
        if (product.id === order.productId) {
            productPrice = product.price;
            break;
        }
    }

    /* Tính doanh thu = số lượng * giá */
    employeeRevenues[order.employeeId] += (order.quantity * productPrice);
}

// Bước 2: Tìm doanh thu cao nhất và employeeId tương ứng
/* Giả sử doanh thu cao nhất = 0, và nhân viên có doanh thu cao nhất = 0 */
let highestRevenue = 0; // 16500
let topRevenueEmployeeId = 0;   // 2
/* Duyệt qua từng key trong {} */
for (let empId in employeeRevenues) {
    if (employeeRevenues[empId] > highestRevenue) {
        highestRevenue = employeeRevenues[empId];
        topRevenueEmployeeId = parseInt(empId);
    }
}


// Bước 3: Tìm thông tin chi tiết của nhân viên có doanh thu cao nhất
/* Giả sử nhân viên có doanh thu cao nhất = 0 */
let topRevenueEmployee = 0;
for (let employee of employees) {
    if (employee.id === topRevenueEmployeeId) {
        topRevenueEmployee = employee;
        break;
    }
}


/* Câu 8: Tìm ra sản phẩm có doanh thu cao nhất của mỗi nhân viên
* Kỳ vọng:
* [
  {
    employee: { id: 1, name: 'Alice', age: 23, status: 'working' },
    topProduct: { id: 5, name: 'Monitor', price: 1500 },
    revenue: 1500
  },
  {
    employee: { id: 2, name: 'Bob', age: 25, status: 'working' },
    topProduct: { id: 2, name: 'Laptop', price: 3000 },
    revenue: 12000
  },
  {
    employee: { id: 3, name: 'John', age: 27, status: 'working' },
    topProduct: { id: 1, name: 'Phone', price: 1200 },
    revenue: 2400
  },
  {
    employee: { id: 4, name: 'David', age: 23, status: 'quited' },
    topProduct: { id: 1, name: 'Phone', price: 1200 },
    revenue: 1200
  },
  {
    employee: { id: 5, name: 'Eve', age: 20, status: 'working' },
    topProduct: { id: 3, name: 'Tab', price: 2000 },
    revenue: 4000
  }
]

*  */
// Bước 1: Tính doanh thu cho từng cặp -> nhân viên - sản phẩm
/* Tạo một mảng đối tượng để chứa doanh thu sản phẩm của từng nhân viên */
const employeeProductRevenues = {};
//{
//   '1-4': 800,
//   '2-2': 12000,
//   '1-5': 1500,
//   '3-1': 2400,
//   '2-5': 4500,
//   '4-1': 1200,
//   '5-3': 4000
// }
/* Duyệt từng đối tượng trong orders */
for (let order of orders) {
    /* Đặt key là cặp employeeId - productId */
    const key = `${order.employeeId}-${order.productId}`;   // 1-4  2-2  1-5  3-1  2-5  4-1  5-3
    if (!employeeProductRevenues[key]) {
        employeeProductRevenues[key] = 0;
    }

    /* Tìm giá sản phẩm */
    let productPrice = 0;   // 800 3000 1500 1200 1500 1200 2000
    for (let product of products) {
        if (product.id === order.productId) {
            productPrice = product.price;
            break;
        }
    }

    /* Cộng doanh thu */
    employeeProductRevenues[key] += (order.quantity * productPrice);
}

// Bước 2: Tìm sản phẩm có doanh thu cao nhất cho mỗi nhân viên
const topProductByEmployee = {};    // 'employeeId': productId  ->  { '1': 5, '2': 2, '3': 1, '4': 1, '5': 3 }
/* Duyệt qua các key trong mảng hashMap ở bước 1 */
for (let key in employeeProductRevenues) {
    /* Lưu 2 biến employeeId, productId (Destructuring)
    * - split -> biến chuỗi thành mảng dựa trên "dấu phân cách"
    * - map(Number) -> Tạo map biến đổi từ string về number
    * */
    const [employeeId, productId] = key.split('-').map(Number);
    /* Nếu key chưa tồn tại || value của key sau > value của key có sẵn -> ghi đè */
    if (!topProductByEmployee[employeeId] || employeeProductRevenues[key] > employeeProductRevenues[`${employeeId}-${topProductByEmployee[employeeId]}`]) {
        topProductByEmployee[employeeId] = productId
    }
}

// Bước 3: Lấy thông tin chi tiết của nhân viên và sản phẩm có doanh thu cao nhất của họ
/* Tạo mảng kết quả */
const result = [];
/* Duyệt từng key trong hashMap doanh thu cao nhất của mỗi nhân viên */
for (let employeeId in topProductByEmployee) {
    /* Lấy ra employeeId và productId */
    const productId = topProductByEmployee[employeeId];

    /* Tìm thông tin nhân viên */
    let employee = 0;
    /* Duyệt từng đối tượng trong mảng employees  */
    for (let emp of employees) {
        if (emp.id === Number(employeeId)) {
            employee = emp;
            break;
        }
    }

    /* Tìm thông tin sản phẩm */
    let product = 0;
    for (let prod of products) {
        if (prod.id === productId) {
            product = prod;
        }
    }

    /* Tìm doanh thu */
    const revenue = employeeProductRevenues[`${employeeId}-${productId}`];

    result.push({
        employee: employee,
        topProduct: product,
        revenue: revenue,
    });
}


/* Câu 9: Giả sử nhân viên sẽ được nhận hoa hồng là 3%. Tìm hoa hồng cho mỗi nhân viên
* * Kết quả:
[
  {
    employee: { id: 1, name: "Alice", age: 23, status: 'working' },
    totalRevenue: 2300,
    commission: 69
  },
  {
    employee: { id: 2, name: "Bob", age: 25, status: 'working' },
    totalRevenue: 16500,
    commission: 495
  },
  {
    employee: { id: 3, name: "John", age: 27, status: 'working' },
    totalRevenue: 2400,
    commission: 72
  },
  {
    employee: { id: 4, name: "David", age: 23, status: 'quited' },
    totalRevenue: 1200,
    commission: 36
  },
  {
    employee: { id: 5, name: "Eve", age: 20, status: 'working' },
    totalRevenue: 4000,
    commission: 120
  }
]
*/

// Bước 1: Tính tổng doanh thu cho từng nhân viên
// Ta có employeeRevenues {} chứa tổng doanh thu của từng nhân viên (lấy từ câu 7)
//  { '1': 2300, '2': 16500, '3': 2400, '4': 1200, '5': 4000 }

// Bước 2: Tính hoa hồng 3% cho mỗi nhân viên và lấy thông tin chi tiết
const commissionResults = []
for (let employeeId in employeeRevenues) {
    /* Tìm thông tin nhân viên */
    let employee = 0;
    for (let emp of employees) {
        if (emp.id === Number(employeeId)) {
            employee = emp;
            break;
        }
    }

    /* Tính hoa hồng 3% của tổng doanh thu */
    const totalRevenue = employeeRevenues[employeeId];
    const commission = totalRevenue * 0.03;

    commissionResults.push({
        employee: employee,
        totalRevenue: totalRevenue,
        commission: commission,
    })
}


/*Câu 10: Sắp xếp nhân viên theo thứ tự giảm dần theo doanh thu
* [
  {
    employee: { id: 4, name: 'David', age: 23, status: 'quited' },
    revenue: 1200
  },
  {
    employee: { id: 1, name: 'Alice', age: 23, status: 'working' },
    revenue: 2300
  },
  {
    employee: { id: 3, name: 'John', age: 27, status: 'working' },
    revenue: 2400
  },
  {
    employee: { id: 5, name: 'Eve', age: 20, status: 'working' },
    revenue: 4000
  },
  {
    employee: { id: 2, name: 'Bob', age: 25, status: 'working' },
    revenue: 16500
  }
]

* */

// Cách 1: Dùng sort
// /* DeepCopy để không làm thay đổi mảng gốc */
// const sortedEmployeesByRevenue = [...employees];
//
// sortedEmployeesByRevenue.sort((employeeA, employeeB) => {
//     const revenueA = employeeRevenues[employeeA.id]
//     const revenueB = employeeRevenues[employeeB.id]
//     return revenueB - revenueA
// });

// Cách 2:
// Tận dụng employeeRevenues câu 7
// Bước 1: Tạo mảng chứa thông tin nhân viên và doanh thu
// { '1': 2300, '2': 16500, '3': 2400, '4': 1200, '5': 4000 }
const employeesWithRevenue = [];
for (let employeeId in employeeRevenues) {
    /* Tìm thông tin nhân viên */
    let employee = 0;
    for (let emp of employees) {
        if (emp.id === Number(employeeId)) {
            employee = emp;
            break;
        }
    }

    /* Thêm nhân viên cùng với doanh thu vào mảng */
    employeesWithRevenue.push({
        employee: employee,
        revenue: employeeRevenues[employeeId]
    })
}

// Bước 2: Sắp xếp mảng theo doanh thu giảm dần
for (let i = 0; i < employeesWithRevenue.length - 1; i++) {
    for (let j = i + 1; j < employeesWithRevenue.length; j++) {
        if (employeesWithRevenue[i].revenue > employeesWithRevenue[j].revenue) {
            /* Hoán đổi vị trí */
            // [employeesWithRevenue[i], employeesWithRevenue[j]] = [employeesWithRevenue[j], employeesWithRevenue[i]];
            const temp = employeesWithRevenue[i];
            employeesWithRevenue[i] = employeesWithRevenue[j];
            employeesWithRevenue[j] = temp;
        }
    }
}

