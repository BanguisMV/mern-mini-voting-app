import React, {useEffect}  from 'react'
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet'

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
     <Helmet>
       <head>Dashboard</head>
     </Helmet>
        <SideBar />
        <Layout className="site-body">     
          <Content className="site-layout">
                <div className="site-layout-body" >
                  <Switch>
                    <Route exact path="/statistics" component={Statistics} /> 
                    <Route exact path="/partylists" component={PartyLists} />
                    <Route exact path="/candidates" component={Candidates} />
                    <Route exact path="/voters" component={Voters} />
                  </Switch>
                </div>
            </Content>
        </Layout>
   </Layout>           
    )
}

export default AdminDashboard
