// File validation.js - Xử lý validation cho form

// Validate email format
function validateEmail(email) {
    console.log('Đang validate email:', email);

    // Kiểm tra email rỗng
    if (!email || email.trim() === '') {
        console.log('Email rỗng');
        return false;
    }

    // Kiểm tra format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    console.log('Email hợp lệ:', isValid);
    return isValid;
}

 // Validate password
function validatePassword(password) {
    console.log('Đang validate password...');

    // Kiểm tra password rỗng
    if (!password || password.trim() === '') {
        console.log('Password rỗng');
        return false;
    }

    // Kiểm tra độ dài password (tối thiểu 6 ký tự)
    const isValid = password.length >= 6;

    console.log('Password hợp lệ:', isValid);
    return isValid;
}

 // Hiển thị thông báo lỗi
function showErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        console.log('Hiển thị lỗi:', message);
    }
}

// Ẩn thông báo lỗi
function hideErrorMessage(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.style.display = 'none';
        console.log('Đã ẩn thông báo lỗi:', elementId);
    }
}

// Hiển thị thông báo thành công
function showSuccessMessage(elementId, message) {
    const successElement = document.getElementById(elementId);
    if (successElement) {
        successElement.textContent = message;
        successElement.style.display = 'block';
        console.log('Hiển thị thành công:', message);
    }
}

// Ẩn tất cả thông báo
function hideAllMessages() {
    hideErrorMessage('emailError');
    hideErrorMessage('passwordError');
    hideErrorMessage('loginError');

    const successElement = document.getElementById('loginSuccess');
    if (successElement) {
        successElement.style.display = 'none';
    }

    console.log('Đã ẩn tất cả thông báo');
}

// Validate toàn bộ form
function validateForm(email, password) {
    console.log('Đang validate toàn bộ form...');

    // Ẩn tất cả thông báo cũ
    hideAllMessages();

    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        showErrorMessage('emailError', 'Vui lòng nhập email hợp lệ');
        isValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
        showErrorMessage('passwordError', 'Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    }

    console.log('Form hợp lệ:', isValid);
    return isValid;
}