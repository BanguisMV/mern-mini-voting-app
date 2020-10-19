import React, {useState} from 'react'
import { useDispatch }from 'react-redux';
import { useHistory } from "react-router-dom";
import { Menu,Layout, Button , Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import { PieChartOutlined , 
    UserOutlined, 
    TeamOutlined,
    SolutionOutlined,
    PoweroffOutlined   } from '@ant-design/icons';

    
const { Sider } = Layout;

const DashboardSideBar = () => {
    const [visible, setVisible] = useState(false)
    const showModal = () => setVisible(true)
    const handleCancel = e => setVisible(false);

    const dispatch = useDispatch()
    const history = useHistory();

      const handleOk = e => {
        setVisible(false)
        localStorage.removeItem('token')
        dispatch ({type:'LOGOUT'})
        history.push("/auth")
      };
    

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
            <Button type="primary" danger icon={ <PoweroffOutlined  />} className="logout-button" onClick={showModal}/>
        
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                width={250}
                >
                <h3>Are you sure?</h3>
            </Modal>
        </Sider>
    )
}

export default DashboardSideBar
