// const a = {
//     id: 1,
//     name: 'test'
// }
// Cách thay đổi b mà a không bị thay đổi

// Cách 1: Dùng Object.keys
// const b = {}
// Object.keys(a).forEach((key) => {
//     b[key] = a[key]
// })
// b.id = 100
// console.log(b)

//Cách 2: Ép kiểu từ object -> String
// const aString = JSON.stringify(a)
// const b = JSON.parse(aString) // Từ String -> Object
// b.id = 100
// console.log(b)

// Cách 3: Deep Copy ...
// b = {...a}
// b.id = 100;
// console.log(a, b)


// const setName = (obj) => {
//     obj.name = 'new name'
// }
//
// setName({...a})
// console.log(a)


// const colors = Array.from({length: 4}, (_, i) => ({
//     id: i + 1,
//     name: `color ${i + 1}`
// }));

/*

[
  { id: 1, name: 'color 1' },
  { id: 2, name: 'color 2' },
  { id: 3, name: 'color 3' },
  { id: 4, name: 'color 4' }
]

 */

// for (let item of colors) {
//     let color = {...item};
//     color.id = item.id * 2
//     console.log(item, color)
// }
// // { id: 1, name: 'color 1' } { id: 2, name: 'color 1' }
// // { id: 2, name: 'color 2' } { id: 4, name: 'color 2' }
// // { id: 3, name: 'color 3' } { id: 6, name: 'color 3' }
// // { id: 4, name: 'color 4' } { id: 8, name: 'color 4' }


// const a = {
//     id: 1,
//     name: 'test',
//     test: {
//         id: 1, age: 100
//     }
// }
//
// const setName = (obj) => {
//     obj.name = 'new name'
// }
//
// const b = {...a}
// b.name = 'test2'
// b.test.id = 1000
// console.log(a)
// console.log(b)


const a = {
    id: 1,
    name: 'test',
    test: {
        id: 1, age: 100
    }
}


// const b = {...a, name: 'test2', test: {id: 1000, age: 100}};
// Hoặc
// const b = {...a, name: 'test2', test: {...a.test}};
// b.test.id = 1000
// Hoặc
const b = JSON.parse(JSON.stringify(a))
b.test.id = 1000
console.log(a)
console.log(b)