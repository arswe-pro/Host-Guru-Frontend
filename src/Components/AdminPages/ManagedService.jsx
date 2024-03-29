import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { AppstoreOutlined, EditOutlined, DashboardOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Managed from './Managed';

const { Content, Sider } = Layout;
const { Title } = Typography;

const ManagedService = () => {
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
                            <Managed />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};

export default ManagedService;