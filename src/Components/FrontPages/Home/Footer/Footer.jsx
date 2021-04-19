import { BackTop, Button, Card, Col, Image, Input, Menu, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import payment from '../../../../images/payment.png'
import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import logo from '../../../../images/logo.png'

const Footer = () => {
    return (
        <>
            <div>
                <Row justify="center">
                    <Col xs={23} sm={12} md={8} lg={8} xl={6} xxl={6}>
                        <Menu mode="inline" >
                            <Menu.Item key="1" ><img src={logo} width="100" alt=""/></Menu.Item>
                            <Menu.Item key="1" > team condition</Menu.Item>
                            <Menu.Item key="2" >  Security </Menu.Item>
                            <Menu.Item key="2" >  Help Center </Menu.Item>
                            <Menu.Item key="2" >  24/7 Support </Menu.Item>
                        </Menu>
                    </Col>
                    <Col xs={23} sm={12} md={8} lg={12} xl={12} xxl={6}>
                        <Card>
                            <Form>
                                <div style={{ marginBottom: 16 }} >
                                    <Input size="sm" placeholder="Username" />
                                </div>
                                <div style={{ marginBottom: 16 }} >
                                    <TextArea rows={3} placeholder="Write Your Opinion" ></TextArea>
                                </div>

                                <Button size="large" type="primary" block> Submit </Button>
                            </Form>
                        </Card>
                    </Col>

                    <Col xs={23} sm={12} md={8} lg={8} xl={6} xxl={6}>
                        <Card> <Image src={payment} /> </Card>
                        <BackTop>
                            <div > <Button type="primary"><ArrowUpOutlined /> Top</Button> </div>
                        </BackTop>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Footer;