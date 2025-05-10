const customers = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
]

const orders = [
    {id: 101, customerId: 1, total: 200},
    {id: 102, customerId: 2, total: 150},
    {id: 103, customerId: 1, total: 300},
    {id: 105, customerId: 2, total: 100},
]

//Kết quả
// [
//     {
//         id: 1,
//         name: "Alice",
//         order: [
//             {id: 101, customerId: 1, total: 200},
//             {id: 103, customerId: 1, total: 300},
//         ]
//
//     }
//
//         ...
//
// ]


for (const customer of customers) {
    const order = orders.filter(order => order.customerId === customer.id);

    const sortedOrder = order.sort((a, b) => a.total - b.total);
    customer.order = sortedOrder;
}

console.log(customers)

