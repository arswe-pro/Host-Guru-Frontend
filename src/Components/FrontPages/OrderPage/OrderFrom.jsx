import { Button, Card, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Authentication/Auth/useAuth';

const OrderFrom = () => {
    const auth = useAuth();

    let { id } = useParams();

    const [product, setProduct] = useState({});

    const { image, name, price } = product;

    useEffect(() => {

        fetch(`http://localhost:3333/service/${id}`)

            .then(res => res.json())

            .then(data => setProduct(data));

    }, [id])


    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Card>

                        <form action="#">

                            <div style={{ textAlign: 'center' }}>
                                <img src={image} width="100" alt="" />
                            </div>

                            <Input value={auth.user.name} />
                            <br />
                            <br />

                            <Input value={auth.user.email} />
                            <br />
                            <br />

                            <Input value={name} />
                            <br />
                            <br />

                            <Input value={price} />
                            <br />
                            <br />


                            <Link to="/PaymentOption"> <Button type="primary" block> Submit </Button>  </Link>
                        </form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderFrom;