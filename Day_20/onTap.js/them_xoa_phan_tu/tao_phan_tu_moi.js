const parent = document.getElementById('parent');
const oldPara = parent.querySelector('p');


// Tạo phần tử mới
const newPara = document.createElement('p');
newPara.textContent = 'Paragraph mới';

// Thêm vào DOM
// append -> Thêm vào bên trong (cuối parent)
parent.append(newPara);
/*Kết quả:
<div id="parent">
<p>Paragraph cũ</p>
<p>Paragraph mới</p><
/div>
*/

// prepend -> Thêm văn bản vào bên trong (đầu parent)
parent.prepend('Đầu tiên: ');
/*Kết quả:
<div id="parent">
Đầu tiên:
<p>Paragraph cũ</p>
<p>Paragraph mới</p>
</div>
*/

// before -> thêm vào cùng cấp (TRƯỚC)
oldPara.before('Trước Para cũ');
/*Kết quả:
<div id="parent">
Đầu tiên:
Trước paragraph cũ:
<p>Paragraph cũ</p>
<p>Paragraph mới</p>
</div>
*/

// after -> thêm vào cùng cấp (SAU)
oldPara.after('Sau Para cũ');
/*Kết quả:
<div id="parent">
Đầu tiên:
Trước paragraph cũ:
<p>Paragraph cũ</p>
Sau paragraph cũ:
<p>Paragraph mới</p>
</div>
*/


// remove -> Xoá phần tử
oldPara.remove();
/*Kết quả:
<div id="parent">
Đầu tiên:
Trước paragraph cũ:
Sau paragraph cũ:
<p>Paragraph mới</p>
</div>
*/