import React, { useState, useEffect } from 'react';
import User from './User';
import Match from './Match';
import Calendar from './Calendar';
import './App.css';
import SwipeCardComponent from './SwipeCardComponent';

function App() {
  // State for the list of users
  const [users, setUsers] = useState([]);
  // State for the list of matches
  const [matches, setMatches] = useState([]);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to add a new match
  const addMatch = (match) => {
    setMatches([...matches, match]);
  };

  // Function to find a match for a user
  const findMatch = (user) => {
    // Matching algorithm based on distance, interests, values, and hobbies
    // This is a placeholder and should be replaced with your own algorithm
    const match = users.find((u) => u !== user);
    if (match) {
      addMatch(new Match(user, match));
    }
  };

  // Function to start a chat
  const startChat = (match) => {
    // Start a chat with a 48-hour limit
    // This is a placeholder and should be replaced with your own implementation
    setTimeout(() => {
      match.endChat();
    }, 48 * 60 * 60 * 1000);
  };

  // Function to schedule a date
  const scheduleDate = (match) => {
    // Use the calendar API to find an open time for users to meet
    // This is a placeholder and should be replaced with your own implementation
    const calendar = new Calendar();
    const date = calendar.findOpenTime(match.user1, match.user2);
    match.setDate(date);
  };

  // Effect to add some sample users on mount
  useEffect(() => {
    addUser(new User('Alice', 'New York', ['Reading'], 'Honesty', ['Cooking']));
    addUser(new User('Bob', 'New York', ['Cooking'], 'Kindness', ['Reading']));
  }, []);

  // Effect to find matches whenever the list of users changes
  useEffect(() => {
    users.forEach(findMatch);
  }, [users]);

  // Effect to start chats whenever a new match is made
  useEffect(() => {
    matches.forEach(startChat);
  }, [matches]);

  // Effect to schedule dates whenever a chat ends
  useEffect(() => {
    matches.filter((m) => m.chatEnded).forEach(scheduleDate);
  }, [matches]);

  return (
    <div id='app'>
      {/* Display the list of users */}
      {/* <div id='users'>
        {users.map((user) => (
          <div key={user.name}>{user.name}</div>
        ))}
      </div> */}
      <SwipeCardComponent />
      {/* Display the list of matches */}
      {/* <div id='matches'>
        {matches.map((match) => (
          <div key={match.id}>
            {match.user1.name} matched with {match.user2.name}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
