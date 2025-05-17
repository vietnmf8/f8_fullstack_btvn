// // Ví dụ 1: Replace từ
// const name = 'Xin chào'
// const nameReplace = name.replace('Xin', 'sin')

// Ví dụ 2: Replace ký tự
let name = '<h1>Xin chào</h1>'
/*ghi đè lun*/
name = name.replaceAll('<', '&lt;')
name = name.replaceAll('>', '&gt;')
/* Replace chỉ replace 1 kỳ tự duy nhất, nếu có nhiều ký tự giống nhau cần replace -> replaceAll */
console.log(name)
