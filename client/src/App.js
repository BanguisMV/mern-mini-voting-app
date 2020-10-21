import React, { useEffect } from 'react';
import HomePage from './components/containers/Home';
import LoginPage from './components/containers/Login';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';
import { validateToken } from './redux/actions/tokenExpAction';
import { useDispatch }from 'react-redux';

function App() {
  // , useSelector
  // const { isLoggedIn } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(validateToken())
  },[])

 
  return (
    <div className="App">
      <Switch>    
        <Route exact path ='/auth' component={LoginPage} />
        <Route path='/' component={HomePage} /> 
      </Switch>
    </div>
  );
}

export default App;
