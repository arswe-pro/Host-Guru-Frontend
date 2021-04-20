import { Form, Button, Card, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../Authentication/Auth/useAuth';

const OrderFrom = () => {
    const auth = useAuth();

    let { id } = useParams();

    const [product, setProduct] = useState({});

    const { image, name, price } = product;

    useEffect(() => {

        fetch(`https://guarded-coast-78303.herokuapp.com/service/${id}`)

            .then(res => res.json())

            .then(data => setProduct(data));

    }, [id])



    const handleClick = () => {

        console.log('click');

        const bookingData = {
            name: auth.user.name,
            email: auth.user.email,
            serviceName: name,
            photo: image,
            price: price
        }

        console.log(bookingData);

        fetch('https://guarded-coast-78303.herokuapp.com/addOrder', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Card>
                        <Form name="horizontal_login">

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

                            <Button htmlType="button" onClick={handleClick} type="primary" block> Submit </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderFrom;