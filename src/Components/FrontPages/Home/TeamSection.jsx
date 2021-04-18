import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { MailOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TeamData from '../../../JsonData/TeamData.json'
const { Title } = Typography;

const TeamSection = () => {

    const [teams, setTeams] = useState(TeamData)

    useEffect(() => {
        setTeams(teams)
    }, [teams])
    return (
        <div style={{ margin: '3rem 2rem' }}>
            <Title style={{ textAlign: 'center' }}> Our Team </Title>
            <hr style={{padding:'1px' , backgroundColor:'lightsalmon' , width:'10rem' , margin: '0 auto' , marginBottom:'2rem'}} />
            <Row justify="center">
                {teams.map(team =>
                    <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={4} key={team.id}>
                        <Card title={team.name} hoverable cover={<Image alt={team.name} src={team.image} />} >
                            <Meta title={team.designation} description={team.summary} />

                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>

                        </Card>
                    </Col>
                )}


            </Row>
        </div>
    );
};

export default TeamSection;