const colors = [
    {id: 1, name: 'red'},
    {id: 2, name: 'blue'},
]

const flowers = [
    {id: 1, name: 'Rose', colorID: 1},      //Red
    {id: 2, name: 'Tulip', colorID: 2},     //Blue
    {id: 3, name: 'Carnation', colorID: 1}, // Red
]


//Result:

// [
//     {id: 1, name: 'Rose', colorID: 1, color: 'red'},
//     {id: 2, name: 'Tulip', colorID: 2, color: 'blue'},
//     {id: 3, name: 'Carnation', colorID: 1, color: 'red'},
// ]


// Lặp mảng chiếm nhiều giá trị hơn trong phần kết quả
flowers.forEach(flower => {
    // Lấy ra ID
    const colorID = flower.colorID;

    // Lấy ra đối phần tử trong colors thoả mãn điều kiện id = colorID
    const item = colors.find((item) => item.id === colorID);

    //Thêm vào flowers
    flower.color = item.name
})

console.log(flowers)