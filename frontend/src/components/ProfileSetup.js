import { useState } from 'react';
import axios from 'axios';

const ProfileSetup = () => {
    const [profile, setProfile] = useState({ height: '', weight: '', age: '', sport: '', level: '' });

    const handleSetup = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5001/api/profile/setup', profile, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Profile Created');
        } catch (error) {
            alert('Error setting profile');
        }
    };

    return (
        <div>
            <h2>Profile Setup</h2>
            <input placeholder="Height" onChange={(e) => setProfile({ ...profile, height: e.target.value })} />
            <input placeholder="Weight" onChange={(e) => setProfile({ ...profile, weight: e.target.value })} />
            <input placeholder="Age" onChange={(e) => setProfile({ ...profile, age: e.target.value })} />
            <input placeholder="Sport" onChange={(e) => setProfile({ ...profile, sport: e.target.value })} />
            <input placeholder="Level" onChange={(e) => setProfile({ ...profile, level: e.target.value })} />
            
            <button onClick={handleSetup}>Save</button>
        </div>
    );
};

export default ProfileSetup;
