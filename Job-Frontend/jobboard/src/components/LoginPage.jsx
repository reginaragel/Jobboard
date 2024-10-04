import React, { useState, useContext } from "react";
import './LoginPage.css';
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "./UseContext"; // Import the actual context

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    // Destructure from UserContext
    const { setUserInfo, setToken } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });
            if (!response.ok) {
                alert('Error during login');
            } else {
                const userInfo = await response.json();
                setUserInfo(userInfo);
                setToken(userInfo.token);
                setRedirect(true);
            }
        } catch (err) {
            console.error(err);
            alert('Login Failed');
        }
    };

    // Redirect after login
    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="container">
                <h3 className="h3">Login</h3>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btnn" type="submit">Login</button>
                <span>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </span>
            </div>
        </form>
    );
};

export default LoginPage;
