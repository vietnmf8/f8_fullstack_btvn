import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router";
import { toast } from 'react-toastify';

export default function () {

    /* ==========================================================================================
     * Khai báo biến & state
     * ========================================================================================== */

    // Gọi useNavigate
    const navigate = useNavigate();

    // Form gồm 2 trường email & password
    const [formLogin, setFormLogin] = useState({
        email: 'admin@gmail.com',
        password: '12345678',
    })

    // Trạng thái loading
    const [loading, setLoading] = useState(false)

    // Trạng thái error
    const [error, setError] = useState('')




    /* ==========================================================================================
     * useEffect -> lấy dữ liệu khi được mount
     * ========================================================================================== */



    /* ==========================================================================================
     * Xử lý logic
     * ========================================================================================== */

    // Validate form cơ bản -> bool
    const validateForm = () => {
        // Kiểm tra email trống
        if (!formLogin.email || !formLogin.email.includes('@gmail.com')) {
            // Thêm vào lỗi
            setError("Email không hợp lệ!!!")
            return false
        }
        // Kiểm tra mật khẩu trống
        if (!formLogin.password || formLogin.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự')
            return false
        }
        return true
    }

    // Khi nhấp vào Input
    const onChange = (e) => {
        const { name, value } = e.target
        setFormLogin({
            ...formLogin,
            [name]: value,
        })
    }

    // Khi nhấn vào nút Login
    const onLogin = async (e) => {
        e.preventDefault()        // Ngăn reload lại trang
        setError('')        // Làm trống lỗi

        // Validate form trước khi gửi
        if (!validateForm()) return

        // Chuyển trạng  thái loading
        setLoading(true)

        // Get API
        try {
            // Gọi method POST/login
            const { data } = await axios.post
            (
                'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/',
                formLogin
            )

            // Lấy access & refresh -> lưu vào localStorage
            const { access, refresh } = data
            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)

            // Chuyển sang trang Post
            navigate('/post')

            // Bắn toast thanh công!
            toast.success("Đăng nhập thành công!");
        }
        catch (error) {
            setError("Đăng nhập thất bại!!")
            toast.error("Đăng nhập thất bại!!");
        }
        finally {
            // Reset trạng thái Loading
            setLoading(false)
        }

    }



    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    // CSS
    const styles = {
        body: {
            background: '#c0c0c0',
            fontFamily: "'Raleway', sans-serif",
            color: '#666',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
        },
        form: {
            padding: '40px 50px',
            maxWidth: '300px',
            width: '100%',
            borderRadius: '5px',
            background: '#fff',
            boxShadow: '1px 1px 1px #666',
            textAlign: 'center',
        },
        input: {
            width: '100%',
            display: 'block',
            boxSizing: 'border-box',
            margin: '10px 0',
            padding: '14px 12px',
            fontSize: '16px',
            borderRadius: '2px',
            fontFamily: "'Raleway', sans-serif",
            border: '1px solid #c0c0c0',
            transition: '0.2s',
        },
        button: {
            width: '100%',
            height: '48px',
            border: 'none',
            background: '#EF5350',
            color: 'white',
            fontWeight: 'bold',
            transition: '0.2s',
            margin: '20px 0',
            cursor: 'pointer',
        },
        title: {
            margin: '20px 0 0',
            color: '#EF5350',
            fontSize: '28px',
        },
        paragraph: {
            marginBottom: '40px',
        },
        links: {
            display: 'table',
            width: '100%',
            boxSizing: 'border-box',
            borderTop: '1px solid #c0c0c0',
            marginBottom: '10px',
            paddingTop: '10px',
            fontSize: '0.8em',
        },
        linkLeft: {
            display: 'table-cell',
            textAlign: 'left',
            textDecoration: 'none',
            color: '#666',
        },
        linkRight: {
            display: 'table-cell',
            textAlign: 'right',
            textDecoration: 'none',
            color: '#666',
        },
    };

    return (
        <div style={styles.body}>
            <form style={styles.form} onSubmit={onLogin}>
                <h2 style={styles.title}>Welcome, User!</h2>
                <p style={styles.paragraph}>Please login</p>

                {/* Email */}
                <input
                    autoComplete={'off'}
                    type="email"
                    placeholder="Email"
                    name="email"
                    style={styles.input}
                    value={formLogin.email}
                    onChange={onChange}
                    required
                />

                {/* Password */}
                <input
                    autoComplete={'off'}
                    type="password"
                    placeholder="Password"
                    name="password"
                    style={styles.input}
                    value={formLogin.password}
                    onChange={onChange}
                    minLength={6}
                    required
                />

                {/* Button */}
                <button
                    type="submit"
                    style={styles.button}
                    disabled={loading}
                >
                    {loading ? "Đang đăng nhập" : "Login"}
                </button>

                <div style={styles.links}>
                    <a href="#" style={styles.linkLeft}>Forgot password?</a>
                    <a href="#" style={styles.linkRight}>Sign up</a>
                </div>
            </form>
        </div>
    )
}