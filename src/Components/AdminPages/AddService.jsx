import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';

const AddService = () => {

    const [imageURL, setIMageURL] = useState(null);

    const imageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '729572a3b5356d1497d6e88f1e9eafde');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) { setIMageURL(response.data.data.display_url) })
            .catch(function (error) { console.log(error) })
    }

    const onFinish = (data) => {
        if (imageURL !== null) {
            const ServiceData = data;
            ServiceData.image = imageURL;
            fetch('http://localhost:3333/addservice', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(ServiceData)
            }).then(data => { if (data.ok === true) { <Redirect to='/' /> } })
        }
        else { alert('Image is uploading , Please wait') }
    };

    return (
        <>
            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={24}>
                    <Card title="Add Product">
                        <Form name="horizontal_login" onFinish={onFinish}>

                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your Product Name!' }]} >
                                <Input prefix={<ShoppingCartOutlined />} placeholder=" Name" />
                            </Form.Item>


                            <Form.Item name="price" rules={[{ required: true, message: 'Please input your price!' }]} >
                                <Input prefix={<UserOutlined />} placeholder=" Price " />
                            </Form.Item>

                            <Form.Item>
                                <input type="file" name="image" onChange={imageUpload} />
                            </Form.Item>

                            <Form.Item name="description" rules={[{ required: true, message: 'Please input your Description!' }]} >
                                <TextArea prefix={<UserOutlined />} placeholder="Description " rows={4} />
                            </Form.Item>

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