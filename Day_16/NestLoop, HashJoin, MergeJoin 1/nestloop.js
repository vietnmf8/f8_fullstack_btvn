const products = [
    {productId: 1, name: "iPhone 13", categoryId: 1, price: 20000000},
    {productId: 2, name: "Samsung Galaxy S21", categoryId: 1, price: 18000000},
    {productId: 3, name: "Macbook Pro", categoryId: 2, price: 35000000},
    {productId: 4, name: "AirPods Pro", categoryId: 3, price: 5000000}
];

// Dữ liệu danh mục
const categories = [
    {categoryId: 1, name: "Điện thoại"},
    {categoryId: 2, name: "Laptop"},
    {categoryId: 3, name: "Phụ kiện"},
    {categoryId: 4, name: "Đồng hồ"}
];


function nestedLoopJoin(arr1, arr2, key1 = "categoryId", key2 = "categoryId") {
    let results = [];

    // Vòng lặp ngoài - duyệt qua mảng thứ nhất
    arr1.forEach((productItem) => {
        // Vòng lặp trong - duyệt qua mảng thứ hai
        arr2.forEach((categoryItem) => {
            // Kiểm tra điều kiện kết hợp
            if (productItem[key1] === categoryItem[key2]) {
                // Ta đối tượng kết quả
                let resultItem = {};

                //Sao chép thuộc tính từ đối tượng đầu tiên
                for (let prop in productItem) {
                    resultItem[prop] = productItem[prop];
                }

                // Sao chép thuộc tính từ đối tượng thứ hai
                for (let prop in categoryItem) {
                    if (prop !== key2 || key2 !== key1) {
                        const propName = resultItem.hasOwnProperty(prop) ? `${key2}_${prop}` : prop;
                        resultItem[propName] = categoryItem[prop];
                    }
                }

                results.push(resultItem);
            }
        })
    })

    return results;
}

const result = nestedLoopJoin(products, categories);
console.log(result)

