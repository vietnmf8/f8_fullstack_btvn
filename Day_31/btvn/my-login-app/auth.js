// File auth.js - Quản lý authentication và localStorage

// Lưu tokens vào localStorage
function saveTokensToStorage(accessToken, refreshToken) {
    try {
        console.log('Đang lưu tokens vào localStorage...');

        // Chuẩn hóa tên field - có thể API trả về 'access' thay vì 'access_token'
        const normalizedAccessToken = accessToken;
        const normalizedRefreshToken = refreshToken;

        localStorage.setItem('access_token', normalizedAccessToken);
        localStorage.setItem('refresh_token', normalizedRefreshToken);

        console.log('Đã lưu tokens thành công');
    } catch (error) {
        console.error('Lỗi khi lưu tokens:', error);
    }
}

// Lấy access token từ localStorage
function getAccessTokenFromStorage() {
    try {
        const token = localStorage.getItem('access_token');
        console.log('Access token từ storage:', token ? 'Có token' : 'Không có token');
        return token;
    } catch (error) {
        console.error('Lỗi khi lấy access token:', error);
        return null;
    }
}

// Lấy refresh token từ localStorage
function getRefreshTokenFromStorage() {
    try {
        const token = localStorage.getItem('refresh_token');
        console.log('Refresh token từ storage:', token ? 'Có token' : 'Không có token');
        return token;
    } catch (error) {
        console.error('Lỗi khi lấy refresh token:', error);
        return null;
    }
}

 // Cập nhật access token mới
function updateAccessToken(newAccessToken) {
    try {
        console.log('Đang cập nhật access token mới...');
        localStorage.setItem('access_token', newAccessToken);
        console.log('Đã cập nhật access token thành công');
    } catch (error) {
        console.error('Lỗi khi cập nhật access token:', error);
    }
}

 // Xóa tất cả tokens (logout)
function clearTokensFromStorage() {
    try {
        console.log('Đang xóa tokens khỏi localStorage...');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        console.log('Đã xóa tokens thành công');
    } catch (error) {
        console.error('Lỗi khi xóa tokens:', error);
    }
}

 // Kiểm tra xem user đã đăng nhập chưa
function isUserLoggedIn() {
    const accessToken = getAccessTokenFromStorage();
    const refreshToken = getRefreshTokenFromStorage();

    const isLoggedIn = !!(accessToken && refreshToken);
    console.log('Trạng thái đăng nhập:', isLoggedIn ? 'Đã đăng nhập' : 'Chưa đăng nhập');

    return isLoggedIn;
}


 // Chuyển hướng đến trang home
function redirectToHome() {
    console.log('Đang chuyển hướng đến trang home...');
    window.location.href = 'homepage.html';
}


 // Chuyển hướng đến trang login

function redirectToLogin() {
    console.log('Đang chuyển hướng đến trang login...');
    window.location.href = 'sessonStorage.html';
}