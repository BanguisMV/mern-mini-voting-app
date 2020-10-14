import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone,LockOutlined ,GithubOutlined,InstagramOutlined } from '@ant-design/icons';

const Login = () => {
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='login-page'>
             
               <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className='login-form'
                >
                <div className="logo">
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
