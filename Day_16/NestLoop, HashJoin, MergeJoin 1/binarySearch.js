const students = [
    {id: 1, name: 'Nguyễn Văn A', age: 20},
    {id: 2, name: 'Trần Thị B', age: 21},
    {id: 3, name: 'Lê Văn C', age: 19},
    {id: 4, name: 'Phạm Thị D', age: 22},
    {id: 5, name: 'Đỗ Văn E', age: 20}

];

function binarySearchObjects(arr, key = "id", value = 3) {
    // Đảm bảo mảng đã được sắp xếp
    const sortedArr = [...arr].sort((a, b) => a[key] - b[key])      //Mang đã được sắp xếp
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid][key] === value) {
            return {found: true, index: mid, item: sortedArr[mid]};
        }

        if (sortedArr[mid] > value) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return {found: false};
}

console.log(binarySearchObjects(students, "id", 3))
