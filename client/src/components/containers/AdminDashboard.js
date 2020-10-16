import React, { useState } from 'react'

import { PieChartOutlined , 
    UserOutlined, 
    TeamOutlined,
    SolutionOutlined,
    PoweroffOutlined   } from '@ant-design/icons';

import { Menu,Layout, Button ,Card, Col, Row } from 'antd';

const {Content, Sider } = Layout;


const AdminDashboard = () => {


    return (
   <Layout>
    <Sider 
    className="menu"
        breakpoint="md" 
        collapsedWidth="0" 
    >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                <Menu.Item key="1" icon={<PieChartOutlined />}>Dashboard</Menu.Item>
                <Menu.Item key="2" icon={<SolutionOutlined/>}>Party Lists</Menu.Item>
                <Menu.Item key="3" icon={<TeamOutlined />}>Candidates</Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>Voters</Menu.Item>
            </Menu> 
            <Button type="primary" danger icon={ <PoweroffOutlined  />} className="logout-button" />
        </Sider>

        <Layout className="site-body">     
         
          <Content className="site-layout">
              <div className="site-layout-body" >
                <div>
                  <Row gutter={[16, 16]}>
                    <Col  xs={24} sm={12} lg={8} >
                      <Card className='admin-card' title="Total Partylist" bordered={false}>
                        Total Partylist
                      </Card>
                    </Col>
                    <Col  xs={24} sm={12}  lg={8} >
                      <Card className='admin-card' title="Total Candidates" bordered={false}>
                        Total Candidates
                      </Card>
                    </Col>
                    <Col  xs={24} sm={24}  lg={8} >
                      <Card className='admin-card' title="Total Voters" bordered={false}>
                        Total Voters
                      </Card>
                    </Col>
                </Row>
                </div>
            
            <div className='statistics'>
asd
            </div>
              </div>
            </Content>
        </Layout>
   </Layout>
                  
        

    )
}

export default AdminDashboard
