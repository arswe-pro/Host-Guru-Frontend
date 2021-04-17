import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Layout from 'antd/lib/layout/layout';
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
        <Layout style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <Title style={{ textAlign: 'center' }}> Our Team </Title>
            <Row justify="center">
                {teams.map(team =>
                    <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={3} key={team.id}>
                        <Card title={team.name} hoverable cover={<Image alt="example" src={team.image} />} >
                            <Meta title={team.designation} description={team.summary} />

                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><MailOutlined /> </Link>
                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}> <FacebookOutlined /></Link>
                            <Link to="#" style={{ marginLeft: '1rem', fontSize: '1.5rem', marginTop: '1rem' }}><TwitterOutlined /></Link>

                        </Card>
                    </Col>
                )}


            </Row>
        </Layout>
    );
};

export default TeamSection;