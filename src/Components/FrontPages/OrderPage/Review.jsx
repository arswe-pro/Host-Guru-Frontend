import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { AppstoreOutlined, StarOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';


const { Content, Sider } = Layout;

const { Title } = Typography;

const Review = () => {
    return (
        <>
            <Layout style={{ height:'100vh' }}>
                <Sider style={{ color: '#fff' }}>
                    <Title level={4} style={{ color: '#fff', textAlign: 'center', margin: '2rem 0', }}> <Link to="/"> <HomeOutlined /> HOST GURU  </Link> </Title>
                    <Menu theme="dark" mode="inline" defaultOpenKeys={['1']}>
                        <Menu.Item key="1"> <Link to="/OurOrder"> <AppstoreOutlined /> Order List  </Link> </Menu.Item>
                        <Menu.Item key="2"> <Link to="/Review"> <StarOutlined /> Review  </Link> </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '2rem 1rem' }}>
                    <Content >
                        <div>
                            <ReviewForm />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};

export default Review;