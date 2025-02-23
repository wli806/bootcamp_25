import { href } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const nacigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUserName = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleCancle = () => {
        setUsername('');
        setPassword('');
    }
    const handleCondirm = () => {
        if (username === 'admin' && password === '123456') {
            localStorage.setItem('token', "199999999978787878");
            window.location.href = '/blog';
        } else {
            alert('用户名或密码错误');
        }
    }

    return (
        <div>
            <div>用户名：<input type="text" value={username} onChange={(e) => handleUserName(e)} /></div>
            <div>密码：<input type="password" value={password} onChange={(e) => handlePassword(e)} /></div>
            <div>
                <button onClick={handleCancle}>取消</button>
                <button onClick={handleCondirm}>确认</button>
            </div>
        </div>
    );
}

export default LoginPage;