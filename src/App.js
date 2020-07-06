import React from 'react';
import Login from './Login';
import ResetPassword from './User/ResetPassword';
import CreateUserAccount from './User/CreateUserAccount';
import CreateGuestAccount from  './Guest/CreateGuestAccount';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/reset-password" component={ ResetPassword } />
        <Route path="/create-user-account" component={ CreateUserAccount } />
        <Route path="/guest-login" component={ CreateGuestAccount } />
        <Route exact path="/" component={ Login } />
      </Router>
    </div>
  );
}

export default App;
