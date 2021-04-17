import { PlayCircleOutlined, CopyOutlined, Html5Outlined, AppstoreOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
const { Title } = Typography;

const ServiceData = [
    {
        title: 'Website Provide',
        description: 'We are open 7 days',
        icon: <Html5Outlined />,
        background: 'primary',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'Hosting Provide',
        description: 'We are open 7 days',
        icon: <CopyOutlined />,
        background: 'primary',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'SEO Provide',
        description: 'Brooklyn, NY 10003 USA',
        icon: <PlayCircleOutlined />,
        background: 'dark',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'Marketing Provide',
        description: 'this is lutuputu',
        icon: <AppstoreOutlined />,
        background: 'primary',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'
    }
]


const ServicesSection = () => {

    return (
        <>
            <Layout style={{ marginTop: '4rem', marginBottom: '2rem', }}>
                <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Services </Title>
                <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nebitis.</p>
                <Row justify="center">
                    {ServiceData.map(data =>
                        <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4} key={data.id}>
                            <Card hoverable style={{ textAlign: 'center', backgroundColor:'lightsalmon', color: '#fff' }}>
                                <div style={{ fontSize: '8rem', color: 'InfoBackground' }}> {data.icon}  </div>
                                <Title level={4}>{data.title} </Title>
                                <Meta title={data.description} description={data.summary}> </Meta>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Layout>
        </>
    );
};

export default ServicesSection;