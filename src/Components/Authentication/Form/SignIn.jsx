import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../FrontPages/Home/Navbar/Navbar';
import { useAuth } from '../Auth/useAuth';

const SignIn = () => {

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onFinish = (values) => {
        handleSignIn(values.email, values.password)
    };


    const handleSignIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                history.replace(from);
            })
    }
    const handleGoogleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                console.log(res);
                history.replace(from);
            })
    }

    return (
        <>
            <Navbar />
            <Row justify="center">
                <Col xs={24} sm={18} md={12} lg={10} xl={8} xxl={6}>
                    <Card title="Sign In" style={{ marginTop: '5rem' }}>
                        <Form initialValues={{ remember: true, }} onFinish={onFinish}>

                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!', },]}>
                                <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                            </Form.Item>

                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                                <Input size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block> Sign in </Button>
                            </Form.Item>
                            <Link to="#"> Forgot password</Link> Or  <Link to="SignUp">Create  Account</Link>
                            <br />
                            <Button type="primary" onClick={handleGoogleSignIn} > Sign In With Google  </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default SignIn;