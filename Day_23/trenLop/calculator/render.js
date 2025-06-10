/* Chức năng: Render các nút trong bàn phím */
/************************************************/

// Nhận về hàm sự kiện click
import {onClickBtn} from './handleCal.js'

// Truy cập phần tử:  <div class="calculate-keyboard">
const keyboardE = document.querySelector('.calculate-keyboard')

// Truy cập danh sách các nút bấm
const btns = [
    {text: 1, value: 1},
    {text: 2, value: 2},
    {text: 3, value: 3},
    {text: '+', value: '+'},
    {text: 4, value: 4},
    {text: 5, value: 5},
    {text: 6, value: 6},
    {text: '-', value: '-'},
    {text: 7, value: 7},
    {text: 8, value: 8},
    {text: 9, value: 9},
    {text: '*', value: '*'},
    {text: 'AC', value: 'AC'},
    {text: 0, value: 0},
    {text: '=', value: '='},
    {text: '/', value: '/'},
]

/* Tạo hàm render */
const renderBtns = () => {
    // Duyệt từng phần tử trong mảng btns
    btns.forEach(btn => {
        // Tạo nút bấm (thẻ div)
        const btnE = document.createElement('div')
        // Đặt class cho nút bấm
        btnE.className = 'calculate-button'
        // Tạo nội dung text bên trong nút bấm
        btnE.innerText = btn.text
        // Tạo thuộc tính value cho nút bấm
        btnE.setAttribute('value', btn.value)
        // Tạo sự kiện click cho từng nút bấm
        btnE.addEventListener('click', () => {
            // Thực hiện chức năng click -> Truyền hàm onclick() vào đây
            onClickBtn(btn.value)
        })
        // Đưa thẻ div vào trong thẻ keyboardE
        keyboardE.appendChild(btnE)
    })
}
// Gọi hàm để render
renderBtns()