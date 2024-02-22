import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
    const [value, setValue] = useState(''); // Corrected useState parameter name

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]); // Added dependencies for useCallback

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to My App</h1>
            <div className="input-container">
                <input
                    className="room-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Enter Room Code"
                />
                <button className="join-button" onClick={handleJoinRoom}>Join</button>
            </div>
        </div>
    );
}

export default Home;
