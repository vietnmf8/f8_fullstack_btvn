const users = [
    {id: 1, name: "An"},
    {id: 2, name: "Bình"},
    {id: 3, name: "Cường"}
];

const orders = [
    {id: 1, product: "Sách"},
    {id: 3, product: "Bút"},
    {id: 4, product: "Vở"}
];


// Giả sử join theo khoá chung là "id"
function hashJoin(arr1, arr2, key) {
    const hashTable = {}
    const result = []

    // Bước 1: Duyệt arr1 để xây bảng ánh xạ
    arr1.forEach(item => {      //item: {id: 1, name: "An"}
        hashTable[item[key]] = item;
    })

    // Bước 2: Duyệt arr2 và kiểm tra nếu có match trong hashTable
    arr2.forEach(item => {  // {id: 1, product: "Sách"}
        const matched = hashTable[item[key]];   //{id: 1, name: "An"}
        if (matched) {
            result.push({...matched, ...item})
        }
    });

    return result;
}

const result = hashJoin(users, orders, "id");
console.log(result);


