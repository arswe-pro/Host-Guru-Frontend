import { Button, Card, Col, Input, Row } from 'antd';
import React from 'react';

const OrderFrom = () => {



    return (
        <>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Card>

                        <form action="#">
                            <Input value="akaid" />
                            <br />
                            <br />

                            <Input value="akaid" />
                            <br />
                            <br />

                            <Input value="akaid" />
                            <br />
                            <br />

                            <Input value="akaid" />
                            <br />
                            <br />

                            <Button type="primary" block> Submit </Button>
                        </form>
                    </Card>

                </Col>
            </Row>

        </>
    );
};

export default OrderFrom;