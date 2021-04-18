import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Navbar from '../../FrontPages/Home/Navbar/Navbar';


const SignUp = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Navbar />
            <Row justify="center">
                <Col xs={24} sm={18} md={12} lg={10} xl={8} xxl={6}>
                    <Card title="Sign In" style={{ marginTop: '5rem' }}>

                        <Form name="normal_login" initialValues={{ remember: true, }} onFinish={onFinish}>

                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your Name!', },]}>
                                <Input  size="large" prefix={<UserOutlined />} placeholder="Name" />
                            </Form.Item>

                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!', },]}>
                                <Input  size="large" prefix={<MailOutlined />} placeholder="Email" />
                            </Form.Item>

                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                                <Input  size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                            </Form.Item>

                            <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please input Password To Match!', },]}>
                                <Input  size="large" prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
                            </Form.Item>

                            <Button type="primary" htmlType="submit" block> Create Account </Button>
                            <Link to="/SignIn"> You Have a Account ?  Sign In!</Link>

                        </Form>

                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default SignUp;