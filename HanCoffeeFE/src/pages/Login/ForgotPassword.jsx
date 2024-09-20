
import React, { useState } from 'react';
import axios from 'axios'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8888/api/user/forgot-password', { email });
            setMessage(response.data.message);
            setTimeout(() => {
                setMessage('');
                window.location.href = '/login'; 
            }, 2000);
        } catch (error) {
            setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
            setTimeout(() => {
                setMessage('');
            }, 5000);
        }
    };

    return (
        <div className="form-forgot">
            <form onSubmit={handleSubmit}>
                <h1>Quên Mật Khẩu</h1>
                <input 
                    type="email" 
                    placeholder="Nhập email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Gửi Mật Khẩu Mới</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
