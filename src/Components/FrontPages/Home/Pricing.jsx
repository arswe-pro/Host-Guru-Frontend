import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';


const { Title } = Typography;

const Pricing = () => {
    return (
        <Layout style={{ marginTop: '4rem', textAlign:'center' }}>

            <Title > Every Plan Pricing </Title>


            <Row justify="center">
                <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="Hatchling Plan" hoverable style={{ backgroundColor: '#3d7c7d', color: '#fff' }}>
                        <p> <CaretRightOutlined /> <strong>Single</strong> Domain</p>
                        <p> <CaretRightOutlined /><strong> Free</strong> WordPress Installs</p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> WordPress Installs</p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> SSL Certificate </p>
                        <p> <CaretRightOutlined /> <strong> $200</strong> Marketing Offer </p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> WordPress/Cpanel Website Transfer </p>
                        <p> <CaretRightOutlined /> Professional Email Address </p>

                        <div style={{ fontWeight: '600', textAlign: 'center', margin: '1rem 1rem ', fontSize: '22px' }}>
                            <strong> Starting At $2.75/mo* </strong>
                        </div>
                        <Button size="large" type="primary" block> Buy Now! </Button>
                    </Card>
                </Col>
                <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="Baby Plan" hoverable style={{ backgroundColor: '#106cbb', color: '#fff' }}>
                        <p> <CaretRightOutlined /> Everything in Hatchling, plus:</p>
                        <p> <CaretRightOutlined /> Unlimited Domains </p>
                        <div style={{ fontWeight: '600', textAlign: 'center', margin: '1rem 1rem ', fontSize: '22px' }}>
                            <strong> Starting At $3.38/mo* </strong>
                        </div>
                        <Button style={{ marginTop: '6rem' }} type="primary" size="large" block> Buy Now! </Button>
                    </Card>
                </Col>
                <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="Business Plan" hoverable style={{ backgroundColor: '#3d7c7d', color: '#fff' }}>
                        <p> <CaretRightOutlined /> Single Domain</p>
                        <p> <CaretRightOutlined /><strong> Free</strong> WordPress Installs</p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> WordPress Installs</p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> SSL Certificate </p>
                        <p> <CaretRightOutlined /> $200 Marketing Offer </p>
                        <p> <CaretRightOutlined /> <strong> Free</strong> WordPress/Cpanel Website Transfer </p>
                        <p> <CaretRightOutlined /> Professional Email Address </p>
                        <div style={{ fontWeight: '600', textAlign: 'center', margin: '1rem 1rem ', fontSize: '22px' }}>
                            <strong> Starting At $5.08/mo* </strong>
                        </div>
                        <Button size="large" type="primary" block> Buy Now! </Button>
                    </Card>
                </Col>
            </Row>

        </Layout>
    );
};

export default Pricing;