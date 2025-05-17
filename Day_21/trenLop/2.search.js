// // document.writeln - Viết trực tiếp trên document (in ra web luôn)
// document.writeln('Nguyễn Thuý Quỳnh')
// /* Có thể truyên mã html vào, giống như innerHTML í  - CƯC NGUY HIỂM */
// document.writeln('<h1>Nguyễn Thuý Quỳnh</h1>')


// Truy cập thẻ input
const inputTag = document.querySelector('input[name="name"]');

// Truy cập thẻ span
const spanTag = document.querySelector('span');

// Nhấn vào nút bấm thì lấy được giá trị (value) của inputTag
/* Truy cập thẻ button */
const buttonTag = document.querySelector('button');

/* Tạo sự kiện click cho nút button */
buttonTag.addEventListener('click', (event) => {
    /* Lấy giá trị (value) của inputTag */
    console.log(inputTag.value);
    /* Tạo biến value để nhân giá trị sau khi replace*/
    let value = inputTag.value.replaceAll('<', '&lt;')
    value = value.replaceAll('>', '&gt;')

    spanTag.innerHTML = value
})

/* Tạo sự kiện kể cả khi đang nhập vẫn lấy được giá trị của inputTag */
/* -> Sử dụng action: input (nhập) */
inputTag.addEventListener('input', (event) => {
    /* Đối tượng event */
    /* event.target: chính là thẻ input */
    /* event.target.value: chính là giá tri của thẻ input */
    console.log(event.target.value);
});

// Phòng chống XSS -> HTML Entities
// Biến ">" -> &lt;
// Biến "<" -> &gt;

// Sử dụng replace trong đối tượng event