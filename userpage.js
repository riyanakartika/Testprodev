import React, { useState, useEffect } from 'react';
import UserDetail from './UserDetail';
import './UserPage.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="user-page">
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <UserDetail key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
