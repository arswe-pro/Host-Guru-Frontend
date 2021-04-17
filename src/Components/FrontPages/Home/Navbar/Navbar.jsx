import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png'
const Navbar = () => {
    return (
        <Header style={{ backgroundColor: '#fff', position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu mode="horizontal" theme="light">
                <Menu.Item key="Home"> <Link to="/">  <img src={logo} width="50" alt="" /> </Link> </Menu.Item>
                <Menu.Item key="Home"> <Link to="/"> Home </Link> </Menu.Item>
                <Menu.Item key="Service"> <Link to="#"> Service </Link> </Menu.Item>
                <Menu.Item key="About"> <Link to="#"> About </Link> </Menu.Item>
                <Menu.Item key="Admin"> <Link to="/Admin"> Admin </Link> </Menu.Item>
                <Menu.Item key="SignIn"> <Link to="/SignIn"> SignIn </Link> </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;