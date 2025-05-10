const object = {
    id: 1,
    name: 2,
}

function deepCopy(object) {
    return {...object}
}

console.log(deepCopy(object))

