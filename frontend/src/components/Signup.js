import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userData, setUserData] = useState({ name: '', email: '', number: '', password: '' });
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const { data } = await axios.post('http://localhost:5001/api/users/signup', userData);
            localStorage.setItem('token', data.token);
            navigate('/profile-setup');
        } catch (error) {
            alert(error.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <input type="text" placeholder="Number" onChange={(e) => setUserData({ ...userData, number: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <button onClick={handleSignup}>Sign Up</button>
            <p>
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
};

export default Signup;
