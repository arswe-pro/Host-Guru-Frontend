import React from 'react';
import { Button, Col, Image, Row, Typography } from 'antd';
import hosting from './../../../images/hosting.jpg'
import { CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const HeroSection = () => {
    return (

        <Row justify="center">
            <Col xs={24} sm={24} md={11} lg={11} xl={11} xxl={11}>
                <div style={{ marginTop: '6rem', }}>
                    <Title>Software and Web Application  <br /> Service Provider </Title>

                    <CheckOutlined /> Free 1 Year Domain Registration on Select Plans! <br />
                    <CheckOutlined /> Hundreds of Drag-and-Drop Website Templates<br />
                    <CheckOutlined /> E-commerce Ready<br />
                    <CheckOutlined /> 1-Click WordPress Installation<br />
                    <CheckOutlined /> $200 in Google AdWords and Yahoo! Credits<br />

                    <Link to="/SignUp"> <Button style={{ marginTop: '2rem' }} size="large" type="primary">Register</Button> </Link> 
                    <Button size="large" type="dashed">Transfer</Button>
                </div>
            </Col>
            <Col xs={22} sm={22} md={11} lg={11} xl={11} xxl={11}>
                <Image width={500} style={{ marginTop: '5rem' }} src={hosting} />
            </Col>
        </Row>

    );
};

export default HeroSection;