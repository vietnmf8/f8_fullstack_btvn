// File home.js - Xử lý logic trang home

// Hiển thị loading indicator
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('postsContainer').style.display = 'none';
    document.getElementById('noPosts').style.display = 'none';
    console.log('Hiển thị loading...');
}


 // Ẩn loading indicator
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
    console.log('Ẩn loading...');
}

// Hiển thị thông báo lỗi
function showError(message) {
    hideLoading();
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    console.log('Hiển thị lỗi:', message);
}

 // Hiển thị danh sách posts
function displayPosts(posts) {
    hideLoading();
    console.log('Hiển thị posts:', posts);

    const postsContainer = document.getElementById('postsContainer');

    if (!posts || posts.length === 0) {
        document.getElementById('noPosts').style.display = 'block';
        return;
    }

    // Tạo HTML cho các posts
    let postsHTML = '';
    posts.forEach((post, index) => {
        postsHTML += `
            <div class="post-item">
                <div class="post-title">
                    ${post.title || `Post ${index + 1}`}
                </div>
                <div class="post-content">
                    ${post.content || post.body || post.description || 'Không có nội dung'}
                </div>
            </div>
        `;
    });

    postsContainer.innerHTML = postsHTML;
    postsContainer.style.display = 'block';
    console.log('Đã hiển thị', posts.length, 'posts');
}

 // Tải danh sách posts với xử lý token refresh
async function loadPosts() {
    console.log('Bắt đầu tải posts...');
    showLoading();

    try {
        // Lấy access token
        let accessToken = getAccessTokenFromStorage();

        if (!accessToken) {
            throw new Error('Không có access token');
        }

        // Gọi API lấy posts
        const result = await callGetPostsAPI(accessToken);

        // Hiển thị posts
        const posts = result.posts || result.data || result;
        displayPosts(posts);

    } catch (error) {
        console.error('Lỗi khi tải posts:', error);

        // Nếu token expired, thử refresh token
        if (error.message === 'TOKEN_EXPIRED') {
            console.log('Token expired, thử refresh token...');

            try {
                await handleTokenRefresh();
                // Sau khi refresh thành công, gọi lại API
                await loadPostsAfterRefresh();

            } catch (refreshError) {
                console.error('Không thể refresh token:', refreshError);
                showError('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');

                // Chờ 2 giây rồi chuyển về trang login
                setTimeout(() => {
                    handleLogout();
                }, 2000);
            }
        } else {
            // Lỗi khác
            showError(error.message || 'Không thể tải danh sách posts');
        }
    }
}

 // Tải lại posts sau khi refresh token
async function loadPostsAfterRefresh() {
    console.log('Tải lại posts sau khi refresh token...');

    try {
        const newAccessToken = getAccessTokenFromStorage();
        const result = await callGetPostsAPI(newAccessToken);

        const posts = result.posts || result.data || result;
        displayPosts(posts);

        console.log('Tải posts thành công sau khi refresh token');

    } catch (error) {
        console.error('Vẫn lỗi sau khi refresh token:', error);
        throw error;
    }
}

 // Xử lý refresh token
async function handleTokenRefresh() {
    console.log('Bắt đầu refresh token...');

    const refreshToken = getRefreshTokenFromStorage();

    if (!refreshToken) {
        throw new Error('Không có refresh token');
    }

    try {
        // Gọi API refresh token
        const result = await callRefreshTokenAPI(refreshToken);

        // Chuẩn hóa tên field
        const newAccessToken = result.access_token || result.access;

        if (!newAccessToken) {
            throw new Error('API không trả về access token mới');
        }

        // Cập nhật access token mới
        updateAccessToken(newAccessToken);

        console.log('Refresh token thành công');

    } catch (error) {
        console.error('Lỗi khi refresh token:', error);
        throw error;
    }
}

 // Xử lý đăng xuất
function handleLogout() {
    console.log('Đang đăng xuất...');

    // Xóa tokens khỏi localStorage
    clearTokensFromStorage();

    // Chuyển về trang login
    redirectToLogin();
}



 // Khởi tạo trang home
function initHomePage() {
    console.log('Khởi tạo trang home...');

    // Kiểm tra xem user đã đăng nhập chưa
    if (!isUserLoggedIn()) {
        console.log('User chưa đăng nhập, chuyển hướng đến login');
        redirectToLogin();
        return;
    }

    // Gắn event listener cho nút đăng xuất
    const logoutButton = document.getElementById('logoutBtn');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
        console.log('Đã gắn event listener cho nút đăng xuất');
    }

    // Tải danh sách posts
    loadPosts();

    console.log('Trang home đã sẵn sàng');
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', initHomePage);