import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Navbar from '../../FrontPages/Home/Navbar/Navbar';

const SignIn = () => {
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

                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!', },]}>
                                <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                            </Form.Item>

                            <Form.Item  name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                                <Input size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item name="remember"  valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block> Sign in </Button>
                            </Form.Item>
                            <Link to="#"> Forgot password</Link> Or  <Link to="SignUp">Create  Account</Link>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default SignIn;