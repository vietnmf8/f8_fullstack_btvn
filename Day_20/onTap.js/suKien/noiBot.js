const button = document.getElementById('button');
const inner = document.getElementById('inner');
const outer = document.getElementById('outer');

// Đăng ký sự kiện cho tất cả các phần tử

button.addEventListener('click', (event) => {
    console.log('Button clicked')
    event.stopPropagation(); // Ngăn nổi bọt
})

inner.addEventListener('click', (event) => {
    console.log('inner div clicked')
})

outer.addEventListener('click', (event) => {
    console.log('outer div clicked')
})