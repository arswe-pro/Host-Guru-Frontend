import { Form, Button, Card, Col, Input, Row } from 'antd';
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

    const onFinish = (data) => {
        console.log(data);
    }



    // const handleSubmit = (data) => {
    //     console.log(data);
    // }





    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Card>
                        <Form name="horizontal_login" onFinish={onFinish}>

                            <Input value={auth.user.name} />
                            <br />
                            <br />

                            <Input value={auth.user.email} />
                            <br />
                            <br />

                            <Input value={name} />
                            <br />
                            <br />

                            <Input value={image} />
                            <br />
                            <br />

                            <Input value={price} />
                            <br />
                            <br />
                            
                            <Link to="/PaymentOption"> <Button type="primary" block> Submit </Button>  </Link>


                        </Form>

                        {/* 
                        <form onSubmit={handleSubmit}>
                          
                        </form> */}

                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderFrom;