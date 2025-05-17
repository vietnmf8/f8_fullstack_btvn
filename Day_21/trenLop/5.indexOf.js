const a = "hello anh em"
console.log(a.indexOf("ll")) // Đếm index
console.log(a.trim())   // Loại bỏ ký tự khoảng trắng dư thừa
console.log(a.split(" ")) // Chuyển string -> mảng, cắt string đó bằng ký tự " " (space) trong string


const b = ["hello", "anh", "em"]
console.log(b.join(" ")) // Nối mảng thành string với khoảng trắng
const bSplice = b.splice(1, 2)
console.log(bSplice) // Lấy 2 phần tử từ vị trí start
console.log(b) // Vì đã lấy đi 2 phần tử nên b chỉ còn [ 'hello' ]


const c = "test 1234"
console.log(c.slice(2, 4)) // cắt phần tử: 2-start 4-end -> cắt từ start đến end-1
console.log(c.slice(2)) // // Nếu không đặt end thì cắt tử start đến hết chuỗi
console.log(c.slice(2)) // // Nếu không đặt end thì cắt tử start đến hết chuỗi
console.log(c.lastIndexOf("t")) // kiêm tra phần tử cuối cùng nếu có nhiều phần tử giống nhau
console.log(c.indexOf("t")) // nếu để indexOf -> chỉ ra 1 vì nó chỉ kiểm tra 1 lần duy nhất

//Vì chuỗi được coi như một mảng, mỗi ký tự là một phần tử
console.log(c[1])
// Có thể lặp được
for (let i = 0; i < c.length; i++) {
    console.log(c[i])
}