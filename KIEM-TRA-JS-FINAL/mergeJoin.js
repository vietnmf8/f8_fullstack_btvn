/*

Mảng đã được sắp xếp:
Binary Search: Tìm kiếm giá trị color trong mảng colors dựa vào colorId của flowers
Merge Join: Ghép 2 mảng flowers và colors theo đúng flower.id = color.id


So do:




            ┌───────────────────────────┐
            │                           │
            │    Khoi tao du lieu       │
            │                           │
            │    colors   = [ {} ];     │
            │    flowers  = [ {} ];     │
            │  ──────────────────────── │
            │    (mang da dc sap xep)   │
            │                           │
            │                           │
            └────────────┬──────────────┘
                         │
                         │
                         │
                         │
                         ▼
           ┌──────────────────────────────┐
           │                              │
           │  const mergedFlowers = [];   │
           │                              │
           └─────────────┬────────────────┘
                         │
                         │
                         │
                         ▼

          ┌─────────────────────────────────┐
          │                                 │
          │   Duyet flowers tung phan tu    │
          │                      (flower)   │
          │                                 │
          └─────────────────────────────────┘

                          │
                          │
                          │
                          │
                          │
                          │
                          │
                          ▼
    ┌───────────────────────────────────────────┐
    │                                           │
    │          Tim colorFound                   │
    │          bang cach goi ham                │
    │          binarySearch                     │
    │                                           │
    │    ─────────────────────────────────      │
    │                                           │
    │   binarySearch tra ve mot doi tuong       │
    │   co color tuong ung voi colorId          │
    │                                           │
    └────────────────────┬──────────────────────┘
                         │
                         │
                         │
                         │
                         ▼
    ┌─────────────────────────────────────────┐
    │                                         │
    │   Tao mergedFlower la doi tuong trong   │
    │   mang mergedFlowers                    │
    │                                         │
    │   Them mergedFlower vao mergedFlowers   │
    │                                         │
    └────────────────────┬────────────────────┘
                         │
                         │
                         │
                         ▼
         ┌───────────────────────────────┐
         │                               │
         │    In ra mergedFlowers        │
         │                               │
         │                               │
         └───────────────────────────────┘










 */


// const colors = Array.from({length: 20000}, (_, i) => ({
//     id: i + 1,
//     name: `color ${i + 1}`
// }));
// const flowers = Array.from({length: 400000}, (_, i) => ({
//     id: i + 1,
//     name: `flower ${i + 1}`,
//     colorId: Math.floor(Math.random() * 20000) + 1 // random colorId between 1 and 2000
// }));




const colors =  [
    { id: 1, name: 'color 1' },
    { id: 2, name: 'color 2' }
]

const flowers =  [
    { id: 1, name: 'flower 1', colorId: 1 },
    { id: 2, name: 'flower 2', colorId: 2 },
    { id: 3, name: 'flower 3', colorId: 1 },
    { id: 4, name: 'flower 4', colorId: 2 }
]


// Sắp xếp mảng colors theo id để sử dụng thuật toán Binary Search
colors.sort((a, b) => a.id - b.id);

function binarySearch(array, targetID) {
    let left = 0;
    let right = array.length - 1;

    //Bước 1: Tìm colorId (id của colors) = targetId (targetId = flower.colorId)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        //Bước 2: Kiểm tra mid, so sánh array[mid].id với targetId
        if (array[mid].id === targetID) {
            return array[mid];
        } else if (array[mid].id < targetID) {
            // id nhỏ hơn target -> duyệt tiếp bên phải
            left = mid + 1;
        } else { // id lớn hơn target -> tìm bên trái
            right = mid - 1;
        }
    }

    return null // Không tìm thấy
}


// Bước 2: Merge - duyệt các đối tượng trong flowers, và tìm color trong colors tương ứng
const mergedFlowers = [];
flowers.forEach(flower => {
    //Tìm color phù hợp
    const colorFound = binarySearch(colors, flower.colorId); // -> { id: 1, name: 'color 1' }
    console.log(colorFound)

    //Tạo object mới
    const mergedFlower = {
        id: flower.id,
        name: flower.name,
        colorId: flower.colorId,
        color: colorFound.name,
    };
    mergedFlowers.push(mergedFlower);

})
console.log(mergedFlowers);




