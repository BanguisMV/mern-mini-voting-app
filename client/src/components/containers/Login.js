import React, { useState } from 'react'
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined,
    EyeInvisibleOutlined, 
    EyeTwoTone,LockOutlined,
    GithubOutlined,
    InstagramOutlined,
    WarningOutlined } from '@ant-design/icons';

const openNotification = (message) => {
        const args = {
          message: message,
          duration:2.2,
          icon: <WarningOutlined style={{ color: 'red' }} />,
        };
        notification.open(args);
};
      
const Login = () => {
    const onFinish = async values => {
        console.log(values);
        // try {
        //   const auth =  await fetch('/login', {
        //         method: 'POST', 
        //         headers: { 'Content-Type': 'application/json'},
        //         body: JSON.stringify(values),
        //         })
        //   const authData = await auth.json()

        //   if(auth.status === 404 || auth.status === 400) {
        //      openNotification(authData.message)
        //   }
          
        // console.log(authData);
        // } catch (error) {
        //     console.log(error);
        // }
}

    return (
        <div className='login-page'>
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
        <Button type="primary" htmlType="submit" size="large" block>
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
