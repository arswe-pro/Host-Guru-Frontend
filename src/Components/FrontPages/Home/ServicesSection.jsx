import { Button, Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const { Title } = Typography;


const ServicesSection = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://guarded-coast-78303.herokuapp.com/AllServices')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div style={{ marginTop: '4rem', marginBottom: '2rem', }}>
                <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Services </Title>
                <hr style={{ padding: '1px', backgroundColor: 'lightsalmon', width: '10rem', margin: '0 auto', marginBottom: '1rem' }} />
                <p style={{ textAlign: 'center' }}>Buy a Hosting and everything else you need</p>
                <Row justify="center">

                    {services.map(data =>

                        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={data._id}>
                            <Card hoverable cover={<Image alt="example" src={data.image} />} style={{ textAlign: 'center', backgroundColor: 'lightsalmon', color: '#fff' }}>
                                <Title level={2}>{data.name} </Title>
                                <Title level={4}> Starting At ${data.price}/mo  </Title>
                                <Meta description={data.description}> </Meta>
                            </Card>
                            <Link to={`serviceOrder/${data._id}`}> <Button size="large" type="primary" block> Buy Now! </Button> </Link>
                        </Col>
                    )}

                </Row>
            </div>
        </>
    );
};

export default ServicesSection;