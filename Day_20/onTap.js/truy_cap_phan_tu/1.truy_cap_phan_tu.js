// Truy cập bằng ID
const heading = document.getElementById('heading');
console.log(heading);  /* Trả về phần tử có id = "heading" */
/*
Kết quả: <h1 id="heading">Xin chào</h1>
*/

// Truy cập bằng class name
const paragraph = document.getElementsByClassName('paragraph-1');
console.log(paragraph); /* Trả về HTML Collection */
/*
Kết quả:
HTMLCollection [p.paragraph-1]
0: p.paragraph
length: 1
*/

// Truy cập bằng tag name
const allDivs = document.getElementsByTagName('div')
console.log(allDivs)    /* Trả về HTML Collection */
/*
Kết quả:
HTMLCollection [div]
0: div
length: 1
*/

// Truy cập bằng CSS Selector (chỉ phần tử đầu tiên khớp)
const firstParagraph = document.querySelector('.paragraph-1')
console.log(firstParagraph);    /* Trả về phần tử đầu tiên có class="paragraph-1" */
/*
* Kết quả:
* <p class="paragraph-1">Đây là đoạn văn bản 1.</p>
*
* */

// Truy cập tất cả phần tử khớp với CSS Selector
const allParagraphs = document.querySelectorAll('.paragraph-1')
console.log(allParagraphs); /* Trả về NodeList các phần tử có class="paragraph-1" */
/*
Kết quả:
HTMLCollection [p.paragraph-1, p.paragraph-1]
0: p.paragraph-1
1: p.paragraph-1
length: 2
*/