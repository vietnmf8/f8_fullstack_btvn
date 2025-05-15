// Truy cập phần tử theo ID
const content = document.getElementById('content');

// ĐỌC TOÀN BỘ NỘI DUNG BÊN TRONG THẺ
// Đọc toàn bộ nội dung bên trong thẻ (biến tất cả thành text văn bản)
console.log(content.innerHTML);
/* Kết quả:
<p>Xin chào</p>
<p>Các bạn</p>
<!--Xin chào các bạn-->
*/

//Đọc toàn bộ nội dung bên trong thẻ (chỉ nội dung văn bản được hiển thị - không bao gồm cmt)
console.log(content.innerText)
/* Kết quả:
Xin chào
Các bạn
*/

//Đọc toàn bộ nội dung THÔ bên trong thẻ (chỉ nội dung văn bản được hiển thị - không bao gồm cmt)
console.log(content.textContent);
/* Kết quả:
Xin chào
Các bạn
*/

// Đọc toàn bộ nội dung của thẻ đó và tất cả thẻ con bên trong
console.log(content.outerHTML)
/* Kết quả:
<div id="content">
    <p>Xin chào</p>
    <p>Các bạn</p>
    <!--Xin chào các bạn-->
</div>
*/


// THAY ĐỔI NỘI DUNG
// Thay đổi toàn bộ nội dung bên trong thẻ (tất cả) -> thẻ mới
content.innerHTML = '<span>Xin chào mới</span>';
/* Kết quả:
<span>Xin chào mới</span>
*/

// Thay đổi toàn bộ (tất cả) thành -> văn bản Text được hiển thị trong thẻ
content.innerText = 'Chỉ văn bản'
/* Kết quả:
<div id="content"> Chỉ văn bản </div>
*/