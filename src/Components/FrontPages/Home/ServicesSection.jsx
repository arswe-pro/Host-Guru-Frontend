import { PlayCircleOutlined, CopyOutlined, Html5Outlined, AppstoreOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
const { Title } = Typography;

const ServiceData = [
    {
        title: 'Shared hosting',
        description: 'We are open 7 days',
        icon: <Html5Outlined />,
      
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'Cloud Hosting ',
        description: 'We are open 7 days',
        icon: <CopyOutlined />,
       
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'AWS Hosting',
        description: 'Brooklyn, NY 10003 USA',
        icon: <PlayCircleOutlined />,
      
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        title: 'Azure Hosting',
        description: 'this is lutuputu',
        icon: <AppstoreOutlined />,
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'
    }
]


const ServicesSection = () => {

    return (
        <>
            <div style={{ marginTop: '4rem', marginBottom: '2rem', }}>
                <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Services </Title>
                <hr style={{padding:'1px' , backgroundColor:'lightsalmon' , width:'10rem' , margin: '0 auto' , marginBottom:'2rem'}} />
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
            </div>
        </>
    );
};

export default ServicesSection;