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

// Sử dụng hashJoin

// hashMap mảng ít phần tử hơn
const hashMap = {}
colors.forEach(item => {
    hashMap[item.id] = item.name
})

// { '1': 'red', '2': 'blue' }

flowers.forEach(item => {
    const colorName = hashMap[item.colorID]
    item.color = colorName
})

console.log(flowers)