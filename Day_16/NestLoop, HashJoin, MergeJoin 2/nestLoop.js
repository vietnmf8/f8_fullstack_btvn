const a = [
    {userId: 1, x: "X1"},
    {userId: 2, x: "X2"}
];

const b = [
    {id: 2, y: "Y2"},
    {id: 1, y: "Y1"}
];


function nestedLoopJoin(arr1, arr2, key1 = "userId", key2 = "id") {
    const results = [];

    arr1.forEach((aItem) => {
        arr2.forEach((bItem) => {
            if (aItem[key1] === bItem[key2]) {
                results.push({...aItem, ...bItem});
            }
        })
    })

    return results;
}

const result = nestedLoopJoin(a, b)
console.log(result)