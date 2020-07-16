import React from 'react';
import Login from './Login';
import ResetPassword from './User/ResetPassword';
import CreateUserAccount from './User/CreateUserAccount';
import CreateGuestAccount from  './Guest/CreateGuestAccount';
import GuestDashboard from './Guest/GuestDashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  // Top-most components are wrapped, so my entire react app has access to the Redux store.
  // 'store' is passed through Provider component to be access through the app.
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route path="/reset-password" component={ ResetPassword } />
          <Route path="/create-user-account" component={ CreateUserAccount } />
          <Route path="/guest-login" component={ CreateGuestAccount } />
          <Route exact path="/" component={ Login } />
          <Route path="./guest-dashboard" component={GuestDashboard} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
