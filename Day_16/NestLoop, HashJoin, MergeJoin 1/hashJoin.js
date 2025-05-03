// Dữ liệu người dùng
const users = [
    {id: 1, name: "Nguyễn Văn A"},
    {id: 2, name: "Trần Thị B"},
    {id: 3, name: "Lê Văn C"}
];

// Dữ liệu đơn hàng
const orders = [
    {orderId: 101, userId: 1, product: "Laptop"},
    {orderId: 102, userId: 2, product: "Điện thoại"},
    {orderId: 103, userId: 1, product: "Tai nghe"},
    {orderId: 104, userId: 4, product: "Bàn phím"}
];

function hashJoin(arr1, arr2, key1, key2) {
    // Tạo hash map từ mảng nhỏ hơn -> tối ưu bộ nhớ
    let hashMap = {};
    let results = [];

    // Xác định mảng nhỏ hơn -> xây dựng hash map
    const buildArray = arr1.length < arr2.length ? arr1 : arr2; // buildArray: mảng xây dựng
    const probeArray = arr1.length < arr2.length ? arr2 : arr1; // probeArray: mảng thăm dò
    const buildKey = arr1.length < arr2.length ? key1 : key2;
    const probeKey = arr1.length < arr2.length ? key2 : key1;

    // Bước 1: Xây dựng hash map
    buildArray.forEach(buildObject => {
        const buildValue = buildObject[buildKey];

        if (!hashMap[buildValue]) {
            hashMap[buildValue] = [];
        }
        hashMap[buildValue].push(buildObject);

    })
    // Kết quả bước 1
    // console.log('Kết quả bước 1: ', hashMap)

    // Bước 2: Thăm dò hash map:
    probeArray.forEach(probeObject => {
        const probeValue = probeObject[probeKey];

        // Nếu tìm thấy khớp trong hash map
        if (hashMap[probeValue]) {      //[ { id: 1, name: 'Nguyễn Văn A' } ]
            hashMap[probeValue].forEach((hashMapValueObject) => {       //{ id: 1, name: 'Nguyễn Văn A' }
                //Tạo đối tượng kết quả bằng cách kết hợp cả hai đối tượng
                let resultObject = {};

                //Sao chép thuộc tính từ đối tượng đầu tiên
                for (let key in hashMapValueObject) {
                    resultObject[key] = hashMapValueObject[key];  ////Result Object: { id: 1, name: 'Nguyễn Văn A' }

                }

                // Sao chép thuộc tính từ đối tượng thứ hai
                for (let key in probeObject) { // orderId - userId - product
                    if (key !== probeKey || key === probeKey && probeKey !== buildKey) { // không cần thiết lắm
                        //Thêm tiền tố nếu trùng thuộc tính
                        const keyName = resultObject.hasOwnProperty(key) ? `${probeKey}_${key}` : key;
                        resultObject[keyName] = probeObject[key];
                    }

                }
                results.push(resultObject);
            })

        }
    })
    return results;
}

const result = hashJoin(users, orders, "id", "userId");
console.log(result);


