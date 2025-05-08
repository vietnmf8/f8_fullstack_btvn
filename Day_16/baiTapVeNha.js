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

/*
Kết quả:
[
//     {
//         id: 1,
//         name: "John Doe",
//         totalSpent: 3600,
//         products: [
//             { name: "Laptop", quantity: 3, totalSpent: 3600 },
//             { name: "Phone", quantity: 1, totalSpent: 800 },
//             { name: "Headphones", quantity: 3, totalSpent: 450 }
//         ]
//     },

    ...
]
 */
//------------------------------------------
/*
Phân tích đề bài:
1/ Gom nhóm đơn hàng theo khách hàng:
- Gom nhóm tất cả đơn hàng theo từng khách hàng

2/ Tính toán số lượng sản phẩm và tổng tiền
- Với mỗi khách hàng:
    + Tính tổng số tiền đã chi
    + Tổng số lượng từng loại sản phẩm

3/ Sắp xếp kết quả:
- Sắp xếp danh sách khách hàng theo TỔNG CHI TIÊU
- Sắp xếp sản phẩm của mỗi khách hàng theo TỔNG CHI TIÊU





So do:



                             ┌─────────────────────────────┐
                             │                             │
                             │   Khoi tao mang ket qua:    │
                             │                             │
                             │        result = []          │
                             │                             │
                             └─────────────┬───────────────┘
                                           │
                                           │
                                           ▼
                             ┌────────────────────────────┐
                             │                            │
                             │  Lap qua tung khac hang    │ ◄──────────────────────────┐
                             │                            │                            │
                             └─────────────┬──────────────┘                            │
                                           │                                           │
                          Con khach hang   │   Het khach hang                          │
                       ┌───────────────────┴────────────────────┐                      │
                       │                                        │                      │
                       │                                        │                      │
                       ▼                                        ▼                      │
             ┌────────────────────┐           ┌────────────────────────────────────┐   │
             │                    │           │                                    │   │
             │ Lay thong tin KH   │           │  Sap xep KH theo tong chi tieu     │   │
             │                    │           │  giam dan                          │   │
             └─────────┬──────────┘           │                                    │   │
                       │                      └────────────────┬───────────────────┘   │
                       │                                       │                       │
                       ▼                                       │                       │
            ┌──────────────────────┐                           ▼                       │
            │ Loc don hang cua KH  │          ┌────────────────────────────────────┐   │
            └──────────┬───────────┘          │                                    │   │
                       │                      │    In ra result                    │   │
                       │                      │                                    │   │
                       ▼                      └────────────────────────────────────┘   │
        ┌──────────────────────────────┐                                               │
        │                              │                                               │
        │  Tao doi tuong thong tin KH  │                                               │
        │                              │                                               │
        └──────────────┬───────────────┘                                               │
                       │                                                               │
                       │                                                               │
                       ▼                                                               │
        ┌────────────────────────────────────┐                                         │
        │                                    │                                         │
        │  Tinh tong chi tieu                │                                         │
        │  va cap nhat thong tin san pham    │                                         │
        │                                    │                                         │
        └───────────────┬────────────────────┘                                         │
                        │                                                              │
                        │                                                              │
                        ▼                                                              │
        ┌─────────────────────────────────┐                                            │
        │                                 │                                            │
        │  Gom nhom san pham theo loai    │                                            │
        │                                 │                                            │
        └──────────────┬──────────────────┘                                            │
                       │                                                               │
                       │                                                               │
                       ▼                                                               │
     ┌────────────────────────────────────────┐                                        │
     │                                        │                                        │
     │  Sap xep san pham theo tong chi tieu   │                                        │
     │                                        │                                        │
     └────────────────┬───────────────────────┘                                        │
                      │                                                                │
                      │                                                                │
                      ▼                                                                │
     ┌────────────────────────────────────────┐                                        │
     │                                        │                                        │
     │  Them thong tin KH vao result          │                                        │
     │                                        │ ───────────────────────────────────────┘
     │                                        │
     └────────────────────────────────────────┘





 */


function analyzeCustomerOrders(customers, products, orders) { // Start Function
    // Bước 1: Khởi tạo mảng kết quả:
    const result = [];

    // Bước 2: Xử lý từng khách hàng
    for (const customer of customers) {

        // Bước 3: Lọc các đơn hàng của khác hàng (customerOrders)
        const customerOrders = orders.filter(order => order.customerId === customer.id)

        // Bước 4: Tạo đối tượng thông tin khách hàng (customerInfo)
        const customerInfo = {
            id: customer.id,
            name: customer.name,
            totalSpent: 0,
            products: []
        }

        // Bước 5: Tạo đối tượng trung gian để gom nhóm sản phẩm
        const productMap = {};

        // Bước 6: Xử lý từng đơn hàng của khách hàng
        for (const order of customerOrders) {
            for (const item of order.items) {
                // Tìm thông tin sản phẩm
                const product = products.find(p => p.id === item.productId);

                // Tính tổng giá trị của mặt hàng trong đơn hàng
                const itemTotal = product.price * item.quantity;

                // Cập nhật tổng chi tiêu của khách hàng
                customerInfo.totalSpent += itemTotal;

                // Cập nhật thông tin sản phẩm trong productMap
                if (!productMap[product.id]) {
                    productMap[product.id] = {
                        name: product.name,
                        quantity: 0,
                        totalSpent: 0,
                    }
                }

                // Cộng dồn
                productMap[product.id].quantity += item.quantity;
                productMap[product.id].totalSpent += itemTotal;
            }
        }

        // Bước 7: Chuyển productMap thành mảng (Array) -> dễ sắp xếp
        for (const productId in productMap) {
            customerInfo.products.push(productMap[productId]);
        }

        // Bước 8: Sắp xếp sản phẩm theo tổng chi tiêu giảm dần
        customerInfo.products.sort((a, b) => b.totalSpent - a.totalSpent);

        // Bước 9: Thêm thông tin khách hàng vào kết quả
        result.push(customerInfo);

        // Bước 10: Sắp xếp khách hàng theo tổng chi tieu giảm dần
        result.sort((a, b) => b.totalSpent - a.totalSpent);

    }
    return result;
} // End function

const result = analyzeCustomerOrders(customers, products, orders);
console.log(result);