let counter = 0;
const arr = [33, 11, 22, 12, 35, 29]
console.log("Dau vao",arr)
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        const curVal = arr[i];
        const nextVal = arr[i+1];
        console.log(`Gia tri hien tai: i = ${i} -  ${curVal}" | Gia tri ke tiep: i + 1 = ${i+1} -  ${nextVal} ` );

        if (curVal > nextVal) {
            arr[i] = nextVal;
            arr[i+1] = curVal;
        }

        counter++;
    }
    console.log("Vong lap dau tien da dao dc so lon nhat la 35 ve cuoi",arr)
    console.log('-------------------------')
    console.log(counter)

}

console.log("ket qua",arr)