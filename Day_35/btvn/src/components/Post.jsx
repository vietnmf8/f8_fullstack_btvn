import React, { useState, useEffect } from 'react';
import { get } from '../utils/index.js';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Gọi API để lấy danh sách bài viết khi component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            // Gọi API GET /post với token tự động được thêm vào header
            const data = await get('post/');

            if (data) {
                setPosts(data);
            } else {
                setError('Không thể tải danh sách bài viết');
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi tải bài viết');
        } finally {
            setLoading(false);
        }
    };

    // Hàm logout
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/';
    };

    if (loading) {
        return <div style={styles.container}>
            <h1 style={styles.title}>Post</h1>
            <p>Đang tải...</p>
        </div>;
    }

    if (error) {
        return <div style={styles.container}>
            <h1 style={styles.title}>Post</h1>
            <p style={styles.error}>{error}</p>
            <button onClick={fetchPosts} style={styles.button}>Thử lại</button>
        </div>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Post</h1>
                <button onClick={handleLogout} style={styles.logoutButton}>
                    Đăng xuất
                </button>
            </div>

            {posts.length > 0 ? (
                <div style={styles.postList}>
                    {posts.map((post, index) => (
                        <div key={index} style={styles.postItem}>
                            <h3>{post.title || `Bài viết ${index + 1}`}</h3>
                            <p>{post.content || post.description || 'Nội dung bài viết...'}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Không có bài viết nào.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: "'Raleway', sans-serif",
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        color: '#EF5350',
        fontSize: '32px',
        margin: 0,
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#EF5350',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#EF5350',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px',
    },
    postList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    postItem: {
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    error: {
        color: '#EF5350',
        fontSize: '16px',
    }
};

export default Post;