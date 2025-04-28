const arr = [10, 12, 14, 16]

// Lấy số bằng đúng 16 - Hàm find trả về 1 giá trị duy nhất và tìm thấy đầu tiên
// const result = arr.find((e) => e === 16)
const result = arr.find((e) => e > 13) //14
// console.log(result)


//----------------------------------------

const members = [
    {id: 1, name: "Viet", age: 21},
    {id: 2, name: "Duc", age: 22},
]

// const member = members.find((a) => a.id === 1)
// console.log(member)


// const memberNames = []
// for (const member of members) {
//     memberNames.push(member.name)
// }
const memberNames = members.map((member) => member.name)
console.log(memberNames)


