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


//Cách 1
flowers.forEach(flower => {
    const colorID = flower.colorID; //colorID = 1 | 2 | 1
    const color = colors.find((color) => color.id === colorID);
    flower.color = color.name
    console.log(flower);

})
