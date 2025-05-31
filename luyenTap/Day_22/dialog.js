import {sanitizeInput, getSearchField, onOpenDialog, onCloseDialog, onSave} from './tienIch.js';
/* Xử lý hôp thoại (Thêm - sửa - xoá) */
// Truy cập dialog
const dialogContainerE = document.querySelector('.dialog-container')
const addNewBtnEl = document.querySelector('.search-bar button')
const cancelBtnE = document.querySelector('.dialog-action .cancel-btn')
const saveBtnE = document.querySelector('.dialog-action .save-btn')

/* Thêm sự kiện click cho Add New */
addNewBtnEl.addEventListener('click', () => {
    onOpenDialog(null)
    console.log("Đã nhấn Add New")
})

/* Thêm sự kiện cho nút Cancel - Dialog */
cancelBtnE.addEventListener('click', (event) => {
    onCloseDialog()
    console.log("Đã nhấn Cancel")
})

/* Thêm sự kiện cho nút Save - Dialog */
saveBtnE.addEventListener('click', (event) => {
    onSave()
    console.log("Đã nhấn Save")
})

// Xử lý khi nhấn Add new -> Thêm nhân viên mới
//                edit    -> chỉnh sửa nhan viên


export {dialogContainerE}