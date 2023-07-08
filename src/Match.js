// Importing React for component creation
import React from 'react';

// Importing User model
import User from './User';

// Match class
class Match extends React.Component {
    constructor(props) {
        super(props);
        // State of the component
        this.state = {
            user1: new User(), // First user in the match
            user2: new User(), // Second user in the match
            matchTime: new Date(), // Time when the match was made
            status: 'active' // Status of the match
        };
    }

    // Method to check if the match is still within the 48-hour limit
    isWithinLimit() {
        const currentTime = new Date();
        const timeDifference = currentTime - this.state.matchTime;
        const timeLimit = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

        // If the time difference is less than the limit, the match is still active
        if (timeDifference < timeLimit) {
            this.setState({ status: 'active' });
            return true;
        } else {
            this.setState({ status: 'expired' });
            return false;
        }
    }

    // Render method
    render() {
        return (
            <div>
                <h2>Match</h2>
                <p>User 1: {this.state.user1.name}</p>
                <p>User 2: {this.state.user2.name}</p>
                <p>Status: {this.state.status}</p>
            </div>
        );
    }
}

// Exporting Match class
export default Match;