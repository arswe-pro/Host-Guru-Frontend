import { Button, Card, Col, Image, Row, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import ProjectData from '../../../JsonData/ProjectData.json'
const { Title } = Typography;



const OurProject = () => {
    const [projects, setProjects] = useState(ProjectData)

    useEffect(() => {
        setProjects(projects)
    }, [projects])

    return (
        <div >
            <Title style={{ textAlign: 'center' }}>Project </Title>
            <hr style={{padding:'1px' , backgroundColor:'lightsalmon' , width:'10rem' , margin: '0 auto' , marginBottom:'2rem'}} />
            <Row justify="center" style={{ marginTop: '3rem' }}>
                {projects.map(project =>
                    <Col xs={23} sm={12} md={8} lg={6} xl={6} xxl={4} key={project.id}>
                        <Card hoverable cover={<Image alt="example" src={project.image} />} >
                            <Meta title={project.title} description={project.summary} />
                            <Button style={{margin:'1rem 0'}} type="primary" size="sm"  block> See Live </Button>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default OurProject;