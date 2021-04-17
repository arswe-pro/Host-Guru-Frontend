import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FileOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';
import logo2 from '../../images/logo.png'
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = () => {

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible >
                    <div>
                        <Link to="/"> <img src={logo2} alt="" /> </Link>
                    </div>
                    <Menu theme="dark" mode="inline">

                        <SubMenu key="sub1" icon={<UserOutlined />} title="Hero">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<UserOutlined />} title="Service">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>


                        <SubMenu key="sub3" icon={<UserOutlined />} title="Pricing">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub4" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>



                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            content components
                           
                        </div>





                    </Content>
                    <Footer style={{ textAlign: 'center' }}>host guru ©2021 Created by Abdur rahman </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default Admin;