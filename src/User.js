// Importing the necessary dependencies
import React from 'react';

// User class definition
class User extends React.Component {
    constructor(props) {
        super(props);
        // Initializing the state with the user details
        this.state = {
            name: props.name,
            location: props.location,
            interests: props.interests,
            values: props.values,
            hobbies: props.hobbies
        };
    }

    // Function to update the user details
    updateUserDetails = (details) => {
        this.setState(details);
    }

    // Function to get the user details
    getUserDetails = () => {
        return this.state;
    }

    // Rendering the user details
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.location}</p>
                <p>{this.state.interests}</p>
                <p>{this.state.values}</p>
                <p>{this.state.hobbies}</p>
            </div>
        );
    }
}

// Exporting the User class
export default User;