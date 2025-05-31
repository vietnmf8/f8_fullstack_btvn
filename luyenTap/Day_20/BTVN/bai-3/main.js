// Truy cập phần tử button
const button = document.getElementById("changeTextBtn");

// Truy cập các thẻ p
const p = document.getElementsByTagName("p");
// Duyệt từng phần tử trong HTML Collection
for (let i = 0; i < p.length; i++) {
    // Tạo sự kiện click cho button
    button.addEventListener("click", () => {
        return p[i].innerText = `Đã đổi nội dung ${i+1}`;
    })

}


