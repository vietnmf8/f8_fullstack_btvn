import {onclickBtn} from './handleCalculator.js'
/* Tạo mảng btns gồm text hiển thị trên giao diện và giá trị của chúng */
const btns = [
    {text: '1', value: 1},
    {text: '2', value: 2},
    {text: '3', value: 3},
    {text: '+', value: '+'},
    {text: '4', value: 4},
    {text: '5', value: 5},
    {text: '6', value: 6},
    {text: '-', value: '-'},
    {text: '7', value: 7},
    {text: '8', value: 8},
    {text: '9', value: 9},
    {text: '×', value: '*'},
    {text: 'AC', value: 'AC'},
    {text: '0', value: 0},
    {text: '=', value: '='},
    {text: '÷', value: '/'},
    {text: 'Del', value: 'Del'},
    {text: '.', value: '.'},
]
/* Render các thẻ button trong keyboard bằng HTML */
// Gọi ra phần tử keyboard
const keyboardE = document.getElementById('keyboard')
// Tạo hàm render
const renderBtns = () => {
    // Duyệt từng obj trong mảng btns
    btns.forEach(btn => {
        const btnE = document.createElement('div')
        btnE.className = 'btn' // Tạo class cho thẻ
        btnE.innerText = btn.text // Tạo nội dung của thẻ
        btnE.setAttribute('value', btn.value) // Thêm thuộc tính value = giá_trị_của_thẻ_đó
        // Tạo sự kiện click cho từng thẻ
        btnE.addEventListener('click', () => {
            onclickBtn(btn.value)
        })
        keyboardE.appendChild(btnE)
    })
}

renderBtns()
console.log(keyboardE)