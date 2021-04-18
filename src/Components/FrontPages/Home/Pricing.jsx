import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import PricingData from '../../../JsonData/PricingData.json'

const { Title } = Typography;

const Pricing = () => {


    const [pricings, setPricings] = useState(PricingData)


    useEffect(() => {
        setPricings(pricings)
    }, [pricings])

    return (
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
           
            <Title > Every Plan Pricing </Title>
            <hr style={{padding:'1px' , backgroundColor:'lightsalmon' , width:'10rem' , margin: '0 auto' , marginBottom:'2rem'}} />
            <Row justify="center">
                {pricings.map(pricing =>

                    <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                        <Card title={pricing.title} hoverable style={{ backgroundColor: '#3d7c7d', color: '#fff' }}>
                            <p> <CaretRightOutlined />  <strong>{pricing.Single} </strong></p>
                            <p> <CaretRightOutlined /><strong>{pricing.FreeWordPress}</strong> </p>
                            <p> <CaretRightOutlined /><strong>{pricing.FreeSSL}</strong> </p>
                            <p> <CaretRightOutlined /><strong>{pricing.$200}</strong> </p>
                            <p> <CaretRightOutlined /><strong>{pricing.Transfer}</strong> </p>
                            <p> <CaretRightOutlined /><strong>{pricing.Email}</strong> </p>
                            <p> <CaretRightOutlined /><strong>{pricing.price}</strong> </p>
                            <div style={{ fontWeight: '600', textAlign: 'center', margin: '1rem 1rem ', fontSize: '22px' }}>
                                <strong> Starting At $2.75/mo* </strong>
                            </div>
                            <Button size="large" type="primary" block> Buy Now! </Button>
                        </Card>
                    </Col>
                )}


            </Row>

        </div>
    );
};

export default Pricing;