import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

import Admin from './AdminDashboard'
import User from './UserHomePage'

const Home = () => {
    let UI 
    const { role } = useSelector(state => state.auth)

    if(role === 'admin' || role === 'demo') {  
        UI =  <Admin /> 
    } else if ( role === 'user') {
        UI =  <User />
    }

    return (
        <Fragment >
           {UI}
        </Fragment >
    )
}

export default Home
