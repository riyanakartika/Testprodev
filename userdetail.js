import React from 'react';
import './UserDetail.css';

const UserDetail = ({ user }) => {
  return (
    <li className="user-detail">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Group ID: {user.groupId}</p>
      </div>
    </li>
  );
};

export default UserDetail;
