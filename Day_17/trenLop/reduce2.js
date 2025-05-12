const arr = [
    ['id', 1],
    ['name', 'test'],
    ['age', 20],
]

/*
{
    id: 1,
    name: 'test',
    age: 20,
}
 */
// //Cách 1
// const result = {}
// // Lặp mảng arr
// for (const e of arr) {
//     const key = e[0]
//     const value = e[1]
//     result[key] = value
// }
// console.log(result);
// //{ id: 1, name: 'test', age: 20 }


//Cách 2

const result = arr.reduce((acc, val) => {
    const key = val[0];
    const value = val[1];
    acc[key] = value;
    return acc;

}, {});
console.log(result)

