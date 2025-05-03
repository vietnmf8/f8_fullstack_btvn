const customers = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Smith"},
    {id: 3, name: "Alice Johnson"},
    {id: 4, name: "Bob Brown"},
    {id: 5, name: "Charlie Green"},
];

const products = [
    {id: 101, name: "Laptop", price: 1200},
    {id: 102, name: "Phone", price: 800},
    {id: 103, name: "Tablet", price: 500},
    {id: 104, name: "Smartwatch", price: 300},
    {id: 105, name: "Headphones", price: 150},
];

const orders = [
    {id: 1001, customerId: 1, items: [{productId: 101, quantity: 2}, {productId: 102, quantity: 1}]},
    {id: 1002, customerId: 2, items: [{productId: 102, quantity: 1}, {productId: 103, quantity: 3}]},
    {id: 1003, customerId: 3, items: [{productId: 104, quantity: 5}, {productId: 105, quantity: 2}]},
    {id: 1004, customerId: 4, items: [{productId: 101, quantity: 1}, {productId: 103, quantity: 2}]},
    {id: 1005, customerId: 5, items: [{productId: 105, quantity: 10}]},
    {id: 1006, customerId: 1, items: [{productId: 101, quantity: 1}, {productId: 105, quantity: 3}]},
    {id: 1007, customerId: 2, items: [{productId: 104, quantity: 2}, {productId: 103, quantity: 1}]},
    {id: 1008, customerId: 3, items: [{productId: 102, quantity: 2}]},
    {id: 1009, customerId: 4, items: [{productId: 101, quantity: 1}, {productId: 102, quantity: 1}]},
    {id: 1010, customerId: 5, items: [{productId: 103, quantity: 4}, {productId: 104, quantity: 3}]},
];
// Phân tích đề bai:
/*
1/ Tính tổng giá trị đơn hàng của từng customer
2/ Trong mỗi customer, thống kê và sắp xếp các sản phẩm đã mua theo tổng giá trị giảm dần
3/ Sắp xếp danh sách customer theo tổng chi tiêu giảm dần


So do:

             ┌────────────────────────────────────────────┐
             │                                            │
             │  Tao productMap tu productId trong orders  │
             │ ─────────────────────────────────────────  │
             │                                            │
             │     Tao productMap = {                     │
             │       productId: {name, price}             │
             │     }                                      │
             │                                            │
             └───────────────────────┬────────────────────┘
                                     │
                                     │
                                     │
                                     ▼
                ┌─────────────────────────────────────┐
                │                                     │
                │  Lap order trong orders             │
                │  Join customer.id - customerId      │
                │                                     │
                └───────────────────┬─────────────────┘
                                    │
                                    │
                                    │
                                    ▼
                ┌─────────────────────────────────────┐
                │                                     │
                │   Lap item trong order.items        │
                │   Lay name, price tu productMap     │
                │                                     │
                └──────────────────┬──────────────────┘
                                   │
                                   │
                                   │
                                   │
                                   │
                                   ▼
      ┌─────────────────────────────────────────────────────────┐
      │                                                         │
      │   Cong don quantity va totalSpent                       │
      │   ->  customerMap[customerId].products[productId]       │
      │                                                         │
      │   Cong don tong chi tieu cua khach hang                 │
      │   ->  customerMap[customerId]                           │
      │                                                         │
      └───────────────────────────┬─────────────────────────────┘
                                  │
                                  │
                                  │
                                  ▼
              ┌──────────────────────────────────────┐
              │                                      │
              │      Chuyen tu Object -> Array       │
              │                                      │
              │                                      │
              │      Object.Values                   │
              │                                      │
              │                                      │
              └──────────────────┬───────────────────┘
                                 │
                                 │
                                 │
                                 │
                                 ▼
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  Sort customer theo tong totalspent giam dan         │
  │  Sort san pham cua customer theo totalspent giam dan │
  │                                                      │
  └──────────────────────────────────────────────────────┘






 */

//*******************************************************************************************************
// Yêu cầu 1: Tính tổng giá trị đơn hàng của từng customer

// Bước 1: Tạo productMap để tra giá và tên theo productId
const productMap = {};
for (const product of products) {
    productMap[product.id] = {
        name: product.name,
        price: product.price,
    };
}

/*
productMap = {
  '101': { name: 'Laptop', price: 1200 },
  '102': { name: 'Phone', price: 800 },
  '103': { name: 'Tablet', price: 500 },
  '104': { name: 'Smartwatch', price: 300 },
  '105': { name: 'Headphones', price: 150 }
}
 */

//--------------------------------------------------------

// Bước 2: Tạo customerMap để gom dữ liệu theo customerId
const customerMap = {};
for (const order of orders) {
    const customerId = order.customerId;    // 1  2  3  4  5
    if (!customerMap[customerId]) {
        const customerInfo = customers.find(customer => customer.id === customerId);
        // customerInfo = { id: 1, name: 'John Doe' }
        customerMap[customerId] = {
            id: customerInfo.id,
            name: customerInfo.name,
            totalSpent: 0,
            products: {},
        }
    }
    /*
    customerMap = {
      '1': { id: 1, name: 'John Doe', totalSpent: 0, products: {} },
      '2': { id: 2, name: 'Jane Smith', totalSpent: 0, products: {} },
      '3': { id: 3, name: 'Alice Johnson', totalSpent: 0, products: {} },
      '4': { id: 4, name: 'Bob Brown', totalSpent: 0, products: {} },
      '5': { id: 5, name: 'Charlie Green', totalSpent: 0, products: {} }
    }
    */

    for (const item of order.items) {
        const {productId, quantity} = item; //{ productId: 101, quantity: 2 }
        // tương đương với: productId === 101; quantity === 2
        // tương đương với cú pháp:
        // productId = item.productId
        // quantity = item.quantity
        const productInfo = productMap[productId];      //{ name: 'Laptop', price: 1200 }
        const cost = quantity * productInfo.price;      //2400...

        if (!customerMap[customerId].products[productId]) {
            customerMap[customerId].products[productId] = {
                name: productInfo.name,
                quantity: 0,
                totalSpent: 0,
            }
        }

        customerMap[customerId].products[productId].quantity += quantity;
        customerMap[customerId].products[productId].totalSpent += cost;
        customerMap[customerId].totalSpent += cost;
    }
}
/*
customerMap = {

    1: {
        id: 1,
        name: 'John Doe',
        totalSpent: 4850,
        products: {
            101: { name: 'Laptop', quantity: 3, totalSpent: 3600 },
            102: { name: 'Phone', quantity: 1, totalSpent: 800 },
            105: { name: 'Headphones', quantity: 3, totalSpent: 450 }
        }
    },

...
}
*/ //customerMap sau khi nối với orders và products


//--------------------------------------------------------
// Bước 3: Chuyển customerMap sang mảng để sort
// Object.values -> trả ra một mảng chứa các value

/* Object.values(customerMap) = [
     {
        id: 1,
        name: 'John Doe',
        totalSpent: 4850,
        products: {
            101: { name: 'Laptop', quantity: 3, totalSpent: 3600 },
            102: { name: 'Phone', quantity: 1, totalSpent: 800 },
            105: { name: 'Headphones', quantity: 3, totalSpent: 450 }
    },
...
]
 */


const result = Object.values(customerMap).map(customer => {
    // Chuyển product từ Object -> Array và sort giảm dần theo tổng chi tiêu

    // Object.values(customer.products) -> [ { name: 'Laptop', quantity: 3, totalSpent: 3600 },...]
    const sortedProducts = Object.values(customer.products).sort((a, b) => b.totalSpent - a.totalSpent);
    // sortedProducts -> [ { name: 'Laptop', quantity: 3, totalSpent: 3600 },...] đã được sắp xếp

    return {
        ...customer,
        products: sortedProducts,
    }
})


//--------------------------------------------------------
// Bước 4: Sort danh sách customer theo tổng chi tiêu giảm dần
result.sort((a, b) => b.totalSpent - a.totalSpent);

console.log(result)