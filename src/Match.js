// Importing React and useState for component creation
import React, { useState, useEffect } from 'react';

// Importing User model
import User from './User';

// Match function component
const Match = () => {
    // State of the component
    const [user1, setUser1] = useState(new User()); // First user in the match
    const [user2, setUser2] = useState(new User()); // Second user in the match
    const [matchTime, setMatchTime] = useState(new Date()); // Time when the match was made
    const [status, setStatus] = useState('active'); // Status of the match

    // Method to check if the match is still within the 48-hour limit
    const isWithinLimit = () => {
        const currentTime = new Date();
        const timeDifference = currentTime - matchTime;
        const timeLimit = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

        // If the time difference is less than the limit, the match is still active
        if (timeDifference < timeLimit) {
            setStatus('active');
            return true;
        } else {
            setStatus('expired');
            return false;
        }
    }

    // UseEffect to check the match status when the component renders
    useEffect(() => {
        isWithinLimit();
    }, []);

    // Render method
    return (
        <div>
            <h2>Match</h2>
            <p>User 1: {user1.name}</p>
            <p>User 2: {user2.name}</p>
            <p>Status: {status}</p>
        </div>
    );
}

// Exporting Match function component
export default Match;