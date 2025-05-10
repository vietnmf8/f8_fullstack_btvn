function demNguyenAm(arr) {
    // Chuyển chuỗi về chữ thường để so sánh
    arr = arr.toLowerCase();

    // Tập hợp các nguyên âm
    const nguyenAm = ['a', 'e', 'i', 'o', 'u'];

    // Duyệt qua chuỗi và đếm nguyên âm
    let count = 0;
    for (let item of arr) {
        if (nguyenAm.includes(item)) {
            count++;
        }
    }

    return count;
}
