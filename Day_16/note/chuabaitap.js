const colors = [
    {id: 1, name: 'color1'},
    {id: 2, name: 'color2'},
    {id: 3, name: 'color3'},
    {id: 4, name: 'color4'},
    {id: 5, name: 'color5'}
]

const flowers = [
    {id: 3, name: 'flower3', colorId: 1},
    {id: 5, name: 'flower5', colorId: 1},
    {id: 1, name: 'flower1', colorId: 4},
    {id: 4, name: 'flower4', colorId: 4},
    {id: 2, name: 'flower2', colorId: 5}
]


//Sort colorId của flowers
flowers.sort((a, b) => a["colorId"] - b["colorId"]);


let colorStartIndex = 0;
let flowerStartIndex = 0;

// Dùng for:

// for (let flowerIndex = flowerStartIndex; flowerIndex < flowers.length; flowerIndex++) {
//     for (let colorIndex = colorStartIndex; colorIndex < colors.length; colorIndex++) {
//         const flower = flowers[flowerIndex];                // {id: 3, name: 'flower3', colorId: 1},
//         const color = colors[colorIndex];   // {id: 1, name: 'color1'},
//         if (flower.colorId === color.id) { // Thêm
//             flower["color"] = color.name
//             break //cần thoát khỏi vòng lặp khi nó đã đúng
//         }
//
//         if (flower.colorId > color.id) {
//             colorStartIndex++
//         }
//     }
// }


// ----------------------------------------------

// Dùng while
let flowerIndex = 0;
let colorIndex = 0;
while (colorIndex < colors.length && flowerIndex < flowers.length) {
    const flower = flowers[flowerIndex];
    const color = colors[colorIndex];

    if (flower.colorId === color.id) {
        flower["color"] = color.name
        flowerIndex++
    } else if (flower.colorId > color.id) {
        colorIndex++;
    } else {
        flowerIndex++;
    }
}


console.log(flowers)