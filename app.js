import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserPage from './components/UserPage';
import TablePage from './components/TablePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
