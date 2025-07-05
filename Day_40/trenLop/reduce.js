const arr = [
    ['id', 1],
    ['name', 'John'],
    ['age', 30],
];

/*
{
    id: 1,
    name: 'John',
    age: 30
}
*/

// const result = arr.reduce((object, currentValue) => {
//     // Hoặc có thể dùng destructuring
//     const [key, value] = currentValue;
//     object[key] = value;
//     return object;
// }, {})


const result = arr.reduce((object, [key, value]) => {
    // Hoặc có thể dùng destructuring
    object[key] = value;
    return object;
}, {})


console.log(result); // { id: 1, name: 'John', age: 30 }