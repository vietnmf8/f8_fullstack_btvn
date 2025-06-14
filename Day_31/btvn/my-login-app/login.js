// File login.js - Xử lý logic chính của trang login

 // Xử lý sự kiện submit form login
async function handleLoginSubmit(event) {
    // Ngăn form submit mặc định
    event.preventDefault();

    console.log('Bắt đầu xử lý login...');

    // Lấy giá trị từ form
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log('Email nhập:', email);
    console.log('Password nhập:', password ? 'Có password' : 'Không có password');

    // Validate form
    if (!validateForm(email, password)) {
        console.log('Form không hợp lệ, dừng xử lý');
        return;
    }

    // Disable button khi đang xử lý
    const loginButton = document.getElementById('loginBtn');
    loginButton.disabled = true;
    loginButton.textContent = 'Đang đăng nhập...';

    try {
        // Gọi API login
        const loginResult = await callLoginAPI(email, password);
        console.log('Kết quả login:', loginResult);

        // Chuẩn hóa tên field từ API response
        // API có thể trả về access/refresh thay vì access_token/refresh_token
        const accessToken = loginResult.access_token || loginResult.access;
        const refreshToken = loginResult.refresh_token || loginResult.refresh;

        if (!accessToken || !refreshToken) {
            throw new Error('API không trả về đầy đủ tokens');
        }

        // Lưu tokens vào localStorage
        saveTokensToStorage(accessToken, refreshToken);

        // Hiển thị thông báo thành công
        showSuccessMessage('loginSuccess', 'Đăng nhập thành công!');

        // Chờ 1 giây rồi chuyển trang
        setTimeout(() => {
            redirectToHome();
        }, 1000);

    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);

        // Hiển thị thông báo lỗi
        let errorMessage = 'Đăng nhập thất bại. Vui lòng thử lại.';
        if (error.message && error.message !== 'Failed to fetch') {
            errorMessage = error.message;
        }

        showErrorMessage('loginError', errorMessage);

    } finally {
        // Enable lại button
        loginButton.disabled = false;
        loginButton.textContent = 'Log In';
    }
}



// Khởi tạo trang login
function initLoginPage() {
    console.log('Khởi tạo trang login...');

    // Kiểm tra xem user đã đăng nhập chưa
    if (isUserLoggedIn()) {
        console.log('User đã đăng nhập, chuyển hướng đến home');
        redirectToHome();
        return;
    }

    // Gắn event listener cho form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
        console.log('Đã gắn event listener cho form login');
    } else {
        console.error('Không tìm thấy form login');
    }

    // Gắn event listener cho input để ẩn lỗi khi user nhập
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            hideErrorMessage('emailError');
            hideErrorMessage('loginError');
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            hideErrorMessage('passwordError');
            hideErrorMessage('loginError');
        });
    }

    console.log('Trang login đã sẵn sàng');
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', initLoginPage);