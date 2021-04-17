import { PlayCircleOutlined, CopyOutlined, Html5Outlined, AppstoreOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
const { Title } = Typography;


const ServicesSection = () => {
    return (
        <>
            <Layout style={{ marginTop: '4rem', marginBottom: '2rem' }}>
                <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Services </Title>

                <Row justify="center">
                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                        <Card style={{ textAlign: 'center', backgroundColor: 'GrayText', color: '#fff' }}>
                            <div style={{ fontSize: '8rem', color: 'InfoBackground' }}> <Html5Outlined /> </div>
                            <Title level={4}>Web Application </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventore </p>
                        </Card>
                    </Col>

                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                        <Card style={{ textAlign: 'center', backgroundColor: 'GrayText', color: '#fff' }}>
                            <div style={{ fontSize: '8rem', color: 'InfoBackground' }}><CopyOutlined /> </div>
                            <Title level={4}>Domain </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventore </p>
                        </Card>
                    </Col>

                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                        <Card style={{ textAlign: 'center', backgroundColor: 'GrayText', color: '#fff' }}>
                            <div style={{ fontSize: '8rem', color: 'InfoBackground' }}><AppstoreOutlined /></div>
                            <Title level={4}>Hosting </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventore </p>
                        </Card>
                    </Col>

                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={3}>
                        <Card style={{ textAlign: 'center', backgroundColor: 'GrayText', color: '#fff' }}>
                            <div style={{ fontSize: '8rem', color: 'InfoBackground' }}> <PlayCircleOutlined /> </div>
                            <Title level={4}> Social Media Ads </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventore </p>
                        </Card>
                    </Col>

                </Row>
            </Layout>


        </>
    );
};

export default ServicesSection;