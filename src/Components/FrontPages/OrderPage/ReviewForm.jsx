import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import ReviewTable from './ReviewTable';



const ReviewForm = () => {


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
            fetch('http://localhost:3333/customerReview', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(ServiceData)
            }).then(data => { if (data.ok === true) { <Redirect to='/' /> } })
        }
        else { alert('Image is uploading , Please wait') }
    };



    return (
        <div>

            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card title="Customers Review">
                        <Form name="horizontal_login" onFinish={onFinish}>

                            <Form.Item name="name" rules={[{ required: true, message: 'Please input your Product Name!' }]} >
                                <Input prefix={<ShoppingCartOutlined />} placeholder=" Name" />
                            </Form.Item>


                            <Form.Item name="designation" rules={[{ required: true, message: 'Please input your designation!' }]} >
                                <Input prefix={<UserOutlined />} placeholder=" designation " />
                            </Form.Item>

                            <Form.Item>
                                <input type="file" name="image" onChange={imageUpload} />
                            </Form.Item>

                            <Form.Item name="description" rules={[{ required: true, message: 'Please input your Description!' }]} >
                                <TextArea prefix={<UserOutlined />} placeholder="Description " rows={2} />
                            </Form.Item>

                            <Form.Item >
                                <Button htmlType="submit" type="primary" > Submit </Button>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
            </Row>


            <ReviewTable />


        </div>
    );
};

export default ReviewForm;