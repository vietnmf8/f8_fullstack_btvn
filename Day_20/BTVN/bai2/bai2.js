function countElementsByTag(tagName) {
    // Nếu tagName không phải là chuỗi, hàm trả về 0.
    if (typeof (tagName) !== 'string') {
        return 0;
    }
    // Vì getElementsByTagName -> trả ra một collection -> có length
    const elements = document.getElementsByTagName(tagName);
    return elements.length;
}

console.log(countElementsByTag("div")); // 3
console.log(countElementsByTag("p")); // 2
console.log(countElementsByTag("section")); // 1
console.log(countElementsByTag("header")); // 0
console.log(countElementsByTag(123)); // 0

