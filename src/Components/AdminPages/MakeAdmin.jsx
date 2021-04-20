import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Input, Layout, Menu, Row, Typography } from 'antd';
import { AppstoreOutlined, EditOutlined, DashboardOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
const { Content, Sider } = Layout;
const { Title } = Typography;

const MakeAdmin = () => {
    const history = useHistory();

    const onFinish = (values) => {
        console.log(values);
        fetch('https://guarded-coast-78303.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data => {
                alert('Your admin is successfully added')
                history.replace('/MakeAdmin');
            })
    }


    const [Admins, setAdmins] = useState([])

    useEffect(() => {
        fetch('https://guarded-coast-78303.herokuapp.com/AllAdmin')
            .then(Response => Response.json())
            .then(data => setAdmins(data))
    }, [])

    return (
        <>
            <Layout style={{ height: '100vh' }}>
                <Sider style={{ color: '#fff' }}>
                    <Title level={4} style={{ color: '#fff', textAlign: 'center', margin: '2rem 0', }}> <Link to="/" target="_blank"> <HomeOutlined /> HOST GURU  </Link> </Title>
                    <Menu theme="dark" mode="inline" defaultOpenKeys={['1']}>
                        <Menu.Item key="1"> <Link to="/AdminPanel"> <EditOutlined />SERVICE</Link> </Menu.Item>
                        <Menu.Item key="2"> <Link to="/MakeAdmin"> <UserOutlined />Make Admin </Link> </Menu.Item>
                        <Menu.Item key="3"> <Link to="/ManagedService"> <AppstoreOutlined />Managed SERVICE</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '2rem 1rem' }}>
                    <Content >
                        <div>
                            <Title level={4}> <DashboardOutlined /> DashBoard </Title>
                            <hr style={{ backgroundColor: '#ccc', width: '100%', marginBottom: '1rem' }} />
                        </div>

                        <div>

                            <Row justify="center">
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <Card title="Add Admin">
                                        <Form name="horizontal_login" onFinish={onFinish}>

                                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Product Email!' }]} >
                                                <Input prefix={<UserOutlined />} placeholder=" Email" />
                                            </Form.Item>

                                            <Form.Item >
                                                <Button htmlType="submit" type="primary" block> Submit </Button>
                                            </Form.Item>

                                        </Form>
                                    </Card>
                                </Col>
                            </Row>

                            <Row justify="center">
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                    <Card title="Admin List">

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {Admins.map(Admin =>
                                                    <tr>
                                                        <td width="100%">{Admin._id}</td>
                                                        <td width="100%">{Admin.email}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};

export default MakeAdmin;