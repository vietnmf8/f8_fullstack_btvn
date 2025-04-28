const colors = [
    {id: 1, name: 'red'},
    {id: 2, name: 'blue'},
]

const flowers = [
    {id: 1, name: 'Rose', colorID: 1},      //Red
    {id: 2, name: 'Tulip', colorID: 2},     //Blue
    {id: 3, name: 'Carnation', colorID: 1}, // Red
]

// colorObj {
//     1: 'red',
//     2: 'blue',
// }


//Result:

// [
//     {id: 1, name: 'Rose', colorID: 1, color: 'red'},
//     {id: 2, name: 'Tulip', colorID: 2, color: 'blue'},
//     {id: 3, name: 'Carnation', colorID: 1, color: 'red'},
// ]

// Cách 2: Tạo một mảng đối tượng mới
const colorObj = {}
colors.forEach((color) => {
    // Bước 1: Lấy từ color có: id = 1 (làm key) | 'red' = value -> Thêm vào colorObj
    colorObj[color.id] = color.name
})

flowers.forEach(flower => {
    // Bước 2: Tạo value mới cho flower
    const colorName = colorObj[flower.colorID] //colorObj[1] = red;
    flower.color = colorName
})

console.log(flowers)



