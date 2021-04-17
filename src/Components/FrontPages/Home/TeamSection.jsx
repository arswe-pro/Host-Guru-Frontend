import React from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Layout from 'antd/lib/layout/layout';
import { MailOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const TeamSection = () => {
    return (
        <Layout style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <Title style={{ textAlign: 'center' }}> Our Team </Title>
            <Row justify="center">
                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>

                    </Card>
                </Col>

                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />

                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>


                    </Card>
                </Col>

                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>
                    </Card>
                </Col>

                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>
                    </Card>
                </Col>

                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />

                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>

                    </Card>
                </Col>

                <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3}>
                    <Card hoverable  cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                        <Meta title="Europe Street beat" description="www.instagram.com" />

                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                        <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>

                    </Card>
                </Col>

            </Row>
        </Layout>
    );
};

export default TeamSection;