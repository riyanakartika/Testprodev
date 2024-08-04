import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserPage from './components/UserPage';
import UserDetail from './components/UserDetail';
import TablePage from './components/TablePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={UserPage} exact />
        <Route path="/users/:id" component={UserDetail} />
        <Route path="/table" component={TablePage} />
      </Switch>
    </Router>
  );
}

export default App;
