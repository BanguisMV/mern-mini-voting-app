import React from 'react';
import AdminDashboard from './components/containers/AdminDashboard';
import LoginPage from './components/containers/Login';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';
function App() {

  return (
    <div className="App">
      <Switch>
      <PrivateRoute >
        <AdminDashboard />
      </PrivateRoute>
      <Route exact path='/login' component={LoginPage} /> 

      </Switch>

    </div>
  );
}

export default App;
