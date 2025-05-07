const colors = [

    {id: 1, name: 'color 1'},
    {id: 2, name: 'color 2'},
    {id: 3, name: 'color 3'},
    {id: 4, name: 'color 4'},
    {id: 5, name: 'color 5'}
]


const flowers = [
    {id: 1, name: 'flower 1', colorId: 4},
    {id: 2, name: 'flower 2', colorId: 4},
    {id: 3, name: 'flower 3', colorId: 2},
    {id: 4, name: 'flower 4', colorId: 2},
    {id: 5, name: 'flower 5', colorId: 2}
]

// Merge Join -  Nối 2 mang đã được sắp xếp


//Bước 1: Sắp xếp 2 mảng
colors.sort((a, b) => a.id - b.id);
flowers.sort((a, b) => a.colorId - b.colorId);


let colorIndex = 0, flowerIndex = 0;
// Bước 2: Dung môi trường while
while (colorIndex < colors.length && flowerIndex < flowers.length) {
    const flower = flowers[flowerIndex];
    const color = colors[colorIndex];

    if (flower.colorId === color.id) {
        flower.color = color.name;
        flowerIndex++
    } else if (flower.colorId > color.id) {
        colorIndex++
    } else {
        flowerIndex++
    }
}

console.log(flowers)

