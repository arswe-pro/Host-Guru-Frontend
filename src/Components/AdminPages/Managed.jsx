import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Managed = () => {

    const [serviceManaged, setServiceManaged] = useState([])

    useEffect(() => {
        fetch('https://guarded-coast-78303.herokuapp.com/AllServices')
            .then(Response => Response.json())
            .then(data => setServiceManaged(data))
    }, [])


    // Delete Product Item
    const deleteItem = id => {
        fetch(`https://guarded-coast-78303.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        }).then(res => {
            if (res) {
                console.log(res);
            }
        })
    }


    return (
       
            <>
                <Row justify="center">
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Card title="Product Details">
                            <table>
                                <thead>
                                    <tr>
                                        
                                        <th>Images</th>
                                        <th>Name</th>
                                        <th>description </th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {serviceManaged.map(ser =>
                                        <tr>
                                            
                                            <td><img src={ser.image} alt="" width="60" /></td>
                                            <td>{ser.name}</td>
                                            <td width="50%">{ser.description}</td>
                                            <td>${ser.price}</td>
                                            <td>
                                                <Link to="#"> <Button type="primary"> <EditOutlined /> </Button> </Link>
                                                <Link to="/"> <Button onClick={() => deleteItem(ser._id)} style={{ backgroundColor: 'red' }}>  <DeleteOutlined /> </Button> </Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </Card>
                    </Col>
                </Row>
            </>
       
    );
};

export default Managed;