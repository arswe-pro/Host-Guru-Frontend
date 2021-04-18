import { LogoutOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png'
import { useAuth } from '../../../Authentication/Auth/useAuth';

const Navbar = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            })
    }
    return (
        <Header style={{ backgroundColor: '#fff' }}>
            <Menu mode="horizontal" theme="light">
                <Menu.Item key="Home"> <Link to="/">  <img src={logo} width="50" alt="" /> </Link> </Menu.Item>
                <Menu.Item key="Home"> <Link to="/Home"> Home </Link> </Menu.Item>
                <Menu.Item key="Service"> <Link to="/Service"> Service </Link> </Menu.Item>
                <Menu.Item key="Service"> <Link to="/Price"> Pricing </Link> </Menu.Item>
                <Menu.Item key="Project"> <Link to="/Project"> Project </Link> </Menu.Item>
                <Menu.Item key="Project"> <Link to="/Client">Client </Link> </Menu.Item>
                <Menu.Item key="About"> <Link to="/About"> About </Link> </Menu.Item>
                <Menu.Item key="Admin"> <Link to="/Admin"> Admin </Link> </Menu.Item>
                {
                    auth.user ?
                        <Menu.Item key="SignIn"> <Link to="/SignIn"> <Button onClick={handleSignOut} type="primary"> <LogoutOutlined /> {auth.user.name}</Button> </Link> </Menu.Item>
                        :
                        <Menu.Item key="SignIn"> <Link to="/SignIn"> <Button type="primary"> Sign In</Button> </Link> </Menu.Item>
                }

            </Menu>
        </Header>
    );
};

export default Navbar;