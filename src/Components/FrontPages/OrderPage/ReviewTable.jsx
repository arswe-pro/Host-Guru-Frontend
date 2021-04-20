import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

const ReviewTable = () => {


    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3333/AllReview')
            .then(Response => Response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Card title="Our Client or Customers Review">
                        <table>
                            <thead>
                                <tr>

                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Description </th>
                                   
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>

                            <tbody>

                                {reviews && reviews.map(rev =>
                                    <tr>

                                        <td><img src={rev.image} alt="" width="60" /></td>
                                        <td>{rev.name}</td>
                                        <td>{rev.designation}</td>
                                        <td width="50%">{rev.description}</td>
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

export default ReviewTable;