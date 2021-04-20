import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Authentication/Auth/useAuth';

const OrderTable = () => {

    const auth = useAuth();
    
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch(`https://guarded-coast-78303.herokuapp.com/showOrders/${auth.user.email}`)
            .then(Response => Response.json())
            .then(data => setOrders(data))
    }, [auth.user.email])

    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={20}>
                    <Card title="Our Client or Customers orderiew">
                        <table>
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>service Name</th>
                                    <th>Photo</th>
                                    <th>Price </th>
                                   
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>

                            <tbody>

                                {orders && orders.map(order =>
                                    <tr key={order.id}>
                                        <td style={{padding:'0.5rem'}}>{order.name}</td>
                                        <td style={{padding:'0.5rem'}}>{order.email}</td>
                                        <td style={{padding:'0.5rem'}}>{order.serviceName}</td>
                                        <td ><img src={order.photo} width="100" /></td>
                                        <td style={{padding:'0.5rem'}}>{order.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OrderTable;