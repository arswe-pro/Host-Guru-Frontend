import { FacebookOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientData from '../../../JsonData/ClientData.json'
const { Title } = Typography;




const OurClient = () => {

    const [clients, setClients] = useState(ClientData)

    useEffect(() => {
        setClients(clients)
    }, [clients])

    return (
        <div style={{ margin: '4rem 2rem' }}>
            <Title style={{ textAlign: 'center' }}>Our Client </Title>
            <hr style={{padding:'1px' , backgroundColor:'lightsalmon' , width:'10rem' , margin: '0 auto' , marginBottom:'2rem'}} />
            <Row justify="center">
                {clients.map(client =>
                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4} key={client.id}>
                        <Card title={client.name} hoverable cover={<Image alt="example" src={client.image} />} >
                            <Meta title={client.designation} description={client.summary} />
                            <div style={{ textAlign: 'center' }}>
                                <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '2rem' }}><MailOutlined /> </Link>
                                <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '2rem' }}> <FacebookOutlined /></Link>
                                <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '2rem' }}><TwitterOutlined /></Link>
                            </div>
                        </Card>
                    </Col>
                )}

            </Row>
        </div>
    );
};

export default OurClient;