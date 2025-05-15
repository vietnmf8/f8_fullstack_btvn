const button = document.getElementById("changeTextBtn");

// Thêm sự kiện click cho button
button.addEventListener("click", function () {
    //Lấy tất cả thẻ p
    const paragraphs = document.getElementsByTagName("p");
    // Lặp qua collection của p
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = `Đã đổi nội dung ${i + 1}`;
    }
})