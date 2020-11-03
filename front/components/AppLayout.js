import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

const InputSearch = styled(Input.Search)`
vertical-align: middle
`;
const Global = createGlobalStyle`
.ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
}
.ant-col:first-child{
    padding-left: 0 !important;
}
.ant-col:last-child{
    padding-right: 0 !important;
}

`;
const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>nodebird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>profile</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <InputSearch enterButton />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;