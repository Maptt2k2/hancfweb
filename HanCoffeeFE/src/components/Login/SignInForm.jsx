import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../common/library/query';
import { PATH_DASHBOARD, ROOT_CUSTOMER, ROOT_DASHBOARD } from '../../common/routes/path';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State để lưu lỗi
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(''); // Reset lỗi trước khi submit

    // Kiểm tra các trường email và mật khẩu đã nhập chưa
    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu.');
      return;
    }

    try {
      const response = await axiosInstance.post('http://localhost:8888/api/user/login', { email, password });
      if (response) {
        const { token, user } = response.data || {};
        console.log(response.data);
        // Lưu token vào local storage
        localStorage.setItem('token', token);
        // Điều hướng dựa trên vai trò của người dùng
        if (user && user.role === 0) {
          navigate(ROOT_DASHBOARD);
        } else if (user && user.role === 2) {
          navigate(ROOT_CUSTOMER);
        } else if (user && user.role === 1) {
          navigate(ROOT_DASHBOARD);
        } else {
          console.error('Vai trò người dùng không xác định hoặc không hợp lệ');
        }
      } else {
        console.error('Phản hồi không xác định');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={submitHandler}>
        <h1>Đăng nhập</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        <span>Đăng nhập bằng email</span>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forgot-password" onClick={handleForgotPassword}>Bạn quên mật khẩu?</a>
        <button type="submit">Đăng nhập</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default SignInForm;
