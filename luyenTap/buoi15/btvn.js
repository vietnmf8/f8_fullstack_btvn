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

// Bước 2: Khởi tạo 2 biến bat đầu của mảng
let a = 0, flowerStartIdx = 0;
// Bước 3.1 : Vòng lặp ngoài
for (let flowerIndex = 0; flowerIndex < flowers.length; flowerIndex++) {
    // Vòng lặp trong có phần tử ít hơn và duy nhất
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
        // Gọi ra các đối tượng
        const flower = flowers[flowerIndex];
        const color = colors[colorIndex];

        // Nếu colorId = id -> lấy và
        if (flower.colorId === color.id) {
            flower.color = color.name;
            break; //Vì vòng lặp color là duy nhất, nên bằng nhau là break luôn
        }

        if (flower.colorId > color.id) {
            // a++
        }

    }
}
console.log(flowers);

