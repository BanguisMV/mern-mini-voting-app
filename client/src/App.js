import React from 'react';
import LoginPage from './components/containers/Login';

// import { Route, Redirect } from 'react-router-dom';
// import PrivateRoute from './components/utils/PrivateRoute';
// import AdminDashboard from './components/containers/AdminDashboard';
// import { useSelector } from 'react-redux'

function App() {

  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div className="App">
    <LoginPage  />
    </div>
  );
}

export default App;
