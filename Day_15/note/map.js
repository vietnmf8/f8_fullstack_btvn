
const arr = [10, 12, 14, 16]


//Tạo array mới
// Công thức: Array mới có phần tử gấp 2 lần phần tử Array cũ

// new e = 2 * old e
// -> array.map

const newArr = arr.map((e) => e * 2) // e là tham số của hàm
/* Giải thích:

 <=> arr.map(func) Sẽ gọi hàm cho từng phần tử -> func(arr[i]) -> func(1)
 - func (không có ()) = truyền bản thân hàm
 - func() = gọi hàm NGAY LẬP TỨC và lấy giá trị trả về
 - Hàm map sẽ tự động làm điều này bên trong nó:
 for (let i = 0; i < arr.length; i++) {
    func(arr[i]); // tự động gọi func với từng phần tử
}
 */
console.log(newArr)






