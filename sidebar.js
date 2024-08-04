import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul className="nav-list">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
      <div className="sidebar-footer">
        <p>Contact Support</p>
        <p>Email: support@example.com</p>
      </div>
    </aside>
  );
};

export default Sidebar;
