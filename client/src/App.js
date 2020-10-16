import React from 'react';
import AdminDashboard from './components/containers/AdminDashboard';
import LoginPage from './components/containers/Login';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
console.log(isLoggedIn);
  return (
    <div className="App">
      <Switch>
          <Route exact path='/dashboard'>
            {isLoggedIn ? <AdminDashboard /> : <LoginPage/>}
          </Route>

          <Route exact path='/login'>
              <LoginPage/>
          </Route>

          <Route exact path="/">
            {isLoggedIn ? <Redirect  from='/dashboard' to="/" /> : <Redirect  from='/' to="/login" />}
          </Route> 
    </Switch>
    </div>
  );
}

export default App;
