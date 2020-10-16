import React from 'react'
import { PieChartOutlined , 
    UserOutlined, 
    TeamOutlined,
    SolutionOutlined,
    PoweroffOutlined   } from '@ant-design/icons';

import { Menu,Layout, Button } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;


const DashboardSideBar = () => {
    return (
        <Sider 
    className="menu"
        breakpoint="md" 
        collapsedWidth="0" 
    >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
              
                <Menu.Item key="1" icon={<PieChartOutlined />}>  
                    <NavLink to='/statistics'> Dashboard</NavLink>
                </Menu.Item>
                
                <Menu.Item key="2" icon={<SolutionOutlined/>}>
                    <NavLink to='/partylists'> Party Lists</NavLink>
                </Menu.Item>

                <Menu.Item key="3" icon={<TeamOutlined />}>
                    <NavLink to='/candidates'> Candidates </NavLink>
                </Menu.Item>

                <Menu.Item key="4" icon={<UserOutlined />}>
                    <NavLink to='/voters'> Voters</NavLink>
                </Menu.Item>

            </Menu> 
            <Button type="primary" danger icon={ <PoweroffOutlined  />} className="logout-button" />
        </Sider>
    )
}

export default DashboardSideBar
