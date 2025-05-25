// const logger = (obj) => {
//     console.log(obj)
// }
// logger({a: 1, b: 2, c: 3})



/* Destructuring */
// const logger = ({a, b, c, d}) => {
//     console.log(a, b, c, d)
// }
// logger({a: 1, b: 2, c: 3, d: 5})

/* Default value */
// const logger = ({a, b, c, d = 100}) => {
//     console.log(a, b, c, d)
// }
// logger({a: 1, b: 2, d: 200})

/* Keyword argument */
// Truyền bao nhiêu đối số cũng được
const logger = (...arr) => {
    console.log(...arr)
}
logger(1, 2, 3, 4)