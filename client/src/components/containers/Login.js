import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Form, Input, Button, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { LoginMiddleware } from '../../redux/actions/actions'
import { UserOutlined,
    EyeInvisibleOutlined, 
    EyeTwoTone,LockOutlined,
    GithubOutlined,
    InstagramOutlined,
    WarningOutlined } from '@ant-design/icons';

const openNotification = (message) => {
    const args = {
      message,
      duration:2.2,
      icon: <WarningOutlined style={{ color: 'red' }} />,
    };
    notification.open(args);
};

const Login = () => {

    const authData = useSelector(state => state.auth)
    const loginDispatch = useDispatch()
    const onFinish = values => {
        loginDispatch(LoginMiddleware(values));
    }
    useEffect(() => {
        if(authData.hasError) {
            openNotification(authData.errorMessage)
        }
        
    },[authData.hasError])
 
    console.log(authData);
    return (
        <div className='login-page'>
            <Helmet>
                <title>Login</title>
            </Helmet>

               <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className='login-form'
                >
                <div className="logo-login">
                    <h2>BanguisMV</h2>
                    <p>Voting App</p>
                </div>
               <Form.Item  
               name="username"    
               rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
               </Form.Item>

               <Form.Item  
               name="password"
               rules={[{ required: true, message: 'Please input your password!' }]}> 
                <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
               </Form.Item>

                <Button type="primary" htmlType="submit" 
                size="large" block loading={authData.loading}>
                Login
                </Button>

         </Form>
        
        <div className='links'>
            <a href="https://github.com/BanguisMV">  <GithubOutlined /> </a>
            <a href="https://www.instagram.com/slowstupidlearner/">    <InstagramOutlined /> </a>        
         </div>
        
        </div>
    )
}

export default Login
