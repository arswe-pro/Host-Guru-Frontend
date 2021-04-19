import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';


const AddService = () => {


    const imageUpload = () => {
        console.log('click');
    }

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={24}>
                    <Card title="Add Product">
                        <Form name="horizontal_login" layout="inline" onFinish={onFinish}>

                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your Product Name!' }]} >
                                <Input prefix={<ShoppingCartOutlined />} placeholder="Product Name" />
                            </Form.Item>

                            <Form.Item name="description" rules={[{ required: true, message: 'Please input your Description!' }]} >
                                <Input prefix={<UserOutlined />} placeholder="Author Name" />
                            </Form.Item>

                            <Form.Item name="price" rules={[{ required: true, message: 'Please input your Price!' }]} >
                                <Input prefix={<UserOutlined />} placeholder="Author Name" />
                            </Form.Item>

                            <div>
                                <input type="file" name="image" onChange={imageUpload} />
                            </div>

                            <Form.Item >
                                <Button htmlType="submit" type="primary" > Submit </Button>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AddService;