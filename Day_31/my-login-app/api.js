// File api.js - Xử lý tất cả các API calls

// Base URL cho các API
const API_BASE_URL = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com';

// Gọi API Login

async function callLoginAPI(email, password) {
    try {
        console.log('Đang gọi API login...');

        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();
        console.log('Kết quả API login:', data);

        if (!response.ok) {
            throw new Error(data.message || 'Đăng nhập thất bại');
        }

        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API login:', error);
        throw error;
    }
}


// Gọi API lấy danh sách posts

async function callGetPostsAPI(accessToken) {
    try {
        console.log('Đang gọi API lấy posts...');

        const response = await fetch(`${API_BASE_URL}/post/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log('Kết quả API posts:', data);

        if (!response.ok) {
            if (response.status === 401) {
                // Token hết hạn
                throw new Error('TOKEN_EXPIRED');
            }
            throw new Error(data.message || 'Không thể lấy danh sách posts');
        }

        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API posts:', error);
        throw error;
    }
}

// Gọi API refresh token
async function callRefreshTokenAPI(refreshToken) {
    try {
        console.log('Đang gọi API refresh token...');

        const response = await fetch(`${API_BASE_URL}/login/get_new_token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        });

        const data = await response.json();
        console.log('Kết quả API refresh token:', data);

        if (!response.ok) {
            throw new Error(data.message || 'Không thể refresh token');
        }

        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API refresh token:', error);
        throw error;
    }
}