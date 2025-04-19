// ------- 1. Biến và kiểu dữ liệu --------
console.log('1. Biến và kiểu dữ liệu')

// - Khai bao biến
var name = "Việt"; //string
let a = 10, b = 20, c = 30 //number
a = a + 10
const PI = 3.14 //number

// - Print trên tab Console - Devtool
console.log("- Kiểu string:", name)
console.log("- Kiểu number:","a =", a, "|", "b =", b, "|", "c =", c)
console.log("- Kiểu hằng số:", PI)

console.log("-------------------------------")

// ------- 2. Toán tử số học --------
console.log('2. Toán tử số học')
console.log("Cộng (a + b):", a + b);
console.log("Trừ (a - b):", a - b);
console.log("Nhân (a * b):", a * b);
console.log("Chia (a / b):", a / b);
console.log("Chia lấy dư (a % b):", a % b);
console.log("Lũy thừa (a ** b):", a ** b);
console.log("Căn bậc 2 (a ** (1/2)):", a ** (1/2));

console.log("-------------------------------")
// -------- 3. Các Toán tử tăng và giảm (++ và -- tiền tố và hậu tố) --------
console.log('3. Các Toán tử tăng và giảm (++ và -- tiền tố và hậu tố)')

let d = 10

console.log("Giá trị ban đầu:", "d = ", d)
console.log("Giá trị hậu tố:", "d++ = ", d++)
console.log("Giá trị mới:", "d mới = ", d)
console.log("Giá trị tiền tố:", "++d = ", ++d)
console.log("Giá trị mới:", "d mới = ", d)

console.log("-------------------------------")

console.log("Giá trị ban đầu:", "d = ", d)
console.log("Giá trị hậu tố:", "d-- = ", d--)
console.log("Giá trị mới:", "d mới = ", d)
console.log("Giá trị tiền tố:", "--d = ", --d)
console.log("Giá trị mới:", "d mới = ", d)

console.log("-------------------------------")
let x = 9
console.log("Phức tạp hơn. Cho x = ", x)
console.log("Tính: y = x - x++ + --x + ++x + x-- = ")

console.log("Giá trị ban đầu:", "x = ", x)
console.log("Giá trị hậu tố (+):", "x++ = ", x++)
console.log("Giá trị mới:", "x mới = ", x)
console.log("Giá trị tiền tố (-):", "--x = ", --x)
console.log("Giá trị mới:", "x mới = ", x)
console.log("Giá trị tiền tố (+):", "++x = ", ++x)
console.log("Giá trị mới:", "x mới = ", x)
console.log("Giá trị hậu tố (-):", "x-- = ", x--)
console.log("Giá trị mới:", "x mới = ", x)
const y = x - x++ + --x + ++x + x--
console.log("y = 9 - 9 + (10 - 1) + 10 + 10 = ",y)


console.log("-------------------------------")
// ------- 4. Toán tử với String --------
console.log("4. Toán tử với String")
console.log("- Nối chuỗi")
let firstName = "Nguyen"
let lastName = "Viet"
let fullName = firstName + "" + lastName

console.log("firstName:", firstName)
console.log("lastName:", lastName)
console.log("fullName (Nối chuỗi):", fullName)

console.log("-------------------------------")
// ------- 5. Number + String (ép kiểu ngầm định) --------
console.log("5. Number + String (ép kiểu ngầm định)")
//dấu +
console.log("- Với dấu (+) -> Nếu 1 trong 2 toán hàng là chuỗi (string), toán hạng còn lại sẽ bị ép thành chuỗi và thực hiện nối chuỗi như sau:")
console.log("5 + '5' = ", 5 + "5");       // "55" (Number -> String)
console.log("'Age: ' + 25 = ", "Age: " + 25);  // "Age: 25" (Number -> String)
//các dấu còn lại
console.log("- Với dấu (-, * , / , % , **) -> cố gắng ép cả hai toán hạng thành số. Nếu ép kiểu thành công, phép toán số học sẽ được thực hiện. Nếu không thể ép thành số hợp lệ, kết quả thường là NaN như sau:")
console.log("'10' - 5 = ", "10" - 5);       // 5 (String "10" -> Number 10)
console.log("'10' * 2 = ", "10" * "2");     // 20 (Cả hai String -> Number)
console.log("'100' / 2 = ", "100" / 2);      // 50 (String "100" -> Number 100)
console.log("'apple' * 3 = ", "apple" * 3);    // NaN ("apple" không thể thành Number)
console.log("true + 1 = ", true + 1);       // 2 (true -> 1)
console.log("false * 10 = ", false * 10);     // 0 (false -> 0)



console.log("-------------------------------")
// ------- 6.  Ép kiểu tường minh --------
console.log("5. Number + String (ép kiểu ngầm định)")

// Chuyển đổi tường minh

// Number
Number("123");     // 123
Number("");        // 0
Number("abc");     // NaN
Number(true);      // 1
Number(false);     // 0


//String
String(123);       // "123"
String(true);      // "true"
String(false);     // "false"


//Boolean
Boolean(123);       // true
Boolean(0);         // false
Boolean("hello");   // true
Boolean("");        // false

