import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component, auth, ...rest }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    return (
    <Route
        {...rest}
        render = {props => 
            isLoggedIn ? (
            <Component {...props} />
            ) : (
            <Redirect to="/auth"/>
            )
         }
    />
    )
};
export default PrivateRoute
