// const a = {
//     id: 1, name: 'test',
// }
//
// // Thêm key mới
// const age = 100;
// const b = {...a, age}
// // Lấy value trong Obj
// const {name, id} = b
// console.log(id, name)

// const a = ['id', 3, 'xyz']
// const b = [...a, 'abc']
//
// console.log(b)

const a = ['id', 3, 'xyz']
const b = [1, 2, 3]


const c = [...a, ...b]
console.log(c)