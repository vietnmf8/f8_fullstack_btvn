// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

const n = 4
let S = 0
for (let i = 1; i <= n; i++) {
    let j = i + 1
    S = S + (i * j)
}

console.log(S)



