// Importing the necessary dependencies
import React, { useState } from 'react';

// User functional component definition
const User = (props) => {
  // Initializing the state with the user details
  const [name, setName] = useState(props.name);
  const [location, setLocation] = useState(props.location);
  const [interests, setInterests] = useState(props.interests);
  const [values, setValues] = useState(props.values);
  const [hobbies, setHobbies] = useState(props.hobbies);

  // Function to update the user details
  const updateUserDetails = (details) => {
    setName(details.name);
    setLocation(details.location);
    setInterests(details.interests);
    setValues(details.values);
    setHobbies(details.hobbies);
  };

  // Function to get the user details
  const getUserDetails = () => {
    return { name, location, interests, values, hobbies };
  };

  // Rendering the user details
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{interests}</p>
      <p>{values}</p>
      <p>{hobbies}</p>
    </div>
  );
};

// Exporting the User component
export default User;
