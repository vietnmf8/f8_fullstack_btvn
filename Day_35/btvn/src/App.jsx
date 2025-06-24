import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from './utils/index.js';

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
  error: {
    color: '#EF5350',
    fontSize: '14px',
    marginTop: '10px',
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validation form cơ bản
  const validateForm = () => {
    if (!email || !email.includes('@')) {
      setError('Email không hợp lệ');
      return false;
    }
    if (!password || password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form trước khi gửi
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Gọi API login
      const result = await post('login/', { email, password });

      if (result && result.access && result.refresh) {
        // Lưu tokens vào localStorage
        localStorage.setItem('access_token', result.access);
        localStorage.setItem('refresh_token', result.refresh);

        // Chuyển hướng đến trang post
        navigate('/post');
      } else {
        setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div style={styles.body}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Welcome, User!</h2>
          <p style={styles.paragraph}>Please log in</p>

          <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />

          <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
          />

          {error && <div style={styles.error}>{error}</div>}

          <button
              type="submit"
              style={styles.button}
              disabled={loading}
          >
            {loading ? 'Đang đăng nhập...' : 'Log In'}
          </button>

          <div style={styles.links}>
            <a href="#" style={styles.linkLeft}>Forgot password?</a>
            <a href="#" style={styles.linkRight}>Sign up</a>
          </div>
        </form>
      </div>
  );
};

export default Login;