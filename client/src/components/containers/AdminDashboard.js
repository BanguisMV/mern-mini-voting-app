import React  from 'react'
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet'
import { withRouter } from "react-router-dom";
import Statistics from './DashboardStatistics';
import SideBar from './DashboardSideBar';
import PartyLists from './DashboardPartyLists';
import Voters from './DashboardVoters';
import Candidates from './admin/candidates';

import { Layout } from 'antd';


const { Content  } = Layout;
const AdminDashboard = (props) => {
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
                    <Route exact path={`/`} component={Statistics}/> 
                    <Route exact path={`/partylists`} component={PartyLists}/>
                    <Route exact path={`/candidates`} component={Candidates}/>
                    <Route exact path={`/voters`} component={Voters}/>
                  </Switch>
                </div>
            </Content>
        </Layout>
   </Layout>           
    )
}

export default withRouter(AdminDashboard)


// <Switch>
// <Route path={`/statistics`} component={Statistics} /> 
// <Route path={`/partylists`} component={PartyLists} />
// <Route path={`/candidates`} component={Candidates} />
// <Route path={`/voters`} component={Voters} />
// </Switch>