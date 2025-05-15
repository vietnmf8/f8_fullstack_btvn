// Bước 1: Tạo phần tử mới
const newDiv = document.createElement('div');
const newText = document.createTextNode('Nội dung mới');

// Bước 2: Thêm text vào div
newDiv.appendChild(newText);

// Bước 3: Thêm thuộc tính cho div
newDiv.className = 'content-box-class'
newDiv.id = 'content-box-id'

// Bước 4: Thêm div vào trong DOM (vào trong thẻ có id="container")
const container = document.getElementById('container');
container.appendChild(newDiv);

/*Kết quả:
<div id="container">
    <div id="content-box-id" class="content-box-class">Nội dung mới</div>
</div>
* */