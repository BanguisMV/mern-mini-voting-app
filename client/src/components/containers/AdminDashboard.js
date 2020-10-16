import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';

import Statistics from './DashboardStatistics';
import SideBar from './DashboardSideBar';
import PartyLists from './DashboardPartyLists';
import Voters from './DashboardVoters';
import Candidates from './DashboardCandidates';
import { Layout } from 'antd';


const { Content  } = Layout;
const AdminDashboard = () => {
    return (
   <Layout>
        <SideBar />
        <Layout className="site-body">     
          <Content className="site-layout">
                <div className="site-layout-body" >
                {/* Switch Between  */}
                  <Switch>
                    <PrivateRoute exact path="/statistics" component={Statistics} /> 
                    <PrivateRoute exact path="/partylists" component={PartyLists} />
                    <PrivateRoute exact path="/candidates" component={Candidates} />
                    <PrivateRoute exact path="/voters" component={Voters} />
                  </Switch>
                </div>
            </Content>
        </Layout>
   </Layout>           
    )
}

export default AdminDashboard
