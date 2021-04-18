import { PlayCircleOutlined, CopyOutlined, InsertRowBelowOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const ServiceData = [
    {
        id:"1",
        title: 'Shared hosting',
        icon: <InsertRowBelowOutlined />,
        price: "Starting At $3.08/mo*",
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        id:"2",
        title: 'Cloud Hosting ',
        icon: <CopyOutlined />,
        price: "Starting At $5.08/mo*",
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        id:"3",
        title: 'AWS Hosting',
        icon: <PlayCircleOutlined />,
        price: "Starting At $8.08/mo*",
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis illum molestias. Accusantium modi quae magni sed inventor'

    },
    {
        id:"4",
        title: 'Azure Hosting',
        icon: <AppstoreOutlined />,
        price: "Starting At $10.08/mo*",
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
                        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={data.id}>
                            <Card hoverable style={{ textAlign: 'center', backgroundColor:'lightsalmon', color: '#fff' }}>
                                <div style={{ fontSize: '8rem', color: 'InfoBackground' }}> {data.icon}  </div>
                                <Title level={4}>{data.title} </Title>
                                <Meta title={data.price} description={data.summary}> </Meta>
                            </Card>
                            <Link to={`Orders/${data.id}`}> <Button size="large" type="primary" block> Buy Now! </Button> </Link>
                        </Col>
                    )}
                </Row>
            </div>
        </>
    );
};

export default ServicesSection;