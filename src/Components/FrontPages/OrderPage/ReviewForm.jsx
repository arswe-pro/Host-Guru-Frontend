import { Button, Card, Col, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const ReviewForm = () => {
    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Card>

                        <form action="#">
                            <Input placeholder="Name" />
                            <br />
                            <br />

                            <Input placeholder="Email" />
                            <br />
                            <br />

                           
                            <TextArea rows={4} />
                            <br />
                            <br />

                            <Button type="primary" block> Submit </Button>
                        </form>
                    </Card>

                </Col>
            </Row>
        </div>
    );
};

export default ReviewForm;